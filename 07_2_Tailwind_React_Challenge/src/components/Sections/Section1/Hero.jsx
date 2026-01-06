import { Play } from "./SVGComponent";
export default function Hero() {
  return (
    <div className="flex justify-between my-20">
      <div>
        <h2 className="text-7xl text-primary mb-6 font-medium">
          Profession <br />
          <span className="font-bold text-secondary leading-normal">
            Security Services
          </span>
          <br />
          You Can Trust
        </h2>
        <p className="w-4xl text-secondary font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          laudantium. Minima rem dicta eos quia dolorem, ullam odio quaerat quae
          corporis facere magni, aperiam, ducimus quas omnis neque corrupti
          commodi vitae atque illum? Iste ab consectetur ipsam optio ipsum,
          commodi animi maxime. Rem architecto, fugiat qui autem suscipit
          praesentium ullam?
        </p>
        <div className="flex text-secondary gap-14 px-4 py-10">
          <span className="flex flex-col items-center">
            <em className="not-italic text-6xl  font-semibold">11</em>
            Experiences
          </span>
          <span className="flex flex-col items-center">
            <em className="not-italic text-6xl font-semibold">25</em>Products
          </span>
          <span className="flex flex-col items-center">
            <em className="not-italic text-6xl  font-semibold">100+</em>Project
            Drones
          </span>
        </div>
      </div>
      <div className="px-1">
        <div className="relative">
          <img
            className="w-96 h-full object-cover rounded-full border-10 border-accent shadow-2xl p-1"
            src="https://plus.unsplash.com/premium_photo-1728848993113-69c351ec7264?q=80&w=754&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />

          <Play />
        </div>
      </div>
    </div>
  );
}
