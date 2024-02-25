"use client";
import { useEffect, useState } from "react";
import Event from "./Event";
import { api } from "@/utils/api";
import Header from "../../Header";

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const Schedule = () => {
  const [events, setEvents] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const dates = [1, 2, 3, 4, 5, 6, 0];
  useEffect(() => {
    api({
      method: "GET",
      url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
    }).then((response) => {
      let selected = null;
      console.log(response);
      const items = response.items.map((item) => {
        item.start = new Date(item.start.dateTime);
        item.end = new Date(item.end.dateTime);
        item.day = item.start.getDay();
        const [category] = item.description
          .split("\n")[0]
          .split("#")
          .map((item) => item.trim())
          .filter((item) => item !== "");
        item.category = category;
        if (item.description.includes("http")) {
          const startIndex = item.description.indexOf("http");
          item.link = item.description.substring(startIndex);
        }
        item.description = item.description?.split("\n")[1];
        if (!selected && item.start >= new Date())
          selected = item.start.getDay();
        return item;
      });
      if (!selected) selected = items[0].start.getDay();
      setSelectedDay(selected);
      setEvents(items);
    });
  }, []);
  return (
    <div className="w-full items-center justify-center flex flex-col">
      <div className="w-full bg-[url('/svg/schedule/bg.svg')] p-8 items-center justify-center flex pt-20 bg-repeat">
        <Header text="Schedule" color="white" />
      </div>
      <div className="flex w-11/12 items-stretch justify-evenly">
        <div className="bg-[url('/svg/schedule/tire.svg')] w-[5%] bg-repeat-y bg-contain" />
        <div className="flex flex-col items-center justify-center w-10/12 md:w-9/12 my-12">
          <div className="flex font-archivo w-full mb-8">
            {dates
              .filter((date) => events.some((event) => event.day === date))
              .map((date, index) => (
                <div
                  key={index}
                  className={`text-sm md:text-2xl items-center justify-center flex flex-grow cursor-pointer duration-200 ${
                    selectedDay === date &&
                    "font-archivo-black text-citrus-orange"
                  }`}
                  onClick={() => setSelectedDay(date)}
                >
                  {days[date]}
                </div>
              ))}
          </div>
          {events
            .filter((event) => event.day === selectedDay)
            .map((event, index) => (
              <Event event={event} key={index} />
            ))}
        </div>
        <div className="bg-[url('/svg/schedule/tire.svg')] w-[5%] bg-repeat-y bg-contain" />
      </div>
    </div>
  );
};

export default Schedule;
