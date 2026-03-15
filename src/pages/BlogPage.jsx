import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import API_URL from "@/config/api";

export default function BlogPage() {
  const [categories, setCategories] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("all");

  React.useEffect(() => {
    const fetchBlogData = async () => {
      setLoading(true);
      setError("");

      try {
        const [categoryRes, postRes] = await Promise.all([
          fetch(`${API_URL}/api/blog-category`, {
            headers: { accept: "*/*" },
          }),
          fetch(`${API_URL}/api/post`, {
            headers: { accept: "*/*" },
          }),
        ]);

        if (!categoryRes.ok || !postRes.ok) {
          throw new Error("Không thể tải dữ liệu blog");
        }

        const categoryData = await categoryRes.json();
        const postData = await postRes.json();

        const categoryItems = categoryData?.items || [];
        const postItems = postData?.items || [];

        setCategories(categoryItems);
        setPosts(postItems);
      } catch (err) {
        console.error(err);
        setError("Không thể tải danh sách bài viết.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter(
          (post) => String(post.blogCategoryId) === String(activeCategory),
        );

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const latestPosts = filteredPosts.length > 0 ? filteredPosts.slice(1) : [];

  const getCategoryName = (blogCategoryId) => {
    const found = categories.find(
      (cat) => String(cat.blogCategoryId) === String(blogCategoryId),
    );
    return found?.name || "Chưa phân loại";
  };

  return (
    <div
      className="min-h-screen bg-[#FFFAF0] text-[#1f1f1f]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <NavBar />

      <main>
        {/* HERO */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-8 pb-12">
          <div className="rounded-[10px] bg-[#2E6418] px-6 py-12 md:px-10 md:py-14 text-center text-[#FFFAF0]">
            <h1 className="text-[30px] md:text-[44px] font-bold uppercase leading-[1.2] tracking-[-0.01em]">
              KHÁM PHÁ KINH NGHIỆM TỔ CHỨC TIỆC
              <br />
              TRONG MỖI BÀI VIẾT
            </h1>

            <p className="mt-7 max-w-[760px] mx-auto text-[15px] md:text-[16px] leading-7 text-white/90">
              Cập nhật kiến thức, mẹo thực tế và các gợi ý hữu ích để lên kế
              hoạch buffet hiệu quả hơn cho gia đình, doanh nghiệp và nhiều loại
              sự kiện khác nhau.
            </p>
          </div>
        </section>

        {/* BLOG CONTENT */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-20">
          <h2 className="text-[#2E6418] text-[32px] md:text-[42px] font-bold uppercase">
            BÀI VIẾT MỚI NHẤT
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeCategory === "all"
                  ? "bg-[#E85E1B] text-white"
                  : "border border-[#B8C7A8] text-[#2E6418] bg-transparent"
              }`}
            >
              Tất cả
            </button>

            {categories.map((category) => (
              <button
                key={category.blogCategoryId}
                type="button"
                onClick={() => setActiveCategory(category.blogCategoryId)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  String(activeCategory) === String(category.blogCategoryId)
                    ? "bg-[#E85E1B] text-white"
                    : "border border-[#B8C7A8] text-[#2E6418] bg-transparent"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="py-12 text-center text-lg text-black/60">
              Đang tải bài viết...
            </div>
          ) : error ? (
            <div className="py-12 text-center text-lg text-red-500">
              {error}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="py-12 text-center text-lg text-black/60">
              Không có bài viết nào.
            </div>
          ) : (
            <>
              {/* FEATURED */}
              {featuredPost && (
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start">
                  <div>
                    <div className="rounded-[12px] overflow-hidden">
                      <img
                        src={
                          featuredPost.thumbnailUrl ||
                          featuredPost.imageUrl ||
                          "https://via.placeholder.com/1200x700?text=No+Image"
                        }
                        alt={featuredPost.title}
                        className="w-full h-[280px] md:h-[360px] object-cover"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="inline-flex rounded-full bg-[#F4F0E7] px-4 py-2 text-sm text-[#2E6418] font-medium">
                      {getCategoryName(featuredPost.blogCategoryId)}
                    </p>

                    {featuredPost.createdAt && (
                      <p className="mt-5 text-[15px] text-black/50">
                        {new Date(featuredPost.createdAt).toLocaleDateString(
                          "vi-VN",
                        )}
                      </p>
                    )}

                    <h3 className="mt-3 text-[28px] md:text-[34px] font-bold leading-tight">
                      {featuredPost.title}
                    </h3>

                    {featuredPost.description && (
                      <p className="mt-5 text-[16px] md:text-[17px] leading-8 text-black/70">
                        {featuredPost.description}
                      </p>
                    )}

                    <a
                      href={`/blog/${featuredPost.slug || featuredPost.postId}`}
                      className="mt-8 inline-flex rounded-full bg-[#E85E1B] px-6 py-3 text-white font-semibold transition hover:opacity-90"
                    >
                      Đọc bài viết
                    </a>
                  </div>
                </div>
              )}

              {/* GRID POSTS */}
              <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {latestPosts.map((post) => (
                  <article key={post.postId}>
                    <div className="rounded-[10px] overflow-hidden">
                      <img
                        src={
                          post.thumbnailUrl ||
                          post.imageUrl ||
                          "https://via.placeholder.com/1200x700?text=No+Image"
                        }
                        alt={post.title}
                        className="w-full h-[220px] md:h-[240px] object-cover"
                      />
                    </div>

                    <div className="mt-4">
                      {post.createdAt && (
                        <p className="text-[14px] text-black/45">
                          {new Date(post.createdAt).toLocaleDateString("vi-VN")}
                        </p>
                      )}

                      <h3 className="mt-2 text-[22px] font-bold leading-8">
                        {post.title}
                      </h3>

                      <p className="mt-3 text-[16px] text-black/60">
                        {getCategoryName(post.blogCategoryId)}
                      </p>

                      <a
                        href={`/blog/${post.slug || post.postId}`}
                        className="mt-4 inline-block text-[#E85E1B] text-[18px] font-semibold underline"
                      >
                        Xem thêm
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
