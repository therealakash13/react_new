import { MapPin } from "lucide-react";

export default function RightSection() {
  return (
    <div className="w-1/2 flex flex-col justify-between">
      <div className="flex justify-end">
        <button className="flex px-4 py-3 w-fit gap-3 rounded-full cursor-pointer backdrop-filter backdrop-blur-sm">
          <MapPin />
          <span>Shimla, India</span>
        </button>
      </div>

      <div className="flex justify-end">
        <div className="flex w-96 p-2 rounded-2xl backdrop-filter backdrop-blur-sm">
          <img
            className="w-30 h-30 rounded-2xl object-cover"
            src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="px-4 flex flex-col justify-between">
            <p className="">
              A Sanctuary like bno other, more than a spa - it's an experience
              I'll return to.
            </p>
            <span className="text-sm text-gray-300 flex justify-end">
              {" "}
              - Sophia L., Guest
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
