import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const sections = [
  {
    id: "muc-dich",
    title: "1. Mục đích áp dụng",
    content: [
      "Điều khoản này quy định rõ các nguyên tắc liên quan đến việc đặt cọc khi đặt dịch vụ buffet, thanh toán phần còn lại, xử lý các trường hợp hủy đơn hoặc thay đổi đơn và bồi thường thiệt hại trong quá trình tổ chức tiệc.",
      "Điều khoản áp dụng cho tất cả các đơn đặt dịch vụ buffet tại nhà hoặc tại công ty thông qua hệ thống.",
    ],
  },
  {
    id: "dat-coc",
    title: "2. Điều khoản đặt cọc",
    children: [
      {
        subtitle: "2.1. Mức đặt cọc",
        bullets: [
          "Khách hàng phải đặt cọc 50% tổng giá trị đơn hàng ngay sau khi đơn đặt dịch vụ được Owner xác nhận.",
          "Đơn hàng chỉ được xem là hợp lệ sau khi hệ thống ghi nhận trạng thái “Đã đặt cọc”.",
        ],
      },
      {
        subtitle: "2.2. Mục đích tiền cọc",
        intro: "Tiền đặt cọc được sử dụng để:",
        bullets: [
          "Giữ lịch tổ chức sự kiện.",
          "Chuẩn bị nguyên vật liệu, nhân sự, trang thiết bị.",
          "Hạn chế rủi ro hủy đơn sát ngày.",
        ],
      },
    ],
  },
  {
    id: "thanh-toan",
    title: "3. Điều khoản thanh toán phần còn lại",
    children: [
      {
        subtitle: "3.1. Thời điểm thanh toán",
        bullets: [
          "Khách hàng phải thanh toán 100% số tiền còn lại chậm nhất trước khi sự kiện kết thúc.",
          "Hoặc theo thời điểm được thỏa thuận trong đơn hàng.",
        ],
      },
      {
        subtitle: "3.2. Hình thức thanh toán",
        intro: "Hệ thống hỗ trợ:",
        bullets: [
          "Thanh toán trực tuyến (theo cổng thanh toán được tích hợp).",
          "Thanh toán chuyển khoản.",
          "Thanh toán trực tiếp (nếu được Owner cho phép).",
        ],
      },
      {
        subtitle: "3.3. Điều kiện hoàn tất đơn hàng",
        bullets: [
          "Đơn hàng chỉ được chuyển sang trạng thái “Hoàn thành” khi đã thanh toán đầy đủ.",
          "Không còn phát sinh chi phí hoặc bồi thường chưa xử lý.",
        ],
      },
    ],
  },
  {
    id: "huy-don",
    title: "4. Điều khoản hủy đơn và hoàn tiền",
    children: [
      {
        subtitle: "4.1. Hủy đơn trước ngày tổ chức",
      },
      {
        subtitle: "4.2. Hủy đơn do phía Owner",
        bullets: [
          "Nếu Owner hủy đơn vì lý do chủ quan, khách hàng được hoàn lại 100% tiền đã thanh toán.",
          "Có thể kèm bồi thường theo thỏa thuận giữa hai bên.",
        ],
      },
    ],
  },
  {
    id: "chi-phi-phat-sinh",
    title: "5. Điều khoản phát sinh chi phí",
    children: [
      {
        subtitle: "5.1. Trường hợp phát sinh",
        intro:
          "Chi phí phát sinh là các khoản chi phí ngoài giá trị đơn hàng đã được xác nhận ban đầu, có thể phát sinh trong quá trình chuẩn bị hoặc thực hiện dịch vụ buffet.",
      },
      {
        subtitle: "5.1.1. Thay đổi số lượng khách tham dự",
        bullets: [
          "Nếu số lượng khách tham dự tăng so với số lượng đã xác nhận trong đơn hàng ban đầu, khách hàng bắt buộc phải đặt thêm món ăn hoặc dịch vụ tương ứng để đảm bảo chất lượng phục vụ.",
          "Nếu khách hàng không đồng ý đặt thêm món ăn hoặc dịch vụ bổ sung, đơn vị cung cấp dịch vụ có quyền từ chối phục vụ số lượng khách phát sinh hoặc từ chối thực hiện thay đổi so với đơn hàng ban đầu.",
          "Nếu số lượng khách giảm so với số lượng đã đặt, không hoàn tiền đối với phần chênh lệch đã chuẩn bị nguyên vật liệu.",
        ],
      },
      {
        subtitle: "5.1.2. Yêu cầu bổ sung món ăn hoặc dịch vụ",
        bullets: [
          "Khách hàng có thể yêu cầu thêm món ăn ngoài thực đơn đã chọn.",
          "Khách hàng có thể yêu cầu thêm dịch vụ bổ sung như nhân sự, trang trí, thiết bị, phục vụ kéo dài,...",
          "Giá của các yêu cầu bổ sung được tính theo bảng giá hiện hành tại thời điểm phát sinh hoặc theo thỏa thuận riêng giữa hai bên.",
        ],
      },
      {
        subtitle: "5.1.3. Thay đổi thời gian tổ chức sự kiện",
        bullets: [
          "Trường hợp thời gian tổ chức kéo dài hơn thời gian đã thỏa thuận ban đầu, chi phí phát sinh có thể bao gồm phí nhân sự làm việc ngoài giờ.",
          "Có thể phát sinh thêm phí thuê thiết bị, mặt bằng (nếu có).",
        ],
      },
      {
        subtitle: "5.2. Nguyên tắc áp dụng",
        bullets: [
          "Mọi chi phí phát sinh phải được thông báo rõ ràng.",
          "Mọi chi phí phát sinh phải được khách hàng xác nhận trước khi thực hiện.",
        ],
      },
    ],
  },
  {
    id: "hu-hai",
    title: "6. Điều khoản hư hại, mất mát tài sản",
    children: [
      {
        subtitle: "6.1. Phạm vi áp dụng",
        bullets: [
          "Áp dụng đối với dụng cụ, thiết bị, bàn ghế, vật dụng trang trí.",
          "Áp dụng đối với tài sản thuộc quyền sở hữu của đơn vị cung cấp dịch vụ.",
        ],
      },
      {
        subtitle: "6.2. Trách nhiệm bồi thường",
        bullets: [
          "Khách hàng chịu trách nhiệm bồi thường nếu hư hại hoặc mất mát do khách hàng hoặc khách mời gây ra.",
          "Khách hàng chịu trách nhiệm bồi thường nếu sử dụng sai mục đích hoặc không tuân thủ hướng dẫn.",
        ],
      },
      {
        subtitle: "6.3. Mức bồi thường",
        bullets: [
          "Mức bồi thường được xác định dựa trên giá trị thực tế của tài sản tại thời điểm xảy ra hư hại.",
          "Mức bồi thường được xác định dựa trên biên bản xác nhận giữa hai bên.",
          "Số tiền bồi thường sẽ được trừ trực tiếp vào tiền cọc hoặc thanh toán bổ sung nếu vượt quá tiền cọc.",
        ],
      },
    ],
  },
  {
    id: "tranh-chap",
    title: "7. Xử lý tranh chấp và xác nhận trách nhiệm",
    children: [
      {
        subtitle: "7.1. Biên bản sự kiện",
        bullets: [
          "Sau khi kết thúc sự kiện, hai bên có thể lập biên bản nghiệm thu.",
          "Biên bản là căn cứ để xác nhận hoàn thành dịch vụ và xử lý các vấn đề phát sinh (nếu có).",
        ],
      },
      {
        subtitle: "7.2. Giải quyết tranh chấp",
        bullets: [
          "Tranh chấp được ưu tiên giải quyết thông qua thương lượng.",
          "Tranh chấp được ưu tiên giải quyết thông qua thỏa thuận thiện chí.",
          "Trường hợp không đạt được thỏa thuận, việc giải quyết sẽ thực hiện theo quy định pháp luật hiện hành.",
        ],
      },
    ],
  },
  {
    id: "hieu-luc",
    title: "8. Hiệu lực điều khoản",
    bullets: [
      "Khách hàng xác nhận đã đọc, hiểu và đồng ý với toàn bộ điều khoản khi tích chọn “Tôi đồng ý với điều khoản cọc và thanh toán”.",
      "Khách hàng xác nhận đã đọc, hiểu và đồng ý với toàn bộ điều khoản khi thực hiện thanh toán đặt cọc.",
      "Điều khoản có hiệu lực kể từ thời điểm xác nhận.",
    ],
  },
];

const refundPolicies = [
  { time: "Trước từ 7 ngày trở lên", policy: "Hoàn lại 100% tiền cọc" },
  { time: "Từ 3 đến 6 ngày", policy: "Hoàn lại 50% tiền cọc" },
  { time: "Dưới 3 ngày", policy: "Không hoàn tiền cọc" },
];

function SectionBlock({ title, content, bullets, children }) {
  return (
    <section className="rounded-[28px] border border-[#ECE7DF] bg-white p-6 md:p-8 shadow-sm">
      <h2 className="text-[24px] md:text-[30px] font-bold text-[#2F3A67] leading-tight">
        {title}
      </h2>

      {content?.length > 0 && (
        <div className="mt-4 space-y-4">
          {content.map((item, index) => (
            <p
              key={index}
              className="text-[15px] md:text-[17px] leading-8 text-[#42526B]"
            >
              {item}
            </p>
          ))}
        </div>
      )}

      {bullets?.length > 0 && (
        <ul className="mt-4 space-y-3">
          {bullets.map((item, index) => (
            <li
              key={index}
              className="flex gap-3 text-[15px] md:text-[17px] leading-8 text-[#42526B]"
            >
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#E8712E]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {children?.length > 0 && (
        <div className="mt-6 space-y-6">
          {children.map((child, index) => (
            <div key={index} className="rounded-[22px] bg-[#FFF8F2] p-5 md:p-6">
              <h3 className="text-[18px] md:text-[22px] font-semibold text-[#2F3A67]">
                {child.subtitle}
              </h3>

              {child.intro && (
                <p className="mt-3 text-[15px] md:text-[16px] leading-8 text-[#5B6780]">
                  {child.intro}
                </p>
              )}

              {child.bullets?.length > 0 && (
                <ul className="mt-4 space-y-3">
                  {child.bullets.map((item, subIndex) => (
                    <li
                      key={subIndex}
                      className="flex gap-3 text-[15px] md:text-[16px] leading-8 text-[#42526B]"
                    >
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#2F3A67]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {child.subtitle === "4.1. Hủy đơn trước ngày tổ chức" && (
                <div className="mt-5 overflow-hidden rounded-[20px] border border-[#E7DED2]">
                  <div className="grid grid-cols-2 bg-[#DCE8CB] text-[#2F3A67] font-semibold text-[14px] md:text-[16px]">
                    <div className="px-4 py-4 border-r border-[#C8D7B6]">
                      Thời điểm hủy
                    </div>
                    <div className="px-4 py-4">Chính sách</div>
                  </div>

                  {refundPolicies.map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="grid grid-cols-2 bg-white text-[14px] md:text-[16px] text-[#42526B] border-t border-[#F0E7DD]"
                    >
                      <div className="px-4 py-4 border-r border-[#F0E7DD]">
                        {row.time}
                      </div>
                      <div className="px-4 py-4">{row.policy}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default function PolicyPage() {
  return (
    <div
      className="min-h-screen bg-[#FFF8F2] text-[#1f1f1f]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <NavBar />

      <main>
        <section className="max-w-[1440px] mx-auto px-5 md:px-7 lg:px-10 pt-8 md:pt-10 pb-20">
          <div className="rounded-[32px] bg-[#2E6418] px-6 py-10 md:px-10 md:py-14 text-[#FFF8F2]">
            <p className="text-sm md:text-base uppercase tracking-[0.18em] text-white/75">
              Chính sách dịch vụ
            </p>

            <h1 className="mt-4 text-[30px] md:text-[48px] font-bold leading-[1.12] tracking-[-0.02em] uppercase">
              Điều khoản cọc, thanh toán
              <br />
              và xử lý hư hại
            </h1>

            <p className="mt-6 max-w-[900px] text-[15px] md:text-[17px] leading-8 text-white/90">
              Vui lòng đọc kỹ các điều khoản dưới đây trước khi xác nhận đặt
              dịch vụ. Nội dung này quy định rõ trách nhiệm của các bên trong
              việc đặt cọc, thanh toán, thay đổi đơn, hủy đơn và xử lý các phát
              sinh trong quá trình tổ chức tiệc buffet.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 xl:grid-cols-[280px_minmax(0,1fr)] gap-8 items-start">
            <aside className="xl:sticky xl:top-24 rounded-[28px] border border-[#ECE7DF] bg-white p-5 md:p-6 shadow-sm">
              <h2 className="text-[18px] font-bold text-[#2F3A67]">Mục lục</h2>

              <div className="mt-4 space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-xl px-3 py-2 text-[15px] text-[#5B6780] hover:bg-[#FFF8F2] hover:text-[#E8712E] transition"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </aside>

            <div className="space-y-6">
              {sections.map((section) => (
                <div key={section.id} id={section.id}>
                  <SectionBlock
                    title={section.title}
                    content={section.content}
                    bullets={section.bullets}
                    children={section.children}
                  />
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
