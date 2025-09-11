import Image from "next/image";
import React from "react";
import dot from "../../../public/image/icon/dot.png";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take?",
      answer:
        "5 days from start to finish - design, development, and deployment included.",
    },
    {
      question: "Do you provide revisions?",
      answer:
        "Yes, we offer up to two rounds of revisions within the 5-day timeframe.",
    },
    {
      question: "What's the payment process?",
      answer:
        "50% deposit upfront, with the remaining balance due upon project completion.",
    },
    {
      question: "Can you deploy on my hosting?",
      answer:
        "Absolutely! Deployment is included in every package, on your hosting or ours.",
    },
    {
      question: "Why are your prices so affordable compared to agencies?",
      answer:
        "We leverage efficient processes and a streamlined workflow to keep costs low, without sacrificing quality.",
    },
  ];
  return (
    <div className="max-w-[960px] mx-auto py-10 md:py-20">
      <h2 className="text-white text-2xl md:text-4xl font-bold text-center">
        Got Questions<span className="text-foreground">?</span> We’ve Got The
        Answers
      </h2>
      <div className="space-y-4 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#182420] rounded-xl p-5 m-5">
            <div className="space-y-3">
              <Image src={dot} alt="dot" width={12} height={12} />
              <h3 className="text-white font-bold">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
