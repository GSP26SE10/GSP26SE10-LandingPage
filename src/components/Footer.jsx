import React from "react";

export default function Footer() {
  return (
    <footer
      className="mt-16 bg-[#2F6F1F] text-[#FFFAF0]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="px-6 lg:px-10 pt-10 md:pt-12">
          {/* top nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[16px] font-medium">
            <a href="/" className="hover:opacity-80 transition">
              Trang chủ
            </a>
            <a href="/about" className="hover:opacity-80 transition">
              Giới thiệu
            </a>
            <a href="/blog" className="hover:opacity-80 transition">
              Blog
            </a>
            <a href="/services" className="hover:opacity-80 transition">
              Dịch vụ
            </a>
            <a href="/contact" className="hover:opacity-80 transition">
              Liên hệ
            </a>
          </nav>

          {/* main content */}
          <div className="pt-14 pb-12 text-center">
            <h2 className="text-[34px] md:text-[48px] font-bold uppercase leading-tight">
              GIỮ LIÊN LẠC CÙNG BOOKFET
            </h2>

            <form className="mt-10 max-w-[760px] mx-auto">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full h-[64px] rounded-full border border-white/80 bg-transparent px-6 pr-[170px] text-[16px] text-white placeholder:text-white/85 outline-none"
                />

                <button
                  type="submit"
                  className="absolute right-[4px] top-[4px] h-[56px] min-w-[150px] rounded-full bg-[#E85E1B] px-8 text-[16px] font-bold text-white transition hover:opacity-90"
                >
                  ĐĂNG KÝ
                </button>
              </div>
            </form>

            <p className="mt-5 text-[16px] md:text-[18px] text-[#FFFAF0]/95">
              Nhận ưu đãi, tin tức và cập nhật dịch vụ mới nhất.
            </p>
          </div>
        </div>

        {/* divider */}
        <div className="border-t border-white/35" />

        {/* bottom bar */}
        <div className="px-6 lg:px-10 py-7">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-[15px] md:text-[16px]">
            <div className="flex justify-center md:justify-start items-center gap-3">
              <a href="#" className="hover:opacity-80 transition">
                Instagram
              </a>
              <span>|</span>
              <a href="#" className="hover:opacity-80 transition">
                Facebook
              </a>
            </div>

            <p className="text-center">
              © 2026 BOOKFET. Tất cả quyền được bảo lưu.
            </p>

            <div className="flex justify-center md:justify-end items-center gap-3 text-center">
              <a href="/privacy" className="hover:opacity-80 transition">
                Chính sách bảo mật
              </a>
              <span>|</span>
              <a href="/terms" className="hover:opacity-80 transition">
                Điều khoản sử dụng
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
