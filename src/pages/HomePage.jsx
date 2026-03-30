import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  Smartphone,
  Clock3,
  Users,
  ShieldCheck,
  Briefcase,
  Star,
  ChevronDown,
} from "lucide-react";
import API_URL from "@/config/api";
import HeroIllustration from "@/components/HeroIllustration";
export default function HomePage() {
  const whyChoose = [
    {
      id: 1,
      title: "Đặt Tiệc Trực Tuyến Dễ Dàng",
      desc: "Chỉ với vài thao tác, bạn có thể chọn ngày tổ chức, địa điểm, số lượng khách và menu phù hợp mà không cần trao đổi thủ công.",
    },
    {
      id: 2,
      title: "Menu & Giá Cả Minh Bạch",
      desc: "Thông tin món ăn, giá gói và các chi phí hiển thị rõ ràng. Không phí ẩn, dễ so sánh và dễ quyết định.",
    },
    {
      id: 3,
      title: "Nhà Cung Cấp Chuyên Nghiệp",
      desc: "Kết nối với các đơn vị dịch vụ uy tín, có đánh giá thực tế từ khách hàng và quy trình phục vụ rõ ràng.",
    },
    {
      id: 4,
      title: "Quản Lý Nhân Sự Hiệu Quả",
      desc: "Hỗ trợ phân công đội ngũ, trưởng nhóm và theo dõi tiến độ để bữa tiệc được vận hành chỉn chu hơn.",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Tiệc Buffet Hải Sản",
      desc: "Các loại hải sản như tôm, cua, hàu... phù hợp tiệc sang trọng và tiếp khách.",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
      rating: "4.9/5",
      orders: "120+ lượt đặt",
    },
    {
      id: 2,
      title: "Tiệc Buffet Bò",
      desc: "Phù hợp tiệc tại nhà, sinh nhật và các dịp họp mặt thân mật với thực đơn đậm vị.",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
      rating: "4.9/5",
      orders: "120+ lượt đặt",
    },
    {
      id: 3,
      title: "Tiệc Buffet Chay",
      desc: "Thực đơn thanh đạm, đẹp mắt và phù hợp với nhiều đối tượng khách mời khác nhau.",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
      rating: "4.8/5",
      orders: "95+ lượt đặt",
    },
  ];

  const [packages, setPackages] = React.useState([]);
  const [packagesLoading, setPackagesLoading] = React.useState(true);
  const [packagesError, setPackagesError] = React.useState("");

  const [partyCategories, setPartyCategories] = React.useState([]);
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [currentPage, setCurrentPage] = React.useState(1);

  const pageSize = 4;

  const blogs = [
    {
      id: 1,
      title: "5 Bí Quyết Tổ Chức Tiệc Buffet Tại Nhà Hoàn Hảo",
      date: "Tháng 1, 2026",
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Cách Chọn Menu Phù Hợp Cho Tiệc Công Ty",
      date: "Tháng 1, 2026",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Xu Hướng Dịch Vụ Buffet Năm 2026",
      date: "Tháng 1, 2026",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    },
  ];
  const [openFaq, setOpenFaq] = React.useState("01");
  const faqs = [
    {
      id: "01",
      question: "Tôi có thể tùy chỉnh menu không?",
      answer:
        "Có. Bạn có thể điều chỉnh món ăn, số lượng phần, nhóm món chính và một số hạng mục phục vụ để phù hợp với nhu cầu thực tế của bữa tiệc.",
    },
    {
      id: "02",
      question: "Bao lâu trước sự kiện cần đặt tiệc?",
      answer:
        "Bạn nên đặt trước từ 3 đến 7 ngày để Bookfet có đủ thời gian xác nhận thực đơn, nhân sự và lịch phục vụ. Với các sự kiện lớn, nên đặt sớm hơn để được chuẩn bị tốt nhất.",
    },
    {
      id: "03",
      question: "Có cần đặt cọc không?",
      answer:
        "Có, hệ thống hỗ trợ thanh toán đặt cọc online để xác nhận đơn đặt tiệc và giữ lịch phục vụ cho sự kiện của bạn.",
    },
    {
      id: "04",
      question: "Tôi có thể theo dõi tiến độ tiệc không?",
      answer:
        "Có. Bạn có thể theo dõi trạng thái đơn hàng, các bước xác nhận dịch vụ và cập nhật liên quan trực tiếp trên hệ thống.",
    },
  ];
  React.useEffect(() => {
    const fetchPackages = async () => {
      setPackagesLoading(true);
      setPackagesError("");

      try {
        const [menuRes, menuDishRes] = await Promise.all([
          fetch("https://gsp26se10-be.fly.dev/api/menu", {
            headers: { accept: "*/*" },
          }),
          fetch("https://gsp26se10-be.fly.dev/api/menu-dish", {
            headers: { accept: "*/*" },
          }),
        ]);

        if (!menuRes.ok || !menuDishRes.ok) {
          throw new Error("Không thể tải dữ liệu gói buffet");
        }

        const menuData = await menuRes.json();
        const menuDishData = await menuDishRes.json();

        const menus = menuData?.items || [];
        const menuDishes = menuDishData?.items || [];

        const formattedPackages = menus
          .filter((menu) => menu.status === 1)
          .map((menu, index) => {
            const dishesOfMenu = menuDishes
              .filter((md) => md.menuId === menu.menuId)
              .map((md) => md.dishName);

            return {
              id: menu.menuId,
              title: menu.menuName,
              people: menu.partyCategoryName
                ? `/ ${menu.partyCategoryName}`
                : "",
              price: menu.basePrice
                ? `${Number(menu.basePrice).toLocaleString("vi-VN")} VNĐ`
                : "Liên hệ báo giá",
              menu: dishesOfMenu,
              image:
                Array.isArray(menu.imgUrl) && menu.imgUrl.length > 0
                  ? menu.imgUrl[0]
                  : "https://via.placeholder.com/600x400?text=No+Image",
              featured: index === 2,
              menuCategoryName: menu.menuCategoryName,
              partyCategoryName: menu.partyCategoryName,
            };
          });

        setPackages(formattedPackages);
      } catch (error) {
        console.error(error);
        setPackagesError("Không thể tải danh sách gói buffet.");
      } finally {
        setPackagesLoading(false);
      }
    };

    fetchPackages();
  }, []);
  React.useEffect(() => {
    const fetchPackages = async () => {
      setPackagesLoading(true);
      setPackagesError("");

      try {
        const [menuRes, menuDishRes, partyCategoryRes] = await Promise.all([
          fetch("https://gsp26se10-be.fly.dev/api/menu", {
            headers: { accept: "*/*" },
          }),
          fetch("https://gsp26se10-be.fly.dev/api/menu-dish", {
            headers: { accept: "*/*" },
          }),
          fetch("https://gsp26se10-be.fly.dev/api/party-category", {
            headers: { accept: "*/*" },
          }),
        ]);

        if (!menuRes.ok || !menuDishRes.ok || !partyCategoryRes.ok) {
          throw new Error("Không thể tải dữ liệu gói buffet");
        }

        const menuData = await menuRes.json();
        const menuDishData = await menuDishRes.json();
        const partyCategoryData = await partyCategoryRes.json();

        const menus = menuData?.items || [];
        const menuDishes = menuDishData?.items || [];
        const categories = (partyCategoryData?.items || []).filter(
          (item) => item.status === 1,
        );

        setPartyCategories(categories);

        const formattedPackages = menus
          .filter((menu) => menu.status === 1)
          .map((menu) => {
            const dishesOfMenu = menuDishes
              .filter((md) => md.menuId === menu.menuId)
              .map((md) => md.dishName);

            return {
              id: menu.menuId,
              title: menu.menuName,
              price: menu.basePrice
                ? `${Number(menu.basePrice).toLocaleString("vi-VN")} VNĐ`
                : "Liên hệ báo giá",
              image:
                Array.isArray(menu.imgUrl) && menu.imgUrl.length > 0
                  ? menu.imgUrl[0]
                  : "https://via.placeholder.com/600x400?text=No+Image",
              menu: dishesOfMenu,
              featured: false,
              partyCategoryName: menu.partyCategoryName || "",
              menuCategoryName: menu.menuCategoryName || "",
            };
          });

        setPackages(formattedPackages);
      } catch (error) {
        console.error(error);
        setPackagesError("Không thể tải danh sách gói buffet.");
      } finally {
        setPackagesLoading(false);
      }
    };

    fetchPackages();
  }, []);
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);
  const filteredPackages =
    activeCategory === "all"
      ? packages
      : packages.filter((item) => item.partyCategoryName === activeCategory);

  const totalPages = Math.max(1, Math.ceil(filteredPackages.length / pageSize));

  const paginatedPackages = filteredPackages.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  return (
    <div
      className="min-h-screen bg-[#FFFAF0] text-[#1f1f1f]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <NavBar />

      <main>
        {/* HERO */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-6 md:pt-10 pb-12 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-6 lg:gap-2">
            {/* LEFT */}
            <div className="order-2 lg:order-1">
              <HeroIllustration />
            </div>

            {/* RIGHT */}
            <div className="order-1 lg:order-2 max-w-[620px] lg:pl-4">
              <h1 className="text-black font-bold leading-[1.15] text-[42px] md:text-[56px] lg:text-[64px]">
                Đặt Tiệc Buffet
              </h1>

              <h2 className="mt-3 text-[#E8712E] font-bold leading-[1.18] text-[42px] md:text-[56px] lg:text-[62px]">
                Đơn Giản, Nhanh Chóng, Chuyên Nghiệp
              </h2>

              <p className="mt-7 max-w-[560px] text-[18px] leading-9 text-black/90">
                <span className="font-bold text-black">Bookfet</span> là nền
                tảng số giúp khách hàng dễ dàng đặt dịch vụ buffet cho tiệc tại
                nhà và sự kiện công ty, đồng thời hỗ trợ nhà cung cấp quản lý
                đơn hàng, nhân sự và vận hành hiệu quả – tất cả trong một hệ
                thống duy nhất.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="https://github.com/GSP26SE10/GSP26SE10-Mobile/releases/download/v1.0/bookfet.apk"
                  className="inline-flex items-center gap-3 rounded-[10px] bg-[#E8712E] px-8 py-4 text-[18px] font-medium text-[#262626] transition hover:opacity-90"
                >
                  Tải xuống cho Android
                  <Smartphone size={18} />
                </a>

                <a
                  href="/about"
                  className="inline-flex items-center rounded-[10px] border border-[#E8712E] px-8 py-4 text-[18px] font-medium text-black transition hover:bg-[#E8712E] hover:text-white"
                >
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-16">
          <br />
          <br />
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10">
            <div>
              <h2 className="text-[#45B733] text-4xl md:text-5xl font-bold leading-tight">
                VÌ SAO CHỌN
                <br />
                BOOKFET?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              {whyChoose.map((item) => (
                <div key={item.id} className="pb-2">
                  <h3 className="text-[18px] font-bold text-[#45B733]">
                    {item.title}
                  </h3>

                  <div className="mt-4 border-b border-black/20" />

                  <p className="mt-4 text-[16px] leading-7 text-black/75">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROMO */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-16">
          <br />
          <br />
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 items-stretch rounded-[24px] bg-[#DCE8CC] p-5 md:p-6">
            <div>
              <img
                src="https://lahata.vn/files/admin/2022/05/26/goi-y-thuc-don-mon-ngon-tiec-cuoi-tuan-02-1820.jpg"
                alt="Ưu đãi Bookfet"
                className="w-full h-[250px] md:h-[270px] lg:h-full min-h-[250px] object-cover rounded-[14px]"
              />
            </div>

            <div className="flex flex-col justify-between py-2 lg:py-3">
              <h2 className="text-[#2E6418] text-[36px] md:text-[52px] lg:text-[54px] font-bold leading-[1.12] uppercase max-w-[560px]">
                GIẢM 10%
                <br />
                CHO ĐƠN ĐẶT TIỆC
                <br />
                ĐẦU TIÊN!
              </h2>

              <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
                <div className="max-w-[520px]">
                  <p className="text-[18px] md:text-[20px] font-semibold text-black">
                    Lần đầu tổ chức sự kiện cùng Bookfet?
                  </p>

                  <p className="mt-2 text-[16px] md:text-[18px] leading-7 text-black/70">
                    Nhập mã{" "}
                    <span className="font-bold text-black">WELCOMEBOOKFET</span>{" "}
                    để nhận ưu đãi đặc biệt cho đơn đặt tiệc đầu tiên của bạn.
                  </p>
                </div>

                <a
                  href="/booking"
                  className="inline-flex h-[52px] shrink-0 items-center justify-center rounded-full bg-[#E8712E] px-8 text-[16px] font-medium text-[#262626] transition hover:opacity-90"
                >
                  Đặt ngay
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* FAVORITE SERVICES */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-16">
          <br />
          <br />
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="text-[#DE5000] text-4xl md:text-5xl font-bold">
              DỊCH VỤ ĐƯỢC KHÁCH HÀNG YÊU THÍCH
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((item) => (
              <div key={item.id} className="rounded-[12px] bg-[#E8712E]/50 p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[260px] object-cover rounded-[8px]"
                />
                <div className="bg-white mt-4 rounded-[8px] p-4">
                  <h3 className="text-[18px] font-bold text-[#DE5000]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-6 text-black/60">
                    {item.desc}
                  </p>
                  <p className="mt-4 text-[15px] text-black/60">
                    {item.orders}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-[15px] text-black/60">
                    <Star size={16} fill="#FFC00B" color="#FFC00B" />
                    {item.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ESTIMATE TOOL */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-16">
          <br />
          <br />
          <div className="rounded-[24px] bg-[#2E6418] p-6 md:p-10">
            <h2 className="text-center text-white text-3xl md:text-5xl font-bold">
              HIỂU RÕ NHU CẦU BỮA TIỆC CỦA BẠN
            </h2>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-[20px] p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-black">
                  Công Cụ Ước Tính Đặt Tiệc
                </h3>
                <p className="mt-3 text-black/60 leading-7">
                  Sử dụng công cụ đặt tiệc thông minh để xác định số lượng
                  khách, loại tiệc và gợi ý menu phù hợp cho sự kiện của bạn.
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm mb-2">Số lượng khách</label>
                    <input
                      defaultValue="10"
                      className="w-full rounded-md border border-black/25 px-4 py-3 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Loại sự kiện</label>
                    <input
                      defaultValue="Sinh nhật"
                      className="w-full rounded-md border border-black/25 px-4 py-3 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">
                      Ngân sách dự kiến (VNĐ)
                    </label>
                    <input
                      defaultValue="2.500.000"
                      className="w-full rounded-md border border-black/25 px-4 py-3 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">
                      Thời gian tổ chức
                    </label>
                    <input
                      defaultValue="01/01/2026"
                      className="w-full rounded-md border border-black/25 px-4 py-3 outline-none"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-black/50">Menu đề xuất</p>
                  <p className="mt-1 font-medium text-[#45B733]">
                    Gói Buffet Gia đình tiêu chuẩn
                  </p>
                  <ul className="mt-4 space-y-2 text-[#DE5000] font-medium">
                    <li>Món ăn khai vị</li>
                    <li>Món ăn 1</li>
                    <li>Món ăn 2</li>
                    <li>Món ăn 3</li>
                    <li>Tráng miệng</li>
                  </ul>

                  <p className="mt-8 text-black/50">Giá ước tính</p>
                  <p className="mt-1 font-medium text-[#45B733]">
                    2.500.000 VNĐ
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4">
                    <button className="rounded-full bg-[#E8712E] px-6 py-3 text-white font-medium">
                      Gợi ý Menu
                    </button>
                    <button className="rounded-full bg-[#2E6418] px-6 py-3 text-white font-medium">
                      Đặt ngay
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Bảng Gợi Ý Quy Mô Tiệc
                </h3>

                <div className="mt-6 overflow-hidden rounded-[16px] border border-white/30">
                  <div className="grid grid-cols-2 bg-white/10 font-medium">
                    <div className="px-5 py-4 border-r border-white/30">
                      Số lượng khách
                    </div>
                    <div className="px-5 py-4">Gợi ý</div>
                  </div>

                  {[
                    ["Dưới 20", "Tiệc gia đình"],
                    ["20 - 50", "Tiệc công ty nhỏ"],
                    ["50 - 100", "Tiệc quy mô vừa"],
                    ["Trên 100", "Tiệc quy mô lớn"],
                  ].map((row, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-2 border-t border-white/30"
                    >
                      <div className="px-5 py-5 border-r border-white/30">
                        {row[0]}
                      </div>
                      <div className="px-5 py-5">{row[1]}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-end">
                  <ShieldCheck size={100} className="text-[#96C782]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-16">
          <br />
          <br />
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h2 className="text-[#2E6418] text-4xl md:text-5xl font-bold">
              CÁC GÓI BUFFET NỔI BẬT
            </h2>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="w-11 h-11 rounded-full border border-[#E8712E] text-[#E8712E] flex items-center justify-center disabled:opacity-40"
              >
                ←
              </button>

              <div className="text-xl font-bold text-black">
                {String(currentPage).padStart(2, "0")}
                <span className="text-base font-light">
                  /{String(totalPages).padStart(2, "0")}
                </span>
              </div>

              <button
                type="button"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
                className="w-11 h-11 rounded-full bg-[#E8712E] text-white flex items-center justify-center disabled:opacity-40"
              >
                →
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-5 py-2.5 transition ${
                activeCategory === "all"
                  ? "bg-[#E8712E] text-white"
                  : "border border-[#7AA25B] text-[#2E6418]"
              }`}
            >
              Tất cả
            </button>

            {partyCategories.map((category) => (
              <button
                key={category.partyCategoryId}
                type="button"
                onClick={() => setActiveCategory(category.partyCategoryName)}
                className={`rounded-full px-5 py-2.5 transition ${
                  activeCategory === category.partyCategoryName
                    ? "bg-[#E8712E] text-white"
                    : "border border-[#7AA25B] text-[#2E6418]"
                }`}
              >
                {category.partyCategoryName === "Birthday Party"
                  ? "Gia đình"
                  : category.partyCategoryName === "Company Party"
                    ? "Công ty"
                    : category.partyCategoryName}
              </button>
            ))}
          </div>

          {packagesLoading ? (
            <div className="py-10 text-center text-lg text-black/60">
              Đang tải gói buffet...
            </div>
          ) : packagesError ? (
            <div className="py-10 text-center text-lg text-red-500">
              {packagesError}
            </div>
          ) : paginatedPackages.length === 0 ? (
            <div className="py-10 text-center text-lg text-black/60">
              Không có gói buffet phù hợp.
            </div>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {paginatedPackages.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-[12px] bg-[#DCE8CC] p-5 text-black transition duration-200 hover:bg-[#2E6418] hover:text-[#FFFAF0]"
                >
                  <div className="grid grid-cols-1 md:grid-cols-[290px_1fr] gap-6 items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[190px] object-cover rounded-[8px]"
                    />

                    <div>
                      <h3 className="text-[22px] font-semibold leading-tight">
                        {item.title}
                      </h3>

                      <ul className="mt-4 space-y-1 text-[16px] leading-7">
                        {item.menu.length > 0 ? (
                          item.menu
                            .slice(0, 5)
                            .map((m, i) => <li key={i}>{m}</li>)
                        ) : (
                          <li>Chưa có thông tin món ăn</li>
                        )}
                      </ul>

                      <p className="mt-5 text-[20px] font-semibold">
                        <span className="text-[#E85E1B] group-hover:text-[#FF7A3D]">
                          {item.price}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* BIG CTA */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-16">
          <br />
          <br />
          <div className="relative overflow-hidden rounded-[20px]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"
              alt="Bắt đầu bữa tiệc hoàn hảo"
              className="w-full h-[380px] md:h-[560px] object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
              <div className="max-w-4xl text-[#FFFAF0]">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  BẮT ĐẦU BỮA TIỆC HOÀN HẢO
                  <br />
                  NGAY HÔM NAY
                </h2>
                <p className="mt-6 text-lg md:text-xl leading-8">
                  Lựa chọn dịch vụ buffet phù hợp, cá nhân hóa menu và để
                  Bookfet lo trọn gói
                  <br />
                  từ chuẩn bị đến phục vụ.
                </p>
                <a
                  href="/booking"
                  className="mt-8 inline-flex rounded-full bg-[#E8712E] px-8 py-4 text-[20px] font-bold text-[#FFFAF0]"
                >
                  ĐẶT NGAY
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-16">
          <br />
          <br />
          <h2 className="text-center text-[#DE5000] text-4xl md:text-5xl font-bold">
            KHÁCH HÀNG NÓI GÌ VỀ BOOKFET
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-[20px] leading-8 text-black">
                “Dịch vụ rất chuyên nghiệp, nhân viên phục vụ đúng giờ và menu
                đúng như mô tả.”
              </p>
              <p className="mt-6 font-bold text-[20px]">Anh Minh, Quận 7</p>
            </div>

            <div>
              <p className="text-[20px] leading-8 text-black">
                “Tiệc công ty tổ chức nhanh gọn, dễ quản lý và theo dõi tiến
                độ.”
              </p>
              <p className="mt-6 font-bold text-[20px]">Chị Lan, HR Manager</p>
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-16">
          <br />
          <br />
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="text-[#2E6418] text-4xl md:text-5xl font-bold">
              BLOG – KINH NGHIỆM TỔ CHỨC TIỆC
            </h2>
            <a
              href="/blog"
              className="rounded-full bg-[#E8712E] px-6 py-3 text-white font-bold"
            >
              XEM TẤT CẢ
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((item) => (
              <div key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[260px] object-cover rounded-[10px]"
                />
                <p className="mt-6 text-[20px] text-black/50">{item.date}</p>
                <h3 className="mt-3 text-[20px] font-bold leading-8">
                  {item.title}
                </h3>
                <a
                  href="/blog"
                  className="mt-4 inline-block text-[20px] font-medium text-[#DE5000] underline"
                >
                  Xem thêm
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-20">
          <br />
          <br />
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10">
            <div>
              <h2 className="text-[#DE5000] text-4xl md:text-5xl font-bold leading-tight">
                CÂU HỎI
                <br />
                THƯỜNG GẶP
              </h2>
            </div>

            <div>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === faq.id;

                return (
                  <div
                    key={faq.id}
                    className="border-t border-black/20 px-2 py-6"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                      className="w-full text-left"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-6">
                          <span
                            className={`text-[20px] font-bold ${
                              isOpen ? "text-[#2E6418]" : "text-black"
                            }`}
                          >
                            {faq.id}
                          </span>

                          <div>
                            <p
                              className={`text-[20px] font-bold leading-8 ${
                                isOpen ? "text-[#2E6418]" : "text-black"
                              }`}
                            >
                              {faq.question}
                            </p>

                            {isOpen && (
                              <p className="mt-3 text-[18px] leading-8 text-black/80">
                                {faq.answer}
                              </p>
                            )}
                          </div>
                        </div>

                        <ChevronDown
                          size={20}
                          className={`mt-1 shrink-0 transition-transform duration-200 ${
                            isOpen
                              ? "rotate-180 text-[#2E6418]"
                              : "text-black/50"
                          }`}
                        />
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
