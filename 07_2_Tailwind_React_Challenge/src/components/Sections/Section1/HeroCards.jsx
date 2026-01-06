import { Bulb, Award, Tick, Gear } from "./SVGComponent";
export default function HeroCards() {
  return (
    <div className="flex bg-secondary text-white w-full justify-between rounded-4xl">
      <div className="items">
        <Bulb />
        <h3>Innovation</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          quae.
        </p>
      </div>

      <div className="items">
        <Award />
        <h3>High Quality</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          quae.
        </p>
      </div>

      <div className="items">
        <Tick />
        <h3>Best Product</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          quae.
        </p>
      </div>

      <div className="items">
        <Gear />
        <h3>Top Services</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          quae.
        </p>
      </div>
    </div>
  );
}
