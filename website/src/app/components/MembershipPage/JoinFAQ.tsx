"use client";
import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
type QuestionData = {
  question: string;
  answer: string;
};

const data: QuestionData[] = [
  {
    question: "Who can become a member",
    answer: "sigma",
  },
  {
    question: "When to renew",
    answer: "sigma",
  },
  {
    question: "What to do after",
    answer: "sigma",
  },
  {
    question: "How much is membership",
    answer: "sigma",
  },
];

export default function JoinFAQ() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    } 

  return (
    <div id="wrapper" className="gap-0 flex justify-center content-center bg-[#f2f0ef]">
      <div className="w-full max-w-xl px-5">
        {data.map((item, i) => (
          <div id="item" className="bg-[#C9C8C7] mb-5 p-5">
            <div id="title" className="flex flex-row justify-between content-center text-black cursor-pointer" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span className="flex items-center">{selected == i ? <FaMinus /> : <FaPlus />}</span>
            </div>
            <div id="content" className={`text-black overflow-hidden transition-all duration-300 ease-in-out ${selected === i ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
  }`}>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
