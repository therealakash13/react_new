import LeftGrid from "./LeftGrid";
import Partners from "./Partners";
import RightGrid from "./RightGrid";

export default function Section2() {
  return (
    <div>
      <div className="grid grid-cols-4 my-10">
        <LeftGrid />
        <RightGrid />
      </div>

      <Partners />  
    </div>
  );
}
