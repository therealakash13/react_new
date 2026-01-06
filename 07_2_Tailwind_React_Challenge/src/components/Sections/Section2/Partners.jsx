import { Logo1, Logo2, Logo3, Logo4 } from "./SVGComponents";

export default function Partners() {
  return (
    <div className=" flex gap-28 my-20">
      <div className="flex flex-col  gap-5">
        <h2 className="text-primary text-2xl">Our Partners</h2>
        <p className="w-80 text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          quas nemo earum illo optio obcaecati beatae hic nesciunt rerum neque
          dolore, officiis sint.
        </p>
      </div>
      <div className="flex items-center gap-10 mx-4">
        <Logo1 height='60px' />
        <Logo2 height='60px' />
        <Logo3 height='60px' />
        <Logo4 height='60px' />
      </div>
    </div>
  );
}
