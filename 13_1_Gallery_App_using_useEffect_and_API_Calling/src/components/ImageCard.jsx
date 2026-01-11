export default function ImageCard(props) {
  return (
    <div className="image-container overflow-hidden rounded-2xl">
      <img src={`${props.imgURL}`} alt="" className="object-cover w-full h-full" />
    </div>
  );
}
