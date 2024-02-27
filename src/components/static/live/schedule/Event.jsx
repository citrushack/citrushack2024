import Link from "next/link";

const colors = {
  event: {
    bg: "from-citrus-orange text-white",
  },
  workshop: {
    bg: "text-black",
  },
  general: { bg: "from-citrus-orange text-white" },
  food: {
    bg: "from-citrus-blue text-white",
  },
};

const Event = ({ event }) => {
  const color = colors[event.category];

  return (
    <div className="font-archivo w-full">
      <div
        className={`font-black text-sm mr-1 w-full bg-gradient-to-r ${color.bg} py-1 px-2 mb-1`}
      >
        {event.category.toUpperCase()}
      </div>
      <div
        className={`${
          event.start < new Date()
            ? event.end > new Date()
              ? "animate-bounce"
              : "opacity-70"
            : "bg-white/20"
        } py-2 relative w-full grid grid-cols-12 items-center justify-center border-t border-black`}
      >
        <div
          className={`col-span-3 md:col-span-1 font-bold h-full flex flex-col items-center justify-center text-center text-xs md:text-xl`}
        >
          {event.start.getHours() === 12 ? 12 : event.start.getHours() % 12}:
          {event.start.getMinutes() < 10 && "0"}
          {event.start.getMinutes()}
          {event.start.getHours() >= 12 ? "PM " : "AM "}
        </div>
        <div
          className={`col-span-5 md:col-span-2 px-2 items-center justify-center text-center font-advent text-sm md:text-xl flex h-full font-bold`}
        >
          {event.summary}
        </div>
        <div
          className={`hidden md:flex md:flex-col md:gap-2 col-span-7 py-3 px-2 items-center justify-center text-base h-full`}
        >
          {event.description}

          {event.link && <Link text={"Link"} href={event.link} />}
        </div>
        <div className="col-span-4 md:col-span-2 p-2 text-xs md:text-base flex text-center w-full items-center justify-center font-advent font-bold">
          {event.location}
        </div>
      </div>
    </div>
  );
};

export default Event;
