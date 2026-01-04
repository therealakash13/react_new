import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function HeroSection() {
  return (
    <div className="h-[90%] min-w-11/12 mx-auto flex justify-between my-32 font-Lexend gap-8">
      <LeftSection />
      <RightSection />
    </div>
  );
}
