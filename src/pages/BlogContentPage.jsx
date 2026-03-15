import React from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import API_URL from "@/config/api";

export default function BlogContentPage() {
  const { slug } = useParams();

  const [post, setPost] = React.useState(null);
  const [postBlocks, setPostBlocks] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [relatedPosts, setRelatedPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const fetchBlogContent = async () => {
      setLoading(true);
      setError("");

      try {
        const [categoryRes, allPostRes] = await Promise.all([
          fetch(`${API_URL}/api/blog-category`, {
            headers: { accept: "*/*" },
          }),
          fetch(`${API_URL}/api/post`, {
            headers: { accept: "*/*" },
          }),
        ]);

        if (!categoryRes.ok || !allPostRes.ok) {
          throw new Error("Không thể tải dữ liệu bài viết");
        }

        const categoryData = await categoryRes.json();
        const allPostData = await allPostRes.json();

        const categoryItems = Array.isArray(categoryData?.items)
          ? categoryData.items
          : [];

        const allPosts = Array.isArray(allPostData?.items)
          ? allPostData.items
          : [];

        setCategories(categoryItems);

        let currentPost = null;

        // 1) Tìm theo slug từ danh sách posts trước
        currentPost =
          allPosts.find((item) => String(item.slug) === String(slug)) || null;

        // 2) Nếu không có thì thử coi slug thực ra là postId
        if (!currentPost) {
          currentPost =
            allPosts.find((item) => String(item.postId) === String(slug)) ||
            null;
        }

        // 3) Nếu vẫn chưa có thì gọi API theo query param Swagger
        if (!currentPost) {
          const isNumericId = /^\d+$/.test(String(slug));

          const detailUrl = isNumericId
            ? `${API_URL}/api/post?PostId=${encodeURIComponent(slug)}`
            : `${API_URL}/api/post?Slug=${encodeURIComponent(slug)}`;

          const postRes = await fetch(detailUrl, {
            headers: { accept: "*/*" },
          });

          if (!postRes.ok) {
            throw new Error("Không thể tải chi tiết bài viết");
          }

          const postData = await postRes.json();

          if (Array.isArray(postData?.items)) {
            currentPost = postData.items[0] || null;
          } else if (Array.isArray(postData)) {
            currentPost = postData[0] || null;
          } else if (postData?.data) {
            currentPost = postData.data;
          } else {
            currentPost = postData;
          }
        }

        if (!currentPost || !currentPost.postId) {
          throw new Error("Không tìm thấy bài viết");
        }

        setPost(currentPost);

        // Lấy blocks theo đúng swagger: GET /api/post-block?PostId=...
        const blockRes = await fetch(
          `${API_URL}/api/post-block?PostId=${encodeURIComponent(
            currentPost.postId,
          )}`,
          {
            headers: { accept: "*/*" },
          },
        );

        if (!blockRes.ok) {
          throw new Error("Không thể tải nội dung bài viết");
        }

        const blockData = await blockRes.json();

        let blockItems = [];
        if (Array.isArray(blockData?.items)) {
          blockItems = blockData.items;
        } else if (Array.isArray(blockData)) {
          blockItems = blockData;
        } else if (blockData?.data && Array.isArray(blockData.data)) {
          blockItems = blockData.data;
        }

        const sortedBlocks = [...blockItems].sort((a, b) => {
          return Number(a.position || 0) - Number(b.position || 0);
        });

        setPostBlocks(sortedBlocks);

        const related = allPosts
          .filter(
            (item) =>
              String(item.postId) !== String(currentPost.postId) &&
              String(item.blogCategoryId) ===
                String(currentPost.blogCategoryId),
          )
          .slice(0, 3);

        setRelatedPosts(related);
      } catch (err) {
        console.error(err);
        setError(err.message || "Không thể tải nội dung bài viết.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogContent();
  }, [slug]);

  const getCategoryName = (blogCategoryId) => {
    const found = categories.find(
      (cat) => String(cat.blogCategoryId) === String(blogCategoryId),
    );
    return found?.name || "Chưa phân loại";
  };

  const formatDate = (dateString) => {
    if (!dateString) return "--/--/----";
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return "--/--/----";
    return date.toLocaleDateString("vi-VN");
  };

  const normalizeImageUrl = (url) => {
    if (!url) {
      return "https://via.placeholder.com/1200x700?text=No+Image";
    }

    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }

    return `${API_URL}${url}`;
  };

  const getPostPreviewImage = (item) => {
    return (
      item?.thumbnailUrl ||
      item?.imageUrl ||
      item?.coverImageUrl ||
      "https://via.placeholder.com/1200x700?text=No+Image"
    );
  };

  const renderBlock = (block) => {
    const type = Number(block?.type);
    const value = block?.data || "";

    if (type === 1) {
      return (
        <h2 className="text-[#2E6418] text-[34px] md:text-[56px] font-bold leading-[1.15] tracking-[-0.02em]">
          {value}
        </h2>
      );
    }

    if (type === 2) {
      return (
        <h3 className="text-[22px] md:text-[26px] font-bold leading-[1.35] text-black">
          {value}
        </h3>
      );
    }

    if (type === 3) {
      return (
        <p className="text-[17px] md:text-[18px] leading-8 text-black/75 whitespace-pre-line">
          {value}
        </p>
      );
    }

    if (type === 4) {
      return (
        <div className="rounded-[12px] overflow-hidden">
          <img
            src={normalizeImageUrl(value)}
            alt="blog content"
            className="w-full h-[220px] md:h-[320px] object-cover"
          />
        </div>
      );
    }

    return null;
  };

  const imageBlocks = postBlocks.filter((block) => Number(block.type) === 4);
  const textBlocks = postBlocks.filter((block) => Number(block.type) !== 4);

  return (
    <div
      className="min-h-screen bg-[#FFFAF0] text-[#1f1f1f]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <NavBar />

      <main>
        <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-8 pb-20">
          {loading ? (
            <div className="py-16 text-center text-lg text-black/60">
              Đang tải nội dung bài viết...
            </div>
          ) : error ? (
            <div className="py-16 text-center text-lg text-red-500">
              {error}
            </div>
          ) : !post ? (
            <div className="py-16 text-center text-lg text-black/60">
              Không tìm thấy bài viết.
            </div>
          ) : (
            <>
              {/* HERO */}
              <section className="rounded-[10px] bg-[#2E6418] px-6 py-12 md:px-10 md:py-14 text-center text-[#FFFAF0]">
                <h1 className="text-[30px] md:text-[44px] font-bold uppercase leading-[1.2] tracking-[-0.01em]">
                  KHÁM PHÁ KINH NGHIỆM TỔ CHỨC TIỆC
                  <br />
                  TRONG MỖI BÀI VIẾT
                </h1>

                <p className="mt-7 max-w-[760px] mx-auto text-[15px] md:text-[16px] leading-7 text-white/90">
                  Cùng BOOKFET tìm hiểu các mẹo tổ chức tiệc buffet hiệu quả,
                  lựa chọn menu phù hợp và tối ưu trải nghiệm sự kiện cho mọi
                  quy mô tiệc.
                </p>
              </section>

              {/* TITLE + EXCERPT */}
              <section className="mt-14">
                <h2 className="text-[#2E6418] text-[34px] md:text-[56px] font-bold leading-[1.15] tracking-[-0.02em]">
                  {post.title}
                </h2>

                {post.excerpt && (
                  <p className="mt-5 max-w-[1120px] text-[17px] md:text-[18px] leading-8 text-black/75">
                    {post.excerpt}
                  </p>
                )}
              </section>

              {/* TOP IMAGES */}
              {imageBlocks.length > 0 && (
                <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {imageBlocks.slice(0, 2).map((block) => (
                    <div key={block.postBlockId || block.id}>
                      {renderBlock(block)}
                    </div>
                  ))}
                </section>
              )}

              {/* CONTENT + META */}
              <section className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">
                <div className="space-y-7">
                  {textBlocks.map((block) => (
                    <div key={block.postBlockId || block.id}>
                      {renderBlock(block)}
                    </div>
                  ))}
                </div>

                <aside className="rounded-[12px] bg-[#DCE8CB] px-6 py-6">
                  <h3 className="text-[18px] font-medium uppercase text-black/80">
                    CHI TIẾT
                  </h3>

                  <div className="mt-3 h-px bg-black/20" />

                  <div className="mt-5 grid grid-cols-[120px_1fr] gap-y-5 text-[16px]">
                    <div className="uppercase text-black/35">Ngày đăng</div>
                    <div className="text-right text-black/80">
                      {formatDate(post.publishedAt || post.createdAt)}
                    </div>

                    <div className="uppercase text-black/35">Chuyên mục</div>
                    <div className="text-right text-black/80">
                      {getCategoryName(post.blogCategoryId)}
                    </div>
                  </div>
                </aside>
              </section>

              {/* RELATED POSTS */}
              {relatedPosts.length > 0 && (
                <section className="mt-24">
                  <h3 className="text-center text-[#E85E1B] text-[34px] md:text-[52px] font-bold uppercase">
                    Có thể bạn quan tâm
                  </h3>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {relatedPosts.map((item) => (
                      <article key={item.postId}>
                        <div className="rounded-[10px] overflow-hidden">
                          <img
                            src={normalizeImageUrl(getPostPreviewImage(item))}
                            alt={item.title}
                            className="w-full h-[220px] object-cover"
                          />
                        </div>

                        <div className="mt-4">
                          <p className="text-[14px] text-black/45">
                            {formatDate(item.createdAt)}
                          </p>

                          <h4 className="mt-2 text-[22px] font-bold leading-8">
                            {item.title}
                          </h4>

                          <Link
                            to={`/blog/${item.slug || item.postId}`}
                            className="mt-4 inline-block text-[#E85E1B] text-[18px] font-semibold underline"
                          >
                            Xem thêm
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )}
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
