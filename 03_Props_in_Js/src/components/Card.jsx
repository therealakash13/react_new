export default function Card(props) {
  return (
    <>
      <div className="card">
        <img
          src={props.imgURL}
          alt=""
        />
        <h1>{props.name}</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
          laborum!
        </p>
        <button>View Profile</button>
      </div>
    </>
  );
}
