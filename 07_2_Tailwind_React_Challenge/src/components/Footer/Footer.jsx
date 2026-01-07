import { Call, Facebook, Twitter, Youtube } from "./SVGContent";

export default function Footer() {
  return (
    <div className=" text-white px-6 py-10  bg-[url('https://images.unsplash.com/photo-1617897711385-df9c86b7dfe3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover">
      <div className="w-full flex mb-4">
        <div className="w-2/5 flex flex-col gap-3">
          <p className="py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            libero eius vel, tempore numquam est voluptas reprehenderit
            voluptate sequi adipisci enim sit cumque inventore quo ab deserunt
            eaque sed nihil!
          </p>
          <div className="flex gap-4">
            <Facebook
              width={40}
              height={40}
              fill={"#112b42"}
              className="cursor-pointer"
            />
            <Twitter
              width={40}
              height={40}
              fill={"#112b42"}
              className="cursor-pointer"
            />
            <Youtube
              width={40}
              height={40}
              fill={"#112b42"}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="w-2/6 flex flex-col gap-3 px-10">
          <h3 className="text-3xl font-bold text-secondary">Navigation</h3>
          <ul className=" flex flex-col gap-2.5">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Pages</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Services</li>
          </ul>
        </div>
        <div className="w-2/6 flex flex-col gap-3 px-10">
          <h3 className="text-3xl font-bold text-secondary">Quick Links</h3>
          <ul className=" flex flex-col gap-2.5">
            <li className="cursor-pointer">Contact Us</li>
            <li className="cursor-pointer">FAQs</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Gallery</li>
            <li className="cursor-pointer">Pricing</li>
          </ul>
        </div>
        <div className="w-2/6 flex flex-col gap-3 px-10">
          <h3 className="text-3xl font-bold text-secondary">Work Hours</h3>
          <ul className=" flex flex-col gap-2.5">
            <li>7 A.M. - 5 P.M, Mon - Sat</li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
              labore.
            </li>
            <button className="w-fit py-3 px-6 flex gap-3 rounded-2xl bg-primary">
              <Call fill={"#fff"} width={20} height={20} />
              Call Us
            </button>
          </ul>
        </div>
      </div>

      <div className="text-center w-full border-t-2 border-white flex justify-center items-center pt-6">
        <span>@copyright 2025</span>
      </div>
    </div>
  );
}
