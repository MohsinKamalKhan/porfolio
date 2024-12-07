"use client";

export default function LoadingWave() {
  return (
    <div className="w-80 h-32 flex justify-center items-center relative">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="w-4 h-4 mr-2 rounded-full animate-loading-wave"
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes loading-wave {
          0%,
          100% {
            transform: translateY(0) scale(1);
            background-color:  #808080;
            box-shadow: 0 0 0 rgba(128, 128, 128, 0.5);
          }
          33% {
            transform: translateY(-20px) scale(1.1);
            background-color: #000000;
            box-shadow: 0 8px 16px rgba(0,0, 0, 0.3);
          }
          66% {
            transform: translateY(-28px) scale(1.2);
            background-color: #808080;
            box-shadow: 0 12px 24px rgba(128, 128, 128, 0.3);
          }
        }
        .animate-loading-wave {
          animation: loading-wave 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}