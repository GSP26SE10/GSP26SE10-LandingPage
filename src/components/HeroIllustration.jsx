import React from "react";

export default function HeroIllustration() {
  return (
    <div className="relative w-full h-[430px] md:h-[520px] lg:h-[620px]">
      <div className="absolute left-0 top-0 origin-top-left scale-[0.72] md:scale-[0.86] lg:scale-[1]">
        <div className="relative w-[620px] h-[620px]">
          {/* 1 line bao ngoài */}
          <svg
            className="absolute left-[48px] top-[42px] w-[548px] h-[548px]"
            viewBox="0 0 548 548"
            fill="none"
          >
            <defs>
              <linearGradient
                id="heroRingGradient"
                x1="60"
                y1="190"
                x2="470"
                y2="380"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#FF3E5C" />
                <stop offset="1" stopColor="#E7AD46" />
              </linearGradient>
            </defs>

            <circle
              cx="274"
              cy="274"
              r="228"
              stroke="url(#heroRingGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="1190 245"
              strokeDashoffset="350"
              fill="none"
            />
          </svg>

          {/* main dish */}
          <div className="absolute left-[112px] top-[106px] w-[415px] h-[415px] rounded-full bg-[#FFFAF0] shadow-[0_14px_28px_rgba(0,0,0,0.12)] p-[2px] overflow-hidden">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <img
                src="https://www.thaiselect.com/images/home/about-dish2.png"
                alt="Món chính"
                className="absolute max-w-none"
                style={{
                  width: "138%",
                  height: "138%",
                  left: "-17%",
                  top: "-15%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          {/* dish trái trên */}
          <div className="absolute left-[18px] top-[185px] w-[88px] h-[88px] rounded-full bg-[#FFFAF0] shadow-[0_6px_16px_rgba(0,0,0,0.16)] p-[5px] overflow-hidden">
            <img
              src="https://www.shutterstock.com/shutterstock/videos/1026739175/thumb/1.jpg?ip=x480?q=80&w=1400&auto=format&fit=crop"
              alt="Món phụ 1"
              className="w-full h-full rounded-full object-cover object-center scale-[1.6]"
            />
          </div>

          {/* dish trên phải */}
          <div className="absolute left-[360px] top-[35px] w-[112px] h-[112px] rounded-full bg-[#FFFAF0] shadow-[0_6px_16px_rgba(0,0,0,0.16)] p-[3px] overflow-hidden">
            <img
              src="https://img.sunset02.com/sites/default/files/image/2016/12/main/grilled-calamari-steaks-olive-bean-salad-sun-0916.jpg?w=900&h=500&crop=1"
              alt="Món phụ 2"
              className="w-full h-full rounded-full object-cover object-center scale-[1.8]"
            />
          </div>

          {/* dish trái dưới */}
          <div className="absolute left-[46px] top-[452px] w-[92px] h-[92px] rounded-full bg-[#FFFAF0] shadow-[0_6px_16px_rgba(0,0,0,0.16)] p-[5px] overflow-hidden">
            <img
              src="https://www.shutterstock.com/shutterstock/videos/1051207801/thumb/1.jpg?ip=x480?q=60&w=800&auto=format&fit=crop"
              alt="Món phụ 3"
              className="w-full h-full rounded-full object-cover object-center scale-[1.9]"
            />
          </div>

          {/* 3 shape trên */}
          <div className="absolute left-[95px] top-[36px] w-[34px] h-[74px] rounded-full bg-gradient-to-b from-[#EE1111] to-[#F1C74E] rotate-[10deg]" />
          <div className="absolute left-[185px] top-[18px] w-[30px] h-[64px] rounded-full bg-gradient-to-b from-[#EE1111] to-[#F1C74E] rotate-[-8deg]" />
          <div className="absolute left-[280px] top-[62px] w-[30px] h-[64px] rounded-full bg-gradient-to-b from-[#D96060] to-[#F1C74E] rotate-[10deg]" />
        </div>
      </div>
    </div>
  );
}
