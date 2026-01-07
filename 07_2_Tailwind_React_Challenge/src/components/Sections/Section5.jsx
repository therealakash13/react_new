export default function Section5() {
  return (
    <div className="w-full py-24 text-white bg-accent flex my-8">
      <div className="w-1/2 flex flex-col gap-6 px-8">
        <h2 className="text-5xl font-semibold">Our Newsletters</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
          veniam eligendi officiis voluptate incidunt sapiente sit deserunt
          minus, optio harum qui facere fugiat illo rem aspernatur.
          Exercitationem natus esse voluptas.
        </p>
      </div>
      <div className="w-1/2 flex gap-8 items-center justify-center">
        <input className="outline-white border-2 px-3 py-4 rounded-2xl" type="text" placeholder="Email" />
        <button className="bg-primary w-fit px-6 py-4 rounded-2xl cursor-pointer">Submit</button>
      </div>
    </div>
  );
}
