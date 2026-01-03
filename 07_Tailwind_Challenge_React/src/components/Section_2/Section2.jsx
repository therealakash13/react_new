import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function Section2(props) {
  return (
    <div className="w-[90%] mx-auto grid grid-cols-6 h-10/12 my-8">
      <LeftSection />
      <RightSection cards={props.cards} />
    </div>
  );
}
