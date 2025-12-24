import React from "react";
import videoFrame from "./assets/video/video-frame.mp4";

const BackgroundCarousel: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50" // Reduced opacity for better text contrast
      >
        <source src={videoFrame} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundCarousel;
