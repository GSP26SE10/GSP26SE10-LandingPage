import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { value: "5+", label: "Năm kinh nghiệm" },
    { value: "30+", label: "Menu linh hoạt" },
    { value: "99%", label: "Khách hàng hài lòng" },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Nguyễn Minh",
      role: "Founder",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Hoàng An",
      role: "Operation Lead",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Lan Chi",
      role: "Customer Success",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Thảo My",
      role: "Event Planner",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Quốc Bảo",
      role: "Service Coordinator",
      image:
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const serviceGroups = [
    {
      title: "Gói gia đình",
      price: "Từ 2.500.000 VNĐ",
      items: [
        "Thực đơn linh hoạt theo số lượng khách",
        "Phù hợp sinh nhật, họp mặt, kỷ niệm",
        "Setup nhanh gọn tại nhà",
      ],
      button: "Liên hệ ngay",
      featured: false,
    },
    {
      title: "Gói tiệc công ty",
      price: "Từ 4.000.000 VNĐ",
      items: [
        "Phục vụ sự kiện nội bộ, khai trương, hội họp",
        "Có nhân sự hỗ trợ và điều phối",
        "Phù hợp quy mô vừa và lớn",
      ],
      button: "Đặt lịch",
      featured: false,
    },
    {
      title: "Gói tùy chỉnh",
      price: "Theo yêu cầu / theo món",
      items: [
        "Điều chỉnh thực đơn theo ngân sách",
        "Cá nhân hóa món ăn và phong cách phục vụ",
        "Tư vấn theo từng loại sự kiện",
      ],
      button: "Chọn gói",
      featured: true,
    },
  ];

  const milestones = [
    {
      year: "2022",
      title: "Khởi đầu ý tưởng",
      desc: "Bookfet được hình thành với mục tiêu giúp việc đặt tiệc trở nên đơn giản, nhanh chóng và minh bạch hơn.",
    },
    {
      year: "2023",
      title: "Mở rộng dịch vụ",
      desc: "Bổ sung thêm nhiều gói buffet gia đình, công ty và nâng cao trải nghiệm đặt tiệc trực tuyến.",
    },
    {
      year: "2024",
      title: "Chuẩn hóa vận hành",
      desc: "Tối ưu quy trình xác nhận đơn hàng, điều phối nhân sự và theo dõi tiến độ thực hiện dịch vụ.",
    },
    {
      year: "2025",
      title: "Tăng trưởng bền vững",
      desc: "Phát triển hệ sinh thái dịch vụ tiệc toàn diện với trải nghiệm khách hàng được đặt làm trọng tâm.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#FFFAF0] text-[#1f1f1f]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <NavBar />

      <main>
        {/* HERO */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-6 pb-10">
          <div className="rounded-[10px] bg-[#2E6418] px-6 py-12 md:px-10 md:py-14 text-center text-[#FFFAF0]">
            <h1 className="text-[30px] md:text-[44px] font-bold uppercase leading-[1.2] tracking-[-0.01em]">
              HÀNH TRÌNH XÂY DỰNG DỊCH VỤ
              <br />
              ĐẶT TIỆC CHUYÊN NGHIỆP
            </h1>

            <p className="mt-7 max-w-[770px] mx-auto text-[15px] md:text-[16px] leading-7 text-white/90">
              BOOKFET ra đời với mong muốn đơn giản hóa việc đặt tiệc buffet tại
              nhà và công ty, giúp khách hàng dễ dàng tổ chức sự kiện chỉ với
              vài thao tác trực tuyến, nhanh chóng và minh bạch.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-14">
          <br />
          <br />
          <h2 className="text-[#2E6418] text-[34px] md:text-[50px] font-bold uppercase leading-none">
            BOOKFET BẮT ĐẦU TỪ ĐÂU
          </h2>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-x-10 gap-y-6">
            <p className="max-w-[560px] text-[16px] md:text-[17px] leading-7 text-black/80">
              <span className="font-bold text-black">BOOKFET</span> được hình
              thành từ{" "}
              <span className="font-bold text-black">
                nhu cầu thực tế của khách hàng và doanh nghiệp
              </span>{" "}
              khi việc đặt tiệc buffet còn phụ thuộc nhiều vào liên hệ thủ công,
              thiếu minh bạch và khó quản lý.
            </p>

            <p className="max-w-[560px] text-[16px] md:text-[17px] leading-7 text-black/80">
              Từ những đơn đặt tiệc nhỏ tại nhà, BOOKFET đã phát triển thành{" "}
              <span className="font-bold text-black">
                một nền tảng hỗ trợ đặt tiệc buffet chuyên nghiệp
              </span>
              , giúp kết nối khách hàng với các nhà cung cấp dịch vụ uy tín và
              đội ngũ phục vụ chất lượng.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.45fr_0.55fr] gap-8 items-start">
            <div>
              <img
                src="https://enrestaurant.vn/wp-content/uploads/2025/04/482025908_960788582913072_5367280846789434243_n-1-1024x683.jpg"
                alt="Bookfet origin"
                className="w-full h-[260px] md:h-[360px] lg:h-[420px] object-cover rounded-[10px]"
              />
            </div>

            <div className="lg:pl-2">
              {stats.map((item, index) => (
                <div
                  key={item.label}
                  className={`${index !== stats.length - 1 ? "border-b border-black/20 pb-8 mb-8" : ""}`}
                >
                  <p className="text-[#2E6418] text-[38px] md:text-[52px] font-bold leading-none">
                    {item.value}
                  </p>
                  <p className="mt-3 text-[18px] leading-7 text-black/75">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="w-full pb-14">
          <div
            className="min-h-[230px] md:min-h-[260px] flex items-center justify-center text-center px-6"
            style={{
              backgroundImage:
                'url("https://st.depositphotos.com/1006269/57018/i/450/depositphotos_570183092-stock-photo-old-crumpled-paper-texture-background.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="max-w-[1200px]">
              <h2 className="text-[#2E6418] text-[34px] md:text-[52px] font-bold uppercase leading-none">
                QUOTES
              </h2>

              <p className="mt-6 text-[#E85E1B] text-[16px] md:text-[24px] font-semibold leading-8 md:leading-10">
                “Chúng tôi tin rằng việc tổ chức tiệc buffet nên đơn giản, minh
                bạch và đáng tin cậy – từ đặt tiệc, chuẩn bị đến phục vụ.”
              </p>
            </div>
          </div>
        </section>

        {/* FLEXIBLE SERVICE */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-14">
          <br />
          <br />
          <h2 className="text-[#E85E1B] text-[34px] md:text-[48px] font-bold uppercase leading-none">
            GÓI DỊCH VỤ LINH HOẠT – PHÙ HỢP MỌI SỰ KIỆN
          </h2>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
            {/* LEFT CARD */}
            <div className="group rounded-[10px] border border-[#7EA26E] bg-[#FFFAF0] p-8 text-black transition hover:bg-[#2E6418] hover:text-[#FFFAF0]">
              <h3 className="text-[22px] md:text-[24px] font-bold uppercase">
                GÓI GIA ĐÌNH
              </h3>

              <p className="mt-4 max-w-[300px] text-[16px] leading-7 text-black/55 transition group-hover:text-white/80">
                Phù hợp cho tiệc tại nhà, họp mặt nhỏ, không cần cam kết dài hạn
              </p>

              <div className="mt-8">
                <p className="text-[16px] font-semibold">Giá tham khảo</p>
                <p className="mt-2 text-[24px] md:text-[26px] font-bold">
                  Từ 2.500.000 VNĐ
                  <span className="text-[16px] font-normal text-black/70 transition group-hover:text-white/80">
                    {" "}
                    / buổi tiệc
                  </span>
                </p>
              </div>

              <div className="mt-6 space-y-4 border-t border-black/15 pt-6 transition group-hover:border-white/20">
                {[
                  "Phục vụ 10-20 khách",
                  "Khai vị, món chính, tráng miệng",
                  "Setup bàn tiệc cơ bản",
                  "Nhân sự phục vụ tiêu chuẩn",
                  "Có thể điều chỉnh menu theo nhu cầu",
                  "Dụng cụ ăn uống thân thiện môi trường",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2E6418] text-white transition group-hover:bg-[#FFFAF0] group-hover:text-[#2E6418]">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <p className="text-[16px] leading-7 text-black/60 transition group-hover:text-white/85">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <button className="mt-8 rounded-full border border-[#7EA26E] bg-[#FFFAF0] px-12 py-3 text-[18px] font-semibold text-[#2E6418] transition group-hover:border-[#E85E1B] group-hover:bg-[#E85E1B] group-hover:text-white">
                CHỌN GÓI
              </button>
            </div>

            {/* RIGHT COLUMN */}
            <div className="grid grid-cols-1 gap-6">
              {/* TOP RIGHT */}
              <div className="group rounded-[10px] border border-[#7EA26E] bg-[#FFFAF0] p-8 text-black transition hover:bg-[#2E6418] hover:text-[#FFFAF0]">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1fr]">
                  <div>
                    <h3 className="text-[22px] md:text-[24px] font-bold uppercase">
                      GÓI TIỆC CÔNG TY
                    </h3>
                  </div>

                  <p className="text-[16px] leading-7 text-black/55 transition group-hover:text-white/80">
                    Giải pháp toàn diện cho sự kiện doanh nghiệp và tiệc văn
                    phòng
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                  {[
                    "Phục vụ 30-100 khách",
                    "Theo dõi tiến độ tiệc theo thời gian thực",
                    "Menu đa dạng, trình bày chuyên nghiệp",
                    "Hỗ trợ xuất hóa đơn & báo cáo",
                    "Nhân sự phục vụ & trưởng nhóm điều phối",
                    "Linh hoạt điều chỉnh thời gian & số lượng",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2E6418] text-white transition group-hover:bg-[#FFFAF0] group-hover:text-[#2E6418]">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <p className="text-[16px] leading-7 text-black/60 transition group-hover:text-white/85">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-4 border-t border-black/15 pt-5 transition group-hover:border-white/20 md:flex-row md:items-center md:justify-between">
                  <p className="text-[24px] md:text-[26px] font-bold">
                    Từ 5.000.000 VNĐ
                    <span className="text-[16px] font-normal text-black/70 transition group-hover:text-white/80">
                      {" "}
                      / buổi tiệc
                    </span>
                  </p>

                  <button className="rounded-full border border-[#7EA26E] bg-[#FFFAF0] px-12 py-3 text-[18px] font-semibold text-[#2E6418] transition group-hover:border-[#E85E1B] group-hover:bg-[#E85E1B] group-hover:text-white">
                    CHỌN GÓI
                  </button>
                </div>
              </div>

              {/* BOTTOM RIGHT */}
              <div className="group rounded-[10px] border border-[#7EA26E] bg-[#FFFAF0] p-8 text-black transition hover:bg-[#2E6418] hover:text-[#FFFAF0]">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1fr]">
                  <div>
                    <h3 className="text-[22px] md:text-[24px] font-bold uppercase">
                      GÓI TÙY CHỈNH
                    </h3>
                  </div>

                  <p className="text-[16px] leading-7 text-black/55 transition group-hover:text-white/80">
                    Dành cho sự kiện đặc biệt hoặc yêu cầu riêng
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                  {[
                    "Tùy chọn menu từ danh sách đầy đủ",
                    "Theo dõi tiến độ tiệc theo thời gian thực",
                    "Thêm món đặc biệt, đồ uống, tráng miệng",
                    "Hỗ trợ xuất hóa đơn & báo cáo",
                    "Phù hợp cho tiệc cưới, sinh nhật, sự kiện lớn",
                    "Điều chỉnh theo ngân sách",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2E6418] text-white transition group-hover:bg-[#FFFAF0] group-hover:text-[#2E6418]">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <p className="text-[16px] leading-7 text-black/60 transition group-hover:text-white/85">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-4 border-t border-black/15 pt-5 transition group-hover:border-white/20 md:flex-row md:items-center md:justify-between">
                  <p className="text-[24px] md:text-[26px] font-bold">
                    Theo yêu cầu / theo món
                  </p>

                  <button className="rounded-full border border-[#7EA26E] bg-[#FFFAF0] px-12 py-3 text-[18px] font-semibold text-[#2E6418] transition group-hover:border-[#E85E1B] group-hover:bg-[#E85E1B] group-hover:text-white">
                    CHỌN GÓI
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-20">
          <br />
          <br />
          <h2 className="text-[#2E6418] text-[34px] md:text-[52px] font-bold uppercase text-center leading-none">
            HÀNH TRÌNH PHÁT TRIỂN BOOKFET
          </h2>

          <div className="mt-12 relative">
            {/* line */}
            <div className="hidden md:block absolute left-[8%] right-[8%] top-[42px] h-[1px] bg-black/20" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
              {milestones.map((item) => (
                <div key={item.year} className="text-center relative">
                  <p className="text-black/35 text-[16px] md:text-[18px]">
                    {item.year}
                  </p>

                  <div className="mt-5 mb-6 flex justify-center">
                    <div className="w-[8px] h-[8px] rounded-full bg-black/80" />
                  </div>

                  <h3 className="text-[#5C8F57] text-[20px] md:text-[22px] font-semibold leading-7">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] md:text-[16px] leading-7 text-black/45 max-w-[260px] mx-auto">
                    {item.desc}
                  </p>
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
