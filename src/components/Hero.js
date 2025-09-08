import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import heroVideo from "../videos/hero-video.mp4";

const Hero = () => {
  const [showContent, setShowContent] = useState(false); // yazı göster/gizle
  const [hideVideo, setHideVideo] = useState(false); // video fade-out

  useEffect(() => {
    // 5 saniye sonra video kaybolsun, yazı görünsün
    const timer = setTimeout(() => {
      setHideVideo(true);
      setTimeout(() => setShowContent(true), 1000); // video fade-out bittikten 1 sn sonra yazı gelsin
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          hideVideo ? "opacity-0" : "opacity-100"
        }`}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-800 to-gray-900 opacity-80"></div>

      {/* Content (fade-in after video) */}
      <div
        className={`relative z-10 text-center px-4 transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl md:text-5xl font-semibold text-white max-w-3xl mx-auto">
          Kariyerim ve hedeflerim ile alakalı etkileyici söz buraya gelecek
        </h1>
      </div>

      {/* Scroll Icon (content ile beraber görünür) */}
      {showContent && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce transition-opacity duration-1000">
          <ChevronDown className="text-white" size={32} />
        </div>
      )}
    </section>
  );
};

export default Hero;