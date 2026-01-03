import { ArrowRight } from "lucide-react";
export default function Card(props) {
  return (
    <div className="relative h-full shrink-0 w-80 rounded-3xl overflow-hidden">
      <img className="w-full h-full object-cover" src={props.img} alt="" />
      <div className="absolute w-full h-full top-0 left-0 p-8 flex flex-col justify-between">
        <h2 className="bg-white rounded-full w-12 h-12 text-xl font-semibold flex justify-center items-center">
          {props.id + 1}
        </h2>
        <div className="flex flex-col gap-10">
          <p className="text-slate-50 mb-10 leading-relaxed font-medium text-shadow-xs text-shadow-gray-600">
            {props.intro}
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-400 text-blue-50 px-6 p-2 text-2xl font-medium rounded-2xl">
              {props.tag}
            </button>
            <button className="bg-blue-400 w-14 h-14 rounded-full flex justify-center items-center">
              <ArrowRight color="#eff6ff" strokeWidth={4} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
