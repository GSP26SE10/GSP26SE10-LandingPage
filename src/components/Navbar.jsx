import React from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { label: "TRANG CHỦ", href: "/" },
    { label: "GIỚI THIỆU", href: "/about" },
    { label: "BLOG", href: "/blog" },
    { label: "LIÊN HỆ", href: "/contact" },
  ];

  return (
    <header
      className="w-full bg-[#FFFAF0] sticky top-0 z-50"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="h-24 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <span className="logo-bookfet text-5xl tracking-wide">BOOKFET</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] font-semibold tracking-wide text-[#2f2f2f] hover:text-[#2f7d32] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              className="text-[#2f2f2f] hover:text-[#2f7d32] transition"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            <button
              className="text-[#2f2f2f] hover:text-[#2f7d32] transition"
              aria-label="Cart"
            >
              <ShoppingCart size={18} />
            </button>

            <button
              className="text-[#2f2f2f] hover:text-[#2f7d32] transition"
              aria-label="Account"
            >
              <User size={18} />
            </button>

            <a
              href="/booking"
              className="ml-2 inline-flex items-center rounded-full border border-[#2f2f2f] px-4 py-2 text-[12px] font-semibold text-[#2f2f2f] hover:bg-[#2f7d32] hover:text-white hover:border-[#2f7d32] transition"
            >
              ĐẶT TIỆC NGAY
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-[#2f2f2f]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-3 border-t border-[#e7decf] pt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-semibold text-[#2f2f2f] hover:text-[#2f7d32]"
                >
                  {item.label}
                </a>
              ))}

              <div className="flex items-center gap-4 pt-2">
                <button
                  className="text-[#2f2f2f] hover:text-[#2f7d32]"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
                <button
                  className="text-[#2f2f2f] hover:text-[#2f7d32]"
                  aria-label="Cart"
                >
                  <ShoppingCart size={18} />
                </button>
                <button
                  className="text-[#2f2f2f] hover:text-[#2f7d32]"
                  aria-label="Account"
                >
                  <User size={18} />
                </button>
              </div>

              <a
                href="/booking"
                className="mt-2 inline-flex w-fit items-center rounded-full border border-[#2f2f2f] px-4 py-2 text-[12px] font-semibold text-[#2f2f2f] hover:bg-[#2f7d32] hover:text-white hover:border-[#2f7d32] transition"
              >
                ĐẶT TIỆC NGAY
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
