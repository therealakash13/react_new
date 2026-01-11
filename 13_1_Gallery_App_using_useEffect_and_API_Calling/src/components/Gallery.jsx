import ImageCard from "./ImageCard";

export default function Gallery(props) {
  const list = props.imgList;

  return (
    <div className="gallery-container flex-1 py-3 overflow-y-auto">
      <h1 className="text-4xl font-medium">Gallery</h1>
      <div className="mt-4 flex flex-wrap gap-3">
        {props.loadingState ? (
          <h2 className="loader text-2xl font-medium text-gray-400">Loading...</h2>
        ) : (
          list.map((image, idx) => (
            <ImageCard imgURL={image.download_url} key={idx} />
          ))
        )}
      </div>
    </div>
  );
}
