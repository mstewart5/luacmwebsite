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
    question: "Who can become a member?",
    answer: "Any LU student can become a member. We especially recommend joining if you are a Computer Science major!",
  },
  {
    question: "What are the benefits of becoming a member?",
    answer: "-Exclusive networking and learning opportunites\n\n-We pay for your entrance to programming contests like ICPC\n\n-Discounts at our events"
  },
  {
    question: "When do I renew my membership?",
    answer: "Membership renewal is only needed one year after your purchase date. If you're unsure, asking one of the officers will clear it up!",
  },
  {
    question: "What to do after buying membership?",
    answer: "Join our discord, get familiar, interact with peers/alumni, go to events, take advantage of your member benefits.",
  },
  {
    question: "How much is membership?",
    answer: "$10 annually.",
  },
  {
    question: "What kind of events does ACM LU offer?",
    answer: "We offer several kinds of events. Some of our past events have been:\n\n-Networking events with alumni\n\n-Social events,"
    + "like our game nights\n\n-Educational events, such as our Coding Hangouts\n\n-Check out our events page for more info!",
  },
  {
    question: "How can I connect with other members?",
    answer: "Our Discord server is the best way to get in touch with other members and our officers.",
  },
  {
    question: "Are there leadership or volunteering opportunities within ACM LU?",
    answer: "The best way to get into a leadership position within ACM LU is to nominate yourself for an officer positions when election season rolls around!"
    + " This is usually sometime towards the end of the Spring semester. There are also many opportunities to volunteer at our events."
  },
  {
    question: "How can I contribute ideas or feedback to ACM LU?",
    answer: "We love to hear from our members in the #community-feedback channel on our Discord server. Sending an email works just as well, too."
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
    <div id="wrapper" className="flex justify-center content-center">
      <div className="w-full max-w-xl px-5">
        {data.map((item, i) => (
          <div id="item" className="bg-[#C9C8C7] mt-5 mb-5 p-5">
            <div id="title" className="flex flex-row justify-between content-center text-black cursor-pointer" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span className="flex items-center">{selected == i ? <FaMinus /> : <FaPlus />}</span>
            </div>
            <div id="content" className={`text-black overflow-hidden transition-all duration-300 ease-in-out whitespace-pre-line  ${selected === i ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
  }`}>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
