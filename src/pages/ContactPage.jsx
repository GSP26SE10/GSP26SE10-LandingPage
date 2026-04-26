import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import API_URL from "@/config/api";

export default function ContactPage() {
  const faqs = [
    {
      id: "01",
      question: "Tôi có thể đặt buffet cho bao nhiêu khách?",
      answer:
        "Bookfet hỗ trợ nhiều quy mô khác nhau, từ tiệc nhỏ tại nhà đến các sự kiện công ty với số lượng khách lớn hơn.",
    },
    {
      id: "02",
      question: "Bookfet có hỗ trợ setup tại nhà không?",
      answer:
        "Có. Chúng tôi hỗ trợ setup bàn tiệc, bố trí món ăn và chuẩn bị theo không gian thực tế của khách hàng.",
    },
    {
      id: "03",
      question: "Chi phí đã bao gồm nhân sự phục vụ chưa?",
      answer:
        "Tùy theo gói dịch vụ bạn chọn. Một số gói đã bao gồm nhân sự phục vụ cơ bản, còn các gói nâng cao sẽ có thêm điều phối và hỗ trợ vận hành.",
    },
    {
      id: "04",
      question: "Tôi có thể thay đổi menu sau khi đặt không?",
      answer:
        "Có. Bạn có thể điều chỉnh menu trong thời gian phù hợp trước ngày tổ chức, tùy theo tình trạng xác nhận đơn và nguyên liệu.",
    },
  ];

  const [openFaq, setOpenFaq] = React.useState("01");

  const [form, setForm] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "Tư vấn đặt tiệc",
    content: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/contact-request`, {
        method: "POST",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerId: null,
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          content: form.content,
        }),
      });

      if (!res.ok) {
        throw new Error("Không thể gửi liên hệ");
      }

      setSuccess("Gửi liên hệ thành công! Chúng tôi sẽ phản hồi sớm.");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        subject: "Tư vấn đặt tiệc",
        content: "",
      });
    } catch (err) {
      console.error(err);
      setError("Không thể gửi liên hệ. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
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
              LIÊN HỆ VỚI ĐỘI NGŨ BOOKFET
            </h1>

            <p className="mt-7 max-w-[760px] mx-auto text-[15px] md:text-[16px] leading-7 text-white/90">
              Chúng tôi luôn sẵn sàng hỗ trợ bạn tư vấn gói buffet phù hợp, giải
              đáp thắc mắc và đồng hành trong quá trình tổ chức bữa tiệc.
            </p>
          </div>
        </section>

        {/* CONTACT FORM + INFO */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-14">
          <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
            <div className="rounded-[10px] bg-[#DCE8CC] p-8 md:p-10">
              <h2 className="text-[#2E6418] text-[24px] md:text-[32px] font-bold uppercase">
                GỬI LIÊN HỆ
              </h2>

              <p className="mt-3 max-w-[420px] text-[16px] leading-7 text-black/75">
                Hãy để lại thông tin, chúng tôi sẽ phản hồi trong thời gian sớm
                nhất.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-[18px] font-semibold text-black">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder="Nhập họ và tên của bạn"
                    className="w-full rounded-[8px] border border-[#9EB08F] bg-transparent px-4 py-3 text-[16px] outline-none placeholder:text-black/35"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[18px] font-semibold text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Nhập địa chỉ email"
                    className="w-full rounded-[8px] border border-[#9EB08F] bg-transparent px-4 py-3 text-[16px] outline-none placeholder:text-black/35"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[18px] font-semibold text-black">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="Nhập số điện thoại"
                    className="w-full rounded-[8px] border border-[#9EB08F] bg-transparent px-4 py-3 text-[16px] outline-none placeholder:text-black/35"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[18px] font-semibold text-black">
                    Chủ đề
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    className="w-full rounded-[8px] border border-[#9EB08F] bg-transparent px-4 py-3 text-[16px] outline-none text-black/70"
                  >
                    <option value="Tư vấn đặt tiệc">Tư vấn đặt tiệc</option>
                    <option value="Tư vấn menu">Tư vấn menu</option>
                    <option value="Hỗ trợ đơn hàng">Hỗ trợ đơn hàng</option>
                    <option value="Khác">Khác</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[18px] font-semibold text-black">
                    Nội dung
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={form.content}
                    onChange={(e) => handleChange("content", e.target.value)}
                    placeholder="Nhập nội dung bạn muốn trao đổi..."
                    className="w-full rounded-[8px] border border-[#9EB08F] bg-transparent px-4 py-3 text-[16px] outline-none resize-none placeholder:text-black/35"
                  />
                </div>

                {success && (
                  <p className="text-center text-green-700 font-medium">
                    {success}
                  </p>
                )}

                {error && (
                  <p className="text-center text-red-500 font-medium">
                    {error}
                  </p>
                )}

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex rounded-full bg-[#E85E1B] px-8 py-3 text-[16px] font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
                  >
                    {loading ? "ĐANG GỬI..." : "GỬI TIN NHẮN"}
                  </button>
                </div>
              </form>
            </div>

            <div className="pt-2">
              <h2 className="text-[#E85E1B] text-[36px] md:text-[54px] font-bold uppercase leading-[1.05]">
                LIÊN HỆ
                <br />
                VỚI CHÚNG TÔI
              </h2>

              <div className="mt-20 space-y-0">
                <div className="grid grid-cols-[140px_1fr_28px] items-center gap-4 border-b border-black/20 py-5">
                  <p className="text-[20px] md:text-[22px] uppercase text-black">
                    ĐIỆN THOẠI
                  </p>
                  <p className="text-right text-[20px] md:text-[22px] text-black/90">
                    +84 xxx xxxxxx
                  </p>
                  <span className="text-right text-[22px] text-black">↗</span>
                </div>

                <div className="grid grid-cols-[140px_1fr_28px] items-center gap-4 border-b border-black/20 py-5">
                  <p className="text-[20px] md:text-[22px] uppercase text-black">
                    EMAIL
                  </p>
                  <p className="text-right text-[20px] md:text-[22px] text-black/90">
                    support@bookfet.vn
                  </p>
                  <span className="text-right text-[22px] text-black">↗</span>
                </div>

                <div className="grid grid-cols-[140px_1fr_28px] items-center gap-4 border-b border-black/20 py-5">
                  <p className="text-[20px] md:text-[22px] uppercase text-black">
                    ĐỊA CHỈ
                  </p>
                  <p className="text-right text-[20px] md:text-[22px] text-black/90">
                    TP HCM, Việt Nam
                  </p>
                  <span className="text-right text-[22px] text-black">↗</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAP */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-14">
          <div className="rounded-[10px] overflow-hidden border border-black/10">
            <iframe
              title="Bookfet map"
              src="https://www.google.com/maps?q=Ho%20Chi%20Minh%20City,%20Vietnam&z=12&output=embed"
              className="w-full h-[320px] md:h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10">
            <div>
              <h2 className="text-[#2E6418] text-4xl md:text-5xl font-bold leading-tight">
                BẠN CÒN
                <br />
                THẮC MẮC?
              </h2>
            </div>

            <div className="rounded-[10px] bg-[#FFFAF0]">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === faq.id;

                return (
                  <div
                    key={faq.id}
                    className={`px-2 py-6 ${
                      index !== faqs.length - 1
                        ? "border-b border-black/15"
                        : ""
                    }`}
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
                              className={`text-[18px] md:text-[20px] font-medium leading-8 ${
                                isOpen ? "text-[#2E6418]" : "text-black"
                              }`}
                            >
                              {faq.question}
                            </p>

                            {isOpen && (
                              <p className="mt-3 text-[16px] md:text-[18px] leading-8 text-black/70">
                                {faq.answer}
                              </p>
                            )}
                          </div>
                        </div>

                        <span
                          className={`mt-1 text-xl transition-transform duration-200 ${
                            isOpen
                              ? "rotate-180 text-[#2E6418]"
                              : "text-black/40"
                          } inline-block`}
                        >
                          ⌄
                        </span>
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
