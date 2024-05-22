import plusIcon from "../../assets/images/faqs/icon-plus.svg";
import minusIcon from "../../assets/images/faqs/icon-minus.svg";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Accordion = ({ isAccOpen, ques, ans }) => {
  const [animationParent] = useAutoAnimate();
  const [isOpen, setIsOpen] = useState(isAccOpen || false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div ref={animationParent} className="text-black flex flex-col gap-4 py-4">
      {/* questions */}
      <p
        onClick={toggleOpen}
        className="text-black flex justify-between gap-2 sm:text-lg font-semibold cursor-pointer"
      >
        <span>{ques}</span>
        {!isOpen ? (
          <img src={plusIcon} alt="plus icon" className="h-6 w-auto" />
        ) : (
          <img src={minusIcon} alt="minus icon" className="h-6 w-auto" />
        )}
      </p>

      {/* answers */}
      {isOpen && <p className="text-sm sm:text-base text-gray-600">{ans}</p>}
    </div>
  );
};

export default Accordion;
