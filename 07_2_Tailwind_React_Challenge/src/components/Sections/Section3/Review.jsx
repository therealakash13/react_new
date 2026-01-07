import { Quote, Star } from "./SVGComponents";

export default function Review() {
  return (
    <div className="w-full flex rounded-2xl overflow-hidden relative">
      <div className="w-1/2">
        <img
          className="w-full object-cover "
          src="https://images.unsplash.com/photo-1510849911856-cdc9335e5597?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div className="px-30 py-16 bg-primary text-white flex flex-col gap-10 justify-center w-1/2">
        <span className="flex justify-items-start gap-1">
          <Star width={"20px"} height={"20px"} />
          <Star width={"20px"} height={"20px"} />
          <Star width={"20px"} height={"20px"} />
          <Star width={"20px"} height={"20px"} />
          <Star width={"20px"} height={"20px"} />
        </span>
        <p className="w-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
          illum quaerat fugiat amet natus corporis nulla molestias ut neque
          repellendus, non, minus repellat delectus aliquid. Eum ullam
          laboriosam sequi illo!
        </p>

        <div className="flex gap-6 items-center">
          <img
            className="w-20 h-20 object-cover rounded-full"
            src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <h3 className="text-xl font-semibold">Roy Ade</h3>
            <p className="text-secondary">Client</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-56 right-30">
        <Quote width={60} height={60} fill={'#fff'} />
      </div>
    </div>
  );
}
