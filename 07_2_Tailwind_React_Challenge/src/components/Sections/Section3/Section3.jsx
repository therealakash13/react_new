import Review from "./Review";
import { RightArrow } from "./SVGComponents";

export default function Section3() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h2 className="text-4xl text-primary font-semibold">
          We Provide <br />
          The Best Services
        </h2>
        <div className="flex flex-col justify-between">
          <p className="w-3xl text-accent mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            facilis error dolor quam quod debitis eveniet, quibusdam
            perspiciatis blanditiis consectetur.{" "}
          </p>
          <button className="flex items-center gap-3 text-primary font-semibold">
            Learn More <RightArrow width={"20"} height={"20"} fill="#112b42" />
          </button>
        </div>
      </div>
      <Review />
    </div>
  );
}
