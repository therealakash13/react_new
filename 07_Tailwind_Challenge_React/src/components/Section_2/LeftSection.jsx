import ArrowButton from "./ArrowButton";
import HeroText from "./HeroText";

export default function LeftSection() {
  return (
    <div className="col-span-2 p-4 flex flex-col justify-between">
      <HeroText />
      <ArrowButton />
    </div>
  );
}
