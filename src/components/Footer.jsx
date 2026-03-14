import React from "react";
import { Facebook, Instagram, Youtube, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16">
      {/* CTA subscribe/contact */}
      <section className="bg-[#2f7d32] text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
            Giữ liên lạc cùng Bookfet
          </h2>

          <p className="mt-3 text-sm md:text-base text-white/80 max-w-2xl mx-auto">
            Nhận ưu đãi, mẹo tổ chức tiệc và cập nhật dịch vụ mới từ chúng tôi.
          </p>

          <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="w-full sm:flex-1 rounded-full border border-white/30 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/60 outline-none focus:border-white"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-[#f26a21] px-6 py-3 text-sm font-bold text-white hover:opacity-90 transition"
            >
              GỬI NGAY
              <Send size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* Main footer */}
      <section className="bg-[#25692a] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold text-[#ff7a2f]">BOOKFET</h3>
            <p className="mt-4 text-sm text-white/80 leading-6">
              Dịch vụ đặt tiệc buffet chuyên nghiệp, nhanh chóng, linh hoạt cho
              gia đình, doanh nghiệp và mọi sự kiện.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-base font-bold uppercase">Điều hướng</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <a href="/" className="hover:text-white transition">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition">
                  Dịch vụ
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold uppercase">Liên hệ</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80 leading-6">
              <li>Hotline: +84 xxx xxx xxx</li>
              <li>Email: support@bookfet.vn</li>
              <li>Địa chỉ: TP.HCM, Việt Nam</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-base font-bold uppercase">Kết nối</h4>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#25692a] transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#25692a] transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#25692a] transition"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/70">
            <p>© 2026 BOOKFET. All rights reserved.</p>

            <div className="flex items-center gap-4">
              <a href="/privacy" className="hover:text-white transition">
                Privacy
              </a>
              <a href="/terms" className="hover:text-white transition">
                Terms
              </a>
              <a href="/support" className="hover:text-white transition">
                Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
