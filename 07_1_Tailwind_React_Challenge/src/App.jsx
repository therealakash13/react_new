import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div className="w-full h-screen relative text-white">
      <img
        src="https://r4.wallpaperflare.com/wallpaper/833/137/193/5bd2f5b607e72-wallpaper-22f1d2c0cd668e0bdaf862a530a8e922.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col h-full">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}
