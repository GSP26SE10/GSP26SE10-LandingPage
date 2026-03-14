import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Check,
  Clock3,
  Users,
  UtensilsCrossed,
  Star,
  ChevronDown,
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      id: 1,
      title: "Tiệc Gia Đình",
      desc: "Phù hợp sinh nhật, thôi nôi, họp mặt ấm cúng với thực đơn linh hoạt.",
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Tiệc Công Ty",
      desc: "Tổ chức chuyên nghiệp cho liên hoan, hội nghị, khai trương, sự kiện nội bộ.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Tiệc Buffet Cao Cấp",
      desc: "Không gian và món ăn chỉn chu, phù hợp tiếp khách và dịp quan trọng.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const packages = [
    {
      id: 1,
      title: "Gói Tiệc Cơ Bản",
      people: "10 - 30 khách",
      price: "2.500.000 VNĐ",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Gói Buffet Gia Đình",
      people: "20 - 50 khách",
      price: "4.000.000 VNĐ",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Gói Buffet Công Ty",
      people: "50 - 100 khách",
      price: "8.500.000 VNĐ",
      image:
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Gói Premium",
      people: "100+ khách",
      price: "Liên hệ báo giá",
      image:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const blogs = [
    {
      id: 1,
      title: "5 Bước chuẩn bị tiệc Buffet cho người bận rộn",
      date: "Tháng 3, 2026",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Kinh nghiệm lựa chọn món ăn cho tiệc công ty",
      date: "Tháng 3, 2026",
      image:
        "https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Checklist tổ chức tiệc tại nhà tiết kiệm thời gian",
      date: "Tháng 3, 2026",
      image:
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const faqs = [
    "Tôi có thể tuỳ chỉnh món ăn không?",
    "Bookfet hỗ trợ sự kiện gấp trong bao lâu?",
    "Chi phí đã bao gồm setup và dọn dẹp chưa?",
    "Tôi cần đặt cọc trước bao nhiêu?",
  ];

  return (
    <div className="min-h-screen bg-[#f5f0e6] text-[#2b2b2b]">
      <NavBar />

      <main>
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 pt-8 pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#2f7d32] font-semibold tracking-wide uppercase text-sm">
                Đặt tiệc buffet đơn giản hơn
              </p>

              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
                Đặt Tiệc Buffet
                <br />
                <span className="text-[#f26a21]">Đơn Giản, Nhanh Chóng,</span>
                <br />
                Chuyên Nghiệp
              </h1>

              <p className="mt-5 text-[#5b5b5b] text-base leading-7 max-w-xl">
                Bookfet giúp bạn lên thực đơn, chuẩn bị món ăn và tổ chức tiệc
                trọn gói cho gia đình, công ty và mọi sự kiện với quy trình rõ
                ràng, nhanh chóng và tiết kiệm thời gian.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f26a21] px-6 py-3 text-sm font-bold text-white hover:opacity-90 transition"
                >
                  Khám phá dịch vụ
                  <ArrowRight size={16} />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-[#2f7d32] px-6 py-3 text-sm font-bold text-[#2f7d32] hover:bg-[#2f7d32] hover:text-white transition"
                >
                  Tư vấn ngay
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#2f7d32]">5+</h3>
                  <p className="text-sm text-[#666]">Năm kinh nghiệm</p>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-[#2f7d32]">
                    30+
                  </h3>
                  <p className="text-sm text-[#666]">Menu linh hoạt</p>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-[#2f7d32]">
                    99%
                  </h3>
                  <p className="text-sm text-[#666]">Khách hài lòng</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-[#f7c88b] opacity-60 blur-2xl" />
              <div className="absolute -bottom-6 right-4 w-24 h-24 rounded-full bg-[#b8d8b9] opacity-70 blur-2xl" />

              <div className="relative bg-white rounded-[28px] p-4 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1400&auto=format&fit=crop"
                  alt="Buffet"
                  className="w-full h-[460px] object-cover rounded-[24px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-[#eef6ea] rounded-3xl p-6">
              <h2 className="text-3xl font-extrabold text-[#2f7d32]">
                Vì sao chọn Bookfet?
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <Clock3 className="text-[#f26a21]" size={28} />
              <h3 className="mt-4 text-lg font-bold">Nhanh chóng</h3>
              <p className="mt-2 text-sm text-[#666] leading-6">
                Tối ưu từ khâu tư vấn, lên món đến triển khai giúp bạn tiết kiệm
                thời gian chuẩn bị.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <Users className="text-[#f26a21]" size={28} />
              <h3 className="mt-4 text-lg font-bold">Chuyên nghiệp</h3>
              <p className="mt-2 text-sm text-[#666] leading-6">
                Đội ngũ phục vụ chỉn chu, quy trình rõ ràng, phù hợp nhiều loại
                hình sự kiện khác nhau.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-14">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-[#f26a21] font-semibold uppercase text-sm">
                Dịch vụ được khách hàng yêu thích
              </p>
              <h2 className="mt-2 text-3xl font-extrabold">Dịch vụ nổi bật</h2>
            </div>

            <a
              href="/services"
              className="text-sm font-semibold text-[#2f7d32] hover:underline"
            >
              Xem tất cả
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:-translate-y-1 transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#666] leading-6">
                    {item.desc}
                  </p>
                  <a
                    href="/services"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#f26a21]"
                  >
                    Xem chi tiết <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TABLE COMPARISON */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-14">
          <div className="bg-[#eef6ea] rounded-[30px] p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">
              <div>
                <p className="text-[#f26a21] font-semibold uppercase text-sm">
                  Hiểu rõ nhu cầu bữa tiệc của bạn
                </p>
                <h2 className="mt-2 text-3xl font-extrabold">
                  So sánh nhanh các gói phổ biến
                </h2>
              </div>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl">
              <table className="w-full min-w-[760px] text-sm">
                <thead className="bg-[#f8f5ef]">
                  <tr className="text-left">
                    <th className="px-5 py-4 font-bold">Tiêu chí</th>
                    <th className="px-5 py-4 font-bold">Gói Cơ Bản</th>
                    <th className="px-5 py-4 font-bold">Gói Gia Đình</th>
                    <th className="px-5 py-4 font-bold">Gói Công Ty</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Số lượng khách", "10 - 30", "20 - 50", "50 - 100"],
                    ["Thời gian setup", "2 giờ", "3 giờ", "4 giờ"],
                    ["Nhân sự phục vụ", "1 - 2", "2 - 4", "4 - 8"],
                    ["Menu tùy chỉnh", "Cơ bản", "Có", "Linh hoạt"],
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className="border-t border-[#eee7da] text-[#4d4d4d]"
                    >
                      <td className="px-5 py-4 font-semibold text-[#2b2b2b]">
                        {row[0]}
                      </td>
                      <td className="px-5 py-4">{row[1]}</td>
                      <td className="px-5 py-4">{row[2]}</td>
                      <td className="px-5 py-4">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FEATURED PACKAGES */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-14">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-[#f26a21] font-semibold uppercase text-sm">
                Các gói buffet nổi bật
              </p>
              <h2 className="mt-2 text-3xl font-extrabold">
                Chọn gói phù hợp cho sự kiện
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#666]">{item.people}</p>
                  <p className="mt-4 text-[#f26a21] font-extrabold text-lg">
                    {item.price}
                  </p>
                  <a
                    href="/contact"
                    className="mt-4 inline-flex items-center rounded-full bg-[#2f7d32] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
                  >
                    Đặt tư vấn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BIG CTA IMAGE */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-14">
          <div className="relative overflow-hidden rounded-[32px]">
            <img
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1600&auto=format&fit=crop"
              alt="CTA buffet"
              className="w-full h-[340px] object-cover"
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 lg:px-14 max-w-2xl text-white">
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Bắt đầu bữa tiệc hoàn hảo ngay hôm nay
                </h2>
                <p className="mt-4 text-white/90 leading-7">
                  Chỉ cần để lại nhu cầu, Bookfet sẽ hỗ trợ bạn từ tư vấn thực
                  đơn đến triển khai nhanh chóng.
                </p>
                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center rounded-full bg-[#f26a21] px-6 py-3 text-sm font-bold text-white"
                >
                  Liên hệ ngay
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-14">
          <div className="bg-white rounded-[30px] p-6 lg:p-8 shadow-sm">
            <p className="text-[#f26a21] font-semibold uppercase text-sm">
              Khách hàng nói gì về Bookfet
            </p>

            <div className="mt-4 flex gap-1 text-[#f6a623]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>

            <p className="mt-4 text-lg leading-8 text-[#444] max-w-4xl">
              “Tiệc được chuẩn bị rất chỉn chu, món ăn ngon và đội ngũ hỗ trợ
              nhiệt tình. Nhờ Bookfet mà công ty mình tổ chức sự kiện nhẹ nhàng
              hơn rất nhiều.”
            </p>

            <div className="mt-5 text-sm text-[#666]">
              Anh Minh Quân, TP.HCM
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-14">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-[#f26a21] font-semibold uppercase text-sm">
                Blog - Kinh nghiệm tổ chức tiệc
              </p>
              <h2 className="mt-2 text-3xl font-extrabold">
                Bài viết mới nhất
              </h2>
            </div>
            <a
              href="/blog"
              className="text-sm font-semibold text-[#2f7d32] hover:underline"
            >
              Xem tất cả
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <p className="text-sm text-[#888]">{item.date}</p>
                  <h3 className="mt-2 text-lg font-bold leading-7">
                    {item.title}
                  </h3>
                  <a
                    href="/blog"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#f26a21]"
                  >
                    Đọc thêm <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div>
              <p className="text-[#f26a21] font-semibold uppercase text-sm">
                Câu hỏi thường gặp
              </p>
              <h2 className="mt-2 text-3xl font-extrabold">
                Bạn còn thắc mắc?
              </h2>
            </div>

            <div className="lg:col-span-2 bg-white rounded-[28px] p-4 shadow-sm">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between px-4 py-5 ${
                    index !== faqs.length - 1 ? "border-b border-[#eee7da]" : ""
                  }`}
                >
                  <span className="font-medium">{faq}</span>
                  <ChevronDown size={18} className="text-[#666]" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
