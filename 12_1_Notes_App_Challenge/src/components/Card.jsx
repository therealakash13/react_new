import { Edit, Timer } from "../assets/SVGComponents";

export default function Card(props) {
  const createTime = isoToLocale(props.created);
  const updateTime = isoToLocale(props.updated);
  const preview = truncateString(220, props.content);

  function truncateString(maxLength, string) {
    return string.length > maxLength
      ? string.slice(0, maxLength) + "..."
      : string;
  }

  function isoToLocale(isoString) {
    return new Date(isoString).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      weekday: "long",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div className="card bg-accent w-xs h-64 px-5 py-3 flex flex-col justify-between rounded-2xl ">
      <div className="border-b pb-1.5 border-border">
        <h3 className="text-md pb-0.5 font-light">{createTime}</h3>
        <div className=" flex justify-between items-center">
          <h2 className="text-2xl font-medium truncate">{props.title}</h2>
          <Edit className="card-icon cursor-pointer" />
        </div>
      </div>
      <p className="text-sm font-inter text-primary opacity-80 overflow-y-hidden">
        {preview}
      </p>
      <h3 className="flex items-center gap-1 font-light">
        <Timer className="card-icon" /> {updateTime}
      </h3>
    </div>
  );
}
