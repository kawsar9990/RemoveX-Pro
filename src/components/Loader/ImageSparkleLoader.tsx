
"use client";

const sparkles = [
  { top: "20%", left: "27%", size: 18, delay: "0s" },
  { top: "15%", left: "62%", size: 16, delay: "0.5s" },
  { top: "22%", left: "87%", size: 24, delay: "1s" },
  { top: "55%", left: "53%", size: 30, delay: "0.3s" },
  { top: "83%", left: "65%", size: 24, delay: "1.2s" },
  { top: "91%", left: "46%", size: 28, delay: "0.7s" },
];

export default function ImageSparkleLoader() {
  return (
   <div className="absolute inset-0 bg-[#454545] rounded-3xl overflow-hidden">

      {sparkles.map((sparkle, index) => (
        <svg
          key={index}
          viewBox="0 0 24 24"
          width={sparkle.size}
          height={sparkle.size}
          className="absolute sparkle-animation"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            animationDelay: sparkle.delay,
          }}
        >
          <path
            d="M12 1 L14 9 L23 12 L14 15 L12 23 L10 15 L1 12 L10 9 Z"
            fill="#D6A72E"
          />
        </svg>
      ))}

    </div>
  );
}
