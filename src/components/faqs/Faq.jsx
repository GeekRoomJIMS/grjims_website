// import { Accordion } from "react-bootstrap";
import Accordion from "./Accordion";
// import "./faqStyle.css";

import starIcon from "../../assets/images/faqs/icon-star.svg";
import { faqs } from "./data";

const Faq = () => {
  return (
    <div className="relative p-4 pb-10">
      <section className="relative bg-white transition-all mx-auto max-w-xs sm:max-w-2xl rounded-lg flex flex-col gap-4 mt-40 sm:mt-24 p-5">
        <h1 className="flex gap-3 items-center">
          <img src={starIcon} alt="faq-star" className="h-6 w-auto" />
          <span className="font-bold text-4xl text-black">FAQs</span>
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

// function Faq() {
//   return (
//     <>
//       <div className="p-4 pb-10">
//         <section className="">
//           <h1 className="flex gap-3 items-center">
//             <img src={starIcon} alt="faq-star" />
//           </h1>
//         </section>
//       </div>
//       {/* <Accordion className="mt-5 p-3">
//         <h2 className="multicolor-underline" style={{ marginLeft: "8px" }}>
//           Have a question?
//         </h2>{" "}
//         <br />
//         <Accordion.Item
//           eventKey="0"
//           className="item"
//           style={{ backgroundColor: "rgba(0, 0, 0, 0)", color: "#fff" }}
//         >
//           <Accordion.Header
//             style={{
//               fontFamily: "Bahnschrift Light, sans-serif",
//               color: "HighlightText",
//               fontSize: 20,
//               backgroundColor: "rgba(0, 0, 0, 0.2)",
//               borderRadius: 8,
//             }}
//           >
//             How do I become a member?
//           </Accordion.Header>
//           <Accordion.Body
//             style={{
//               fontFamily: "Bahnschrift Light, sans-serif",
//               color: "HighlightText",
//               strokeWidth: "8px",
//               fontSize: 15,
//             }}
//           >
//             helllooo
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item
//           eventKey="1"
//           className="item"
//           style={{ backgroundColor: "rgba(0, 0, 0, 0)", color: "#fff" }}
//         >
//           <Accordion.Header
//             style={{
//               fontFamily: "Bahnschrift Light, sans-serif",
//               color: "HighlightText",
//               fontSize: 20,
//               backgroundColor: "rgba(0, 0, 0, 0.2)",
//               borderRadius: 8,
//             }}
//           >
//             How do I become a member?
//           </Accordion.Header>
//           <Accordion.Body
//             style={{
//               fontFamily: "Bahnschrift Light, sans-serif",
//               color: "HighlightText",
//               strokeWidth: "8px",
//               fontSize: 15,
//             }}
//           >
//             helllooo
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item
//           eventKey="2"
//           className="item"
//           style={{ backgroundColor: "rgba(0, 0, 0, 0)", color: "#fff" }}
//         >
//           <Accordion.Header
//             style={{
//               fontFamily: "Bahnschrift Light, sans-serif",
//               color: "HighlightText",
//               fontSize: 20,
//               backgroundColor: "rgba(0, 0, 0, 0.2)",
//               borderRadius: 8,
//             }}
//           >
//             How do I become a member?
//           </Accordion.Header>
//           <Accordion.Body
//             style={{
//               fontFamily: "Bahnschrift Light, sans-serif",
//               color: "HighlightText",
//               strokeWidth: "8px",
//               fontSize: 15,
//             }}
//           >
//             helllooos
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion> */}
//     </>
//   );
// }

// export default Faq;
