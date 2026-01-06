import { Customer, NotePen, ThumbsUp } from "./SVGComponents";

export default function RightGrid() {
  return (
    <div className="col-span-2 flex flex-col px-20 py-4 gap-6 shadow-2xl rounded-r-2xl">
      <h2 className="text-3xl">Why Choose Us</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quod
        neque, voluptas aperiam officia laborum.
      </p>
      <div className="flex flex-col gap-4">

        <div className="flex items-start gap-3">
          <div className="bg-primary rounded-2xl p-3">
            <ThumbsUp width="20px" height="20px" stroke="white" />
          </div>
          <div>
            <h3 className="text-2xl py-2 text-primary font-semibold">
              23 Years Experience
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
              ratione!
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="bg-primary rounded-2xl p-3">
            <Customer width="20px" height="20px" stroke="white" />
          </div>
          <div>
            <h3 className="text-2xl py-2 text-primary font-semibold">
              24/7 Support
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
              ratione!
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="bg-primary rounded-2xl p-3">
            <NotePen
              width="20px"
              height="20px"
              stroke="white"
            />
          </div>
          <div>
            <h3 className="text-2xl py-2 text-primary font-semibold">
              Industry Support
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
              ratione!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
