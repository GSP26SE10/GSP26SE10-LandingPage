import React from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import API_URL from "@/config/api";

function normalizePostStatus(status) {
  const raw = String(status ?? "").trim();
  const lowered = raw.toLowerCase();

  if (lowered === "published" || raw === "1") return "Published";
  if (lowered === "archived" || raw === "2") return "Archived";
  return "Draft";
}

function isPublishedPost(post) {
  return normalizePostStatus(post?.status) === "Published";
}

function normalizeImageUrls(input) {
  if (Array.isArray(input)) return input.filter(Boolean);

  if (typeof input === "string" && input.trim()) {
    if (input.startsWith("[")) {
      try {
        const parsed = JSON.parse(input);
        return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
      } catch {
        return [input];
      }
    }
    return [input];
  }

  return [];
}

function normalizeImageUrl(url) {
  if (!url) return "https://via.placeholder.com/1200x700?text=No+Image";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${API_URL}${url}`;
}

function formatDate(dateString) {
  if (!dateString) return "--/--/----";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "--/--/----";
  return date.toLocaleDateString("vi-VN");
}

function getCategoryName(categories, blogCategoryId) {
  const found = categories.find(
    (cat) => String(cat.blogCategoryId) === String(blogCategoryId),
  );
  return found?.name || "Chưa phân loại";
}

function getPostCoverImages(post) {
  return normalizeImageUrls(
    post?.coverImageFiles ||
      post?.coverImages ||
      post?.coverImage ||
      post?.imgUrl ||
      post?.imageUrls ||
      post?.thumbnailUrl ||
      post?.imageUrl ||
      post?.coverImageUrl,
  ).map(normalizeImageUrl);
}

function getPostPreviewImage(post) {
  const covers = getPostCoverImages(post);
  return covers[0] || "https://via.placeholder.com/1200x700?text=No+Image";
}

function renderBlock(block) {
  const type = Number(block?.type);
  const value = String(block?.data || "").trim();

  if (!value) return null;

  if (type === 1) {
    return (
      <h2 className="text-[#2F3A67] text-[28px] md:text-[36px] font-bold leading-[1.2]">
        {value}
      </h2>
    );
  }

  if (type === 2) {
    return (
      <h3 className="text-[#2F3A67] text-[22px] md:text-[28px] font-semibold leading-[1.3]">
        {value}
      </h3>
    );
  }

  if (type === 3) {
    return (
      <p className="whitespace-pre-line text-[15px] md:text-[17px] leading-8 text-[#374151]">
        {value}
      </p>
    );
  }

  if (type === 4) {
    return (
      <div className="overflow-hidden rounded-[24px] border border-[#ECE7DF] bg-[#FAFBFD]">
        <img
          src={normalizeImageUrl(value)}
          alt="blog content"
          className="w-full max-h-[520px] object-cover"
        />
      </div>
    );
  }

  if (type === 5) {
    return (
      <blockquote className="rounded-[24px] border-l-4 border-[#E8712E] bg-[#FFF8F2] px-5 py-4 md:px-6 md:py-5 text-[17px] md:text-[20px] italic leading-8 text-[#5B6780]">
        “{value}”
      </blockquote>
    );
  }

  return null;
}

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
          fetch(`${API_URL}/api/blog-category?page=1&pageSize=200`, {
            headers: { accept: "*/*" },
          }),
          fetch(`${API_URL}/api/post?page=1&pageSize=200`, {
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
          ? allPostData.items.filter(isPublishedPost)
          : [];

        setCategories(categoryItems);

        let currentPost =
          allPosts.find((item) => String(item.slug) === String(slug)) || null;

        if (!currentPost) {
          currentPost =
            allPosts.find((item) => String(item.postId) === String(slug)) ||
            null;
        }

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

        if (
          !currentPost ||
          !currentPost.postId ||
          !isPublishedPost(currentPost)
        ) {
          throw new Error("Không tìm thấy bài viết");
        }

        setPost(currentPost);

        const blockRes = await fetch(
          `${API_URL}/api/post-block?PostId=${encodeURIComponent(
            currentPost.postId,
          )}&page=1&pageSize=200`,
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

        const sortedBlocks = [...blockItems].sort(
          (a, b) => Number(a.position || 0) - Number(b.position || 0),
        );
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

  const categoryName = post
    ? getCategoryName(categories, post.blogCategoryId)
    : "Chưa phân loại";

  const coverImages = post ? getPostCoverImages(post) : [];

  return (
    <div
      className="min-h-screen bg-[#FFF8F2] text-[#1f1f1f]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <NavBar />

      <main>
        <section className="max-w-[1440px] mx-auto px-5 md:px-7 lg:px-10 pt-8 md:pt-10 pb-20">
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
              <section className="rounded-[32px] bg-white border border-[#ECE7DF] shadow-sm overflow-hidden">
                <div className="px-6 py-8 md:px-10 md:py-10 border-b border-[#F1E7DA]">
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="inline-flex rounded-full bg-[#EEF2FF] px-3 py-1 font-semibold text-[#2F3A67]">
                      Đã xuất bản
                    </span>

                    <span className="inline-flex rounded-full bg-[#FFF3E8] px-3 py-1 font-semibold text-[#E8712E]">
                      {categoryName}
                    </span>
                  </div>

                  <h1 className="mt-5 text-[#2E6418] text-[30px] md:text-[46px] lg:text-[56px] font-bold leading-[1.12] tracking-[-0.02em]">
                    {post.title}
                  </h1>

                  {post.excerpt && (
                    <p className="mt-5 max-w-[980px] text-[16px] md:text-[18px] leading-8 text-[#5B6780]">
                      {post.excerpt}
                    </p>
                  )}
                </div>

                {coverImages.length > 0 && (
                  <div className="px-6 py-6 md:px-10 md:py-8">
                    {coverImages.length === 1 ? (
                      <div className="overflow-hidden rounded-[28px] border border-[#ECE7DF] bg-[#FAFBFD]">
                        <img
                          src={coverImages[0]}
                          alt={post.title}
                          className="w-full h-[260px] md:h-[420px] object-cover"
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {coverImages.slice(0, 2).map((src, index) => (
                          <div
                            key={`${src}-${index}`}
                            className="overflow-hidden rounded-[28px] border border-[#ECE7DF] bg-[#FAFBFD]"
                          >
                            <img
                              src={src}
                              alt={`${post.title}-${index + 1}`}
                              className="w-full h-[240px] md:h-[360px] object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </section>

              <section className="mt-10 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px] gap-8 items-start">
                <article className="rounded-[32px] bg-white border border-[#ECE7DF] shadow-sm px-6 py-7 md:px-10 md:py-10">
                  <div className="space-y-6 md:space-y-7">
                    {postBlocks.length > 0 ? (
                      postBlocks.map((block) => (
                        <div
                          key={block.postBlockId || block.id || block.position}
                        >
                          {renderBlock(block)}
                        </div>
                      ))
                    ) : (
                      <div className="rounded-2xl border border-dashed border-[#D6DFEF] bg-[#FAFBFD] px-5 py-10 text-center text-sm text-[#8DA1C1]">
                        Bài viết chưa có nội dung chi tiết.
                      </div>
                    )}
                  </div>
                </article>

                <aside className="xl:sticky xl:top-24 rounded-[28px] bg-[#DCE8CB] px-6 py-6">
                  <h3 className="text-[18px] font-semibold uppercase tracking-[0.04em] text-[#2F3A67]">
                    Chi tiết bài viết
                  </h3>

                  <div className="mt-4 h-px bg-black/15" />

                  <div className="mt-5 space-y-5 text-[15px] md:text-[16px]">
                    <div className="grid grid-cols-[110px_1fr] gap-3">
                      <div className="uppercase text-black/40">Ngày đăng</div>
                      <div className="text-right text-black/80 font-medium">
                        {formatDate(post.publishedAt || post.createdAt)}
                      </div>
                    </div>

                    <div className="grid grid-cols-[110px_1fr] gap-3">
                      <div className="uppercase text-black/40">Chuyên mục</div>
                      <div className="text-right text-black/80 font-medium">
                        {categoryName}
                      </div>
                    </div>

                    <div className="grid grid-cols-[110px_1fr] gap-3">
                      <div className="uppercase text-black/40">Mã bài viết</div>
                      <div className="text-right text-black/80 font-medium">
                        #{post.postId}
                      </div>
                    </div>
                  </div>
                </aside>
              </section>

              {relatedPosts.length > 0 && (
                <section className="mt-20 md:mt-24">
                  <h3 className="text-center text-[#E85E1B] text-[30px] md:text-[46px] font-bold uppercase leading-[1.15]">
                    Có thể bạn quan tâm
                  </h3>

                  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                    {relatedPosts.map((item) => (
                      <article
                        key={item.postId}
                        className="rounded-[28px] bg-white border border-[#ECE7DF] p-4 md:p-5 shadow-sm"
                      >
                        <div className="overflow-hidden rounded-[22px]">
                          <img
                            src={getPostPreviewImage(item)}
                            alt={item.title}
                            className="w-full h-[220px] object-cover"
                          />
                        </div>

                        <div className="mt-4">
                          <p className="text-[14px] text-black/45">
                            {formatDate(item.publishedAt || item.createdAt)}
                          </p>

                          <h4 className="mt-2 text-[22px] font-bold leading-8 text-[#2F3A67] line-clamp-2">
                            {item.title}
                          </h4>

                          {item.excerpt && (
                            <p className="mt-3 text-[15px] leading-7 text-[#5B6780] line-clamp-3">
                              {item.excerpt}
                            </p>
                          )}

                          <Link
                            to={`/blog/${item.slug || item.postId}`}
                            className="mt-4 inline-block text-[#E85E1B] text-[17px] font-semibold underline"
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
