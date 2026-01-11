import Gallery from "./Gallery";
import Navbar from "./Navbar";

export default function Main(props) {
  return (
    <div className="flex-1 flex flex-col px-4 py-2 h-full gap-2">
      <Navbar />
      <div className="flex flex-col justify-between flex-1 overflow-y-auto gap-2">
        <Gallery imgList={props.galleryData} loadingState={props.loadingState} />
        <div className="flex gap-5 justify-center items-center text-white text-2xl font-semibold w-full">
          <button
            style={{ opacity: props.page === 1 ? 0.5 : 1 }}
            className="bg-gray-400 py-3 px-7 rounded-xl hover:bg-gray-600 cursor-pointer"
            onClick={() => props.pageHandler("down")}
          >
            Prev
          </button>
          <h2 className="text-black">{props.page}</h2>
          <button
            className="bg-gray-400 py-3 px-7 rounded-xl hover:bg-gray-600 cursor-pointer"
            onClick={() => props.pageHandler("up")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
