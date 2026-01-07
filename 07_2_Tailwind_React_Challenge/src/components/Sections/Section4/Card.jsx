import { Folder, RightArrow } from "./SVGComponents";

export default function Card(props) {
  return (
    <div className="flex flex-col gap-3 w-xl overflow-hidden rounded-2xl shadow-2xl">
      <div className="w-full relative">
        <img className="w-full h-96 object-cover" src={props.image} alt="" />
        <span className="flex-col absolute rounded-full w-20 h-20 bottom-2 left-2 flex justify-center p-6 text-center items-center font-semibold text-3xl text-white bg-accent">
          {props.date.split(" ")[0]}
          <p className="text-xl">{props.date.split(" ")[1]}</p>
        </span>
      </div>
      <div className="py-1 flex flex-col gap-2 px-3">
        <span className="text-primary font-light flex gap-2">
          <Folder width={20} height={20} />
          {props.tag}
        </span>
        <h3 className="text-3xl text-primary font-bold">{props.heading}</h3>
        <p className="text-secondary">{props.subHeading}</p>
        <button className="text-primary w-fit py-3 flex items-center gap-2 cursor-pointer px-1">
          Learn More <RightArrow width={20} height={20} />
        </button>
      </div>
    </div>
  );
}
