import Accordion from "./Accordion";

import starIcon from "../../assets/images/faqs/icon-star.svg";
import { faqs } from "./data";

const Faq = () => {
  return (
    <div className="relative p-4 pb-10">
      <section className="relative  transition-all mx-auto max-w-xs sm:max-w-2xl rounded-lg flex flex-col gap-4 mt-40 sm:mt-24 p-5">
        <h1 className="flex gap-3 items-center">
          <img src={starIcon} alt="faq-star" className="h-6 w-auto text-purple-400" />
          <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">FAQs</span>
        </h1>

        <div className="flex flex-col gap-4 divide-y">
          {faqs.map((data, idx) => (
            <Accordion
              ques={data.question}
              ans={data.answer}
              isAccOpen={data.isOpen}
              key={idx}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faq;
