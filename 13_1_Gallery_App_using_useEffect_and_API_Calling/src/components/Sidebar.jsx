import { Aperture, Download, House, Image, Images, Star } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="h-full w-1/5 bg-gray-400 text-white flex flex-col items-start justify-center px-7">
      <ul className="flex flex-col gap-4 font-semibold text-xl w-full">
        <li><House /> Home</li>
        <li className="active"><Images /> Gallery</li>
        <li><Download /> Downloads</li>
        <li><Image /> Pictures</li>
        <li><Aperture /> Camera</li>
        <li><Star /> Favorites</li>
      </ul>
    </div>
  );
}
