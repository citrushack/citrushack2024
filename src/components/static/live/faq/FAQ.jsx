"use client";
import { QUESTIONS } from "@/data/static/FAQ";
import Item from "./Item";
import Header from "../../Header";
import { useState } from "react";

const FAQ = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="flex justify-center items-center flex-col w-10/12 md:w-1/2">
      <Header text="FAQ" color="black" />
      <div className="w-full bg-citrus-black mt-4 p-5 rounded-3xl">
        {QUESTIONS.map(({ question, answer }, index) => (
          <Item
            question={question}
            answer={answer}
            key={index}
            index={index}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
