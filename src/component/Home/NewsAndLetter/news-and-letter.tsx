import { useState } from "react";
import { CheckIcon } from "../../../assets/icons";
import { Section } from "../../Reusables/Container";
import { letter_frequency, news_letter } from "./lists";
import { Button } from "../../Reusables/Button";

const NewsAndLetter = () => {
  const [selectedFrequency, setSelectedFrequency] = useState("");

  const handleChange = (value: string) => {
    setSelectedFrequency(value);
  };
  const isMobile = window.innerWidth < 768;
  const inputClass =
    "lg:py-[14px] py-[8px] px-[16px] lg:overflow-x-auto overflow-x-hidden w-full placeholder:font-light placeholder:text-sm text-sm text-white bg-[#FBFBFB4D] rounded-[5px] outline-none";
  return (
    <Section className="overflow-hidden lg:mt-40 mb-20 mt-10 lg:columns-2 gap-0 grid-rows-2  place-items-center">
      {/* left content display */}
      <div
        // data-aos="fade-up"
        data-aos-duration="1000"
        data-aos={isMobile ? "fade-left" : "fade-up"}
        className="bg-gradient-to-r from-[#020E2A] to-[#9D9D9D] lg:p-10 p-5 lg:px-14 px-8 w-full lg:h-[497px] h-full"
      >
        <h1 className="lg:text-5xl text-3xl text-white font-medium">
          Newsletter
        </h1>
        <p className="my-6 text-white lg:text-base text-xs">
          Everything update about IT Holdings in your inbox
        </p>
        <div className="grid grid-rows-1 gap-8">
          {news_letter.map((chi, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[0.1fr_1fr] items-center gap-2 w-full"
            >
              <img src={CheckIcon} alt="check icon" />
              <p className="w-full text-white lg:text-base text-xs">{chi}</p>
            </div>
          ))}
        </div>
      </div>

      {/* right  content display*/}
      <div
        // data-aos="fade-down"
        data-aos-duration="1000"
        data-aos={isMobile ? "fade-right" : "fade-down"}
        className="w-full h-full"
      >
        <form className="bg-[#020E2A] grid grid-cols-2 w-full lg:h-[497px] h-full">
          <div className="border-r border-[#FBFBFB4D]">
            <h5 className="text-[#FBFBFB]  font-medium lg:text-lg text-xs border-b border-[#FBFBFB4D]  lg:p-9 p-5 pb-4">
              Letter Frequency
            </h5>
            <div className="">
              {letter_frequency.map((chi, idx) => {
                const { label, value } = chi;
                return (
                  <div
                    key={idx}
                    className="grid grid-cols-[0.08fr_1fr] items-center gap-2 w-full border-b border-[#FBFBFB4D] lg:p-9 p-8 px-3 lg:px-9"
                  >
                    <input
                      type="radio"
                      id={value}
                      name="letter_frequency"
                      className="bg-transparent"
                      checked={selectedFrequency === value}
                      onChange={() => handleChange(value)}
                    />
                    <label
                      htmlFor={value}
                      className="text-white font-light lg:text-base text-xs"
                    >
                      {label}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="py-9 lg:px-7 px-3 grid grid-rows-[.3fr_.6fr_1fr] gap-10 ">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="full_name"
                className="text-white lg:text-base text-xs"
              >
                Full Name
              </label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                className={inputClass}
                placeholder="First name"
                onChange={() => {}}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="full_name"
                className="text-white lg:text-base text-xs"
              >
                Email Address <span className="text-[#D10505]">*</span>
              </label>
              <input
                type="text"
                name="email_address"
                id="email_address"
                className={inputClass}
                placeholder="Your email"
                onChange={() => {}}
              />
            </div>

            <Button
              toPath={"#"}
              className="text-white w-full hover:shadow-custom-white mt-5 border-white hover:bg-white hover:!text-[#002887]"
              spanClass="bg-white group-hover:text-[#002887]"
              spanClassTwo="text-white"
              btnText="Subscribe Now"
            />
          </div>
        </form>
      </div>
    </Section>
  );
};

export default NewsAndLetter;
