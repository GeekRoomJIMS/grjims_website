import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
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
        className="text-[#ff8200] flex justify-between gap-2 sm:text-lg font-bold cursor-pointer"
      >
        <span>{ques}</span>
        {!isOpen ? (
          <IoIosArrowDown className="h-5 w-auto text-purple-400" />
        ) : (
          <IoIosArrowUp className="h-5 w-auto text-purple-400" />
        )}
      </p>

      {/* answers */}
      {isOpen && <p className="text-sm sm:text-base text-[#d3d3d3]">{ans}</p>}
    </div>
  );
};

export default Accordion;
