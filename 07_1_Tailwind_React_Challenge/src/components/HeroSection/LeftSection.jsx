import { ArrowUpRight, Star } from "lucide-react";
export default function LeftSection() {
  return (
    <div className="flex flex-col justify-end w-1/2">
      <div className="flex items-center">
        <span className="flex gap-1 mr-4">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />{" "}
        </span>
        <p className="text-md text-gray-300">5,000+ satisfied visitors</p>
      </div>
      <h1 className="text-7xl font-DMSerif leading-normal my-4">
        Where Silence <br />
        Speaks Luxury
      </h1>
      <p className="leading-tight w-96 text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        exercitationem, placeat sit non earum ipsa cupiditate! Recusandae ad
        ipsam architecto. Sapiente laborum rem veritatis exercitationem autem
        nisi nesciunt ipsum. Ab?
      </p>

      <button className="flex gap-3 my-16 px-1 py-1 bg-gray-500 w-fit rounded-full items-center justify-center cursor-pointer">
        <span className="pl-4  flex items-center">Book a stay </span>
        <ArrowUpRight className="bg-white text-gray-900 w-8 h-8 rounded-full" />
      </button>

      <div className="flex gap-40">
        <div className="flex flex-col border-l-2 px-4 py-1 border-gray-300">
          <h1 className="text-5xl">2,700</h1>
          <span className="text-md text-gray-300">meters above sea level</span>
        </div>
        <div className="flex flex-col border-l-2 px-4 py-1 border-gray-300">
          <h1 className="text-5xl">365°</h1>
          <span className="text-md text-gray-300">panoramic view</span>
        </div>
      </div>
    </div>
  );
}
