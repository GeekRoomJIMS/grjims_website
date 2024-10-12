import React, { useState, useRef } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import contactImg from "../assets/images/contactimg/contact.png";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
// import backgroundImagelp from "../assets/images/background/main-bg.png";

const Contact = () => {
  const form = useRef();
  const validateName = (name) => {
    const pattern = /^[a-zA-Z]+$/;
    return pattern.test(name) && name.length >= 3;
  };
  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  //focus logic for label transition
  const [firstNameFocused, setFirstNameFocused] = useState(false);
  const [lastNameFocused, setLastNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  const handleFirstNameFocus = () => {
    setFirstNameFocused(true);
  };

  const handleFirstNameBlur = () => {
    setFirstNameFocused(false);
  };

  const handleLastNameFocus = () => {
    setLastNameFocused(true);
  };

  const handleLastNameBlur = () => {
    setLastNameFocused(false);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setEmailFocused(false);
  };

  const handleMessageFocus = () => {
    setMessageFocused(true);
  };

  const handleMessageBlur = () => {
    setMessageFocused(false);
  };

  // values
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  // validation errors
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstNameValue(value);
    if (!validateName(value) && firstNameFocused) {
      setFirstNameError(
        "First name must contain only alphabets and have a length greater than 3"
      );
    } else {
      setFirstNameError("");
    }
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastNameValue(value);
    if (!validateName(value) && lastNameFocused) {
      setLastNameError(
        `Last name must contain only alphabets and  have a length greater than 3`
      );
    } else {
      setLastNameError("");
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmailValue(newEmail);
    if (!validateEmail(newEmail) && emailFocused) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleMessageChange = (e) => {
    setMessageValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !firstNameValue ||
      !lastNameValue ||
      !emailValue ||
      firstNameError ||
      lastNameError ||
      emailError
    ) {
      if (!firstNameValue) {
        firstNameRef.current.focus();
      } else if (!lastNameValue) {
        lastNameRef.current.focus();
      } else if (!emailValue) {
        emailRef.current.focus();
      }
      return;
    }
    const serviceId = "service_o0sctws";
    const templateId = "template_yraydrt";
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: "DPvwp4bpAe5plm_xz",
      })
      .then(
        () => {
          toast.success("Form submitted successfully!", {
            duration: 2000,
          });
          setFirstNameValue("");
          setLastNameValue("");
          setEmailValue("");
          setMessageValue("");
        },
        (error) => {
          console.log("FAILED...");
        }
      );
  };

  // focusing empty fields after submission
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);

  return (
    <>
      <div
        id="contact"
        className=" bg-cover bg-center overflow-hidden p-4"
        // style={{ backgroundImage: `url(${backgroundImagelp})` }}
      >
        <div
          id="container"
          className="h-[100vh] min-h-[44rem] grid md:grid-cols-2 "
        >
          <div
            id="left"
            className="font-semibold max-w-[80rem] m-auto w-full md:px-[1rem] lg:px-[2rem] py-[1.5rem] "
          >
            <div className="max-w-[32rem]">
              <div className="mb-[1.2rem]">
                <h1 className="text-[1.8rem] md:text-[2rem] lg:text-[2.4rem] text-[#FF1493] whitespace-nowrap leading-tight mb-0 text-left lg:pl-2">
                  Let's work together
                </h1>

                <p className="text-[#636972] text-[0.90rem] md:text-base leading-4 mt-2">
                  or reach us via :
                  <a className="ml-2 text-blue-500 duration-300 hover:underline transition-all hover:text-blue-700 cursor-pointer">
                    geekroomjimsrohini@gmail.com
                  </a>
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                ref={form}
                className={` grid grid-cols-2 gap-x-8 ${
                  firstNameError || lastNameError || emailError
                    ? "gap-y-9 md:gap-y-5"
                    : "gap-y-4"
                } mt-[2.5rem]`}
              >
                <div
                  id="input-wrap"
                  className={`relative col-span-2 md:col-span-1 ${
                    firstNameFocused
                      ? " border-2 border-blue-400 shadow-md rounded-xl"
                      : ""
                  }`}
                >
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    className={` shadow-md contact-input text-black border-2 border-transparent border-solid w-full bg-[#3d61af1f]  md:text-base rounded-[0.55rem]  outline-none ${
                      firstNameFocused ? "bg-white" : "text-white"
                    }`}
                    style={{
                      padding: firstNameFocused
                        ? "calc(1.5rem - 2px) calc(1.35rem - 2px) calc(10px - 2px)"
                        : "1.5rem 1.35rem 10px",
                    }}
                    autoComplete="off"
                    ref={firstNameRef}
                    onChange={handleFirstNameChange}
                    value={firstNameValue}
                    onFocus={handleFirstNameFocus}
                    onBlur={handleFirstNameBlur}
                  />
                  <label
                    htmlFor="firstname"
                    className={`absolute ${
                      firstNameFocused || firstNameValue
                        ? "-translate-y-0 top-1 text-sm text-blue-400"
                        : "-translate-y-1/2 top-[50%] text-gray-50"
                    } left-[1.475rem] transition-all duration-200`}
                  >
                    First Name
                  </label>
                  <FaRegUser
                    className={`md:h-5 md:w-5 top-[50%] right-[1.475rem] -translate-y-1/2 absolute ${
                      firstNameFocused ? "text-blue-400" : "text-gray-50"
                    }`}
                  />

                  {firstNameError && (
                    <span className="text-red-400 text-[10px]  absolute top-[3%] md:-top-[170%] my-5 py-3 md:py-0 left-0">
                      {firstNameError}
                    </span>
                  )}
                </div>
                <div
                  id="input-wrap"
                  className={`relative col-span-2 md:col-span-1 ${
                    lastNameFocused
                      ? " border-2 border-blue-400 shadow-md rounded-xl"
                      : ""
                  }`}
                >
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    autoComplete="off"
                    className={` shadow-md contact-input text-black w-full border-2 border-transparent border-solid bg-[#3d61af2c] rounded-[0.55rem] outline-none text-base ${
                      lastNameFocused ? "bg-white" : " text-white"
                    }`}
                    style={{
                      padding: lastNameFocused
                        ? "calc(1.5rem - 2px) calc(1.35rem - 2px) calc(10px - 2px)"
                        : "1.5rem 1.35rem 10px",
                    }}
                    ref={lastNameRef}
                    onChange={handleLastNameChange}
                    value={lastNameValue}
                    onFocus={handleLastNameFocus}
                    onBlur={handleLastNameBlur}
                  />
                  <label
                    htmlFor="lastname"
                    className={`absolute ${
                      lastNameFocused || lastNameValue
                        ? "-translate-y-0 top-1 text-sm text-blue-400"
                        : "-translate-y-1/2 top-[50%] text-gray-50"
                    } left-[1.475rem] transition-all duration-200`}
                  >
                    Last Name
                  </label>
                  <FaRegUser
                    className={`h-5 w-5 top-[50%] right-[1.475rem] -translate-y-1/2 absolute ${
                      lastNameFocused ? "text-blue-400" : "text-gray-50"
                    }`}
                  />
                  {lastNameError && (
                    <span className="text-red-400 text-[10px]  absolute top-[3%] md:-top-[170%] my-5 py-3 md:py-0 left-0">
                      {lastNameError}
                    </span>
                  )}
                </div>
                <div
                  id="input-wrap"
                  className={`relative col-span-2 w-full ${
                    emailFocused
                      ? " border-2 border-blue-400 shadow-md rounded-xl"
                      : ""
                  }`}
                >
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className={` shadow-md text-black contact-input border-2 border-transparent border-solid w-full bg-[#3d61af1f] rounded-[0.55rem]  outline-none text-base ${
                      emailFocused ? "bg-white" : "text-white"
                    }`}
                    autoComplete="off"
                    style={{
                      padding: emailFocused
                        ? "calc(1.5rem - 2px) calc(1.35rem - 2px) calc(10px - 2px)"
                        : "1.5rem 1.35rem 10px",
                    }}
                    ref={emailRef}
                    onChange={handleEmailChange}
                    value={emailValue}
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}
                  />
                  <label
                    htmlFor="email"
                    className={`absolute ${
                      emailFocused || emailValue
                        ? "-translate-y-0 top-1 text-sm text-blue-400"
                        : "-translate-y-1/2 top-[50%] text-gray-50"
                    } left-[1.475rem] transition-all duration-200`}
                  >
                    Email
                  </label>
                  <MdOutlineMail
                    className={`h-5 w-5 top-[50%] right-[1.475rem] -translate-y-1/2 absolute ${
                      emailFocused ? "text-blue-400" : "text-gray-50"
                    }`}
                  />
                  {emailError && (
                    <span className="text-red-400 text-[10px]  absolute top-[2%] md:-top-[15%] my-5 py-4 md:py-0 left-0">
                      {emailError}
                    </span>
                  )}
                </div>
                <div
                  id="input-wrap textarea"
                  className={`relative col-span-2  ${
                    messageFocused
                      ? " border-2 border-blue-400  rounded-[0.52rem]"
                      : ""
                  }`}
                >
                  <textarea
                    name="message"
                    autoComplete="off"
                    className={` contact-input shadow-md  text-black resize-none  w-full min-h-[150px] h-full  rounded-[0.53rem] outline-none ${
                      messageFocused
                        ? "bg-white "
                        : "bg-[#3d61af1f] text-white "
                    } `}
                    style={{
                      padding: messageFocused
                        ? "calc(1.5rem - 2px) calc(1.35rem - 2px) calc(10px - 2px)"
                        : "1.5rem 1.35rem 10px",
                    }}
                    onChange={handleMessageChange}
                    value={messageValue}
                    onFocus={handleMessageFocus}
                    onBlur={handleMessageBlur}
                  ></textarea>
                  <label
                    htmlFor="email"
                    className={`absolute ${
                      messageFocused || messageValue
                        ? "-translate-y-0 top-[0.45rem] text-sm text-blue-400"
                        : "-translate-y-1/2 top-[24%] text-gray-50 "
                    }  left-[1.475rem] transition-all duration-200`}
                  >
                    Message
                  </label>
                  <MdOutlineMail
                    className={` absolute ${
                      messageFocused || messageValue
                        ? "text-blue-400 top-[0.45rem]"
                        : "top-[1.5rem] text-gray-50"
                    } h-5 w-5  right-[1.475rem]`}
                  />
                </div>
                <div className=" col-span-2 grid md:flex md:justify-center">
                  <input
                    type="submit"
                    value="Send"
                    className=" md:w-[20rem] outline-none py-[0.75rem] px-[2rem]  cursor-pointer hover:bg-blue-600  inline-block   bg-blue-400 text-white rounded-[40px]"
                  />
                </div>
                <Toaster />
              </form>
            </div>
          </div>
          <div id="right" className="hidden md:block place-content-center ">
            <div className="px-[2rem] py-[1.5rem] mt-[3rem]">
              <img
                src={contactImg}
                alt="contact us"
                className="transform -scale-x-100 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
