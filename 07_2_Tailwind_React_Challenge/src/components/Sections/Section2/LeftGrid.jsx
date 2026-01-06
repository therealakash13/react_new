export default function LeftGrid() {
  return (
    <div className="col-span-2 flex">
      <div className="image-container">
        <img
          src="https://plus.unsplash.com/premium_photo-1675016457613-2291390d1bf6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="py-8 px-6 bg-secondary rounded-2xl text-white scale-110">
        <h2 className="text-5xl">About Us</h2>
        <p className="w-md mt-3 font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          quae placeat minus libero. Atque mollitia sit sint! Aliquam tempore
          iusto omnis sequi modi doloribus, neque ut repudiandae provident
          ratione excepturi illum, eos harum animi voluptates sint ullam! A
          perferendis aliquid quaerat illo veritatis, corporis deleniti error
          nesciunt vel! Animi, culpa.
        </p>
        <p className="w-md my-6 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eum.
        </p>

        <button className="bg-primary text-white py-4 px-10 rounded-2xl cursor-pointer">Learn More</button>
      </div>
    </div>
  );
}
