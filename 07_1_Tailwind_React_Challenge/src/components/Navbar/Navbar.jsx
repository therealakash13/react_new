export default function Navbar() {
  return (
    <div className="h-[10%] flex items-center min-w-11/12 mx-auto justify-between font-Lexend py-8">
      <div className="flex">
        <h1 className="text-2xl pr-12">Spaxury</h1>
        <ul className="flex gap-12 items-center pl-12 text-gray-300">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Room</li>
            <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
      <button className="px-8 py-2 rounded-full border border-gray-100 cursor-pointer">Book a stay</button>
    </div>
  );
}
