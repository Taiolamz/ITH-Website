import { BriefIcon } from "../../../assets/icons";
import { Section } from "../../Reusables/Container";
import { open_positions } from "./lists";

const OpenPositions = () => {
  return (
    <Section className="mt-48 lg:grid mb-40 lg:place-items-center">
      <h1
        data-aos="fade-down"
        data-aos-duration="1000"
        className="text-[#121212] lg:text-[40px] text-3xl font-semibold"
      >
        Open Positions
      </h1>
      <div className="lg:grid lg:grid-cols-2 lg:space-y-0 space-y-5 rows-1 w-full lg:gap-5 gap-x-7 mt-10">
        {open_positions.map((chi, idx) => {
          const {
            job_title,
            amount,
            duration,
            content,
            type,
            job_type,
            location,
          } = chi;
          const delay = idx * 400;
          return (
            <div
              key={idx}
              className="bg-white p-5 flex flex-col gap-3 rounded-[5px] shadow-lg"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-delay={delay}
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <img src={BriefIcon} alt="brief_case" />
                  <p className="text-[#121212] font-semibold lg:text-2xl text-base">
                    {job_title}
                  </p>
                </div>
                <p className="font-medium lg:text-base text-xs">
                  {amount}/<span className="font-extralight">{duration}</span>
                </p>
              </div>
              <p className="lg:w-[400px] lg:max-w-full lg:text-base text-xs text-[#212121] font-light mt-3">
                {content}
              </p>
              <div className="flex justify-between gap-2  items-center mt-4">
                <div className="flex gap-3 items-center">
                  <p className="bg-[#F5F5F5]  px-[13px] py-[3px] rounded-[5px] text-center lg:text-sm text-xs text-[#212121]">
                    {type}
                  </p>
                  <p className="bg-[#F5F5F5]  px-[13px] py-[3px] rounded-[5px] text-center lg:text-sm text-xs text-[#212121]">
                    {job_type}
                  </p>
                  <p className="bg-[#F5F5F5]  px-[13px] py-[3px] rounded-[5px] text-center lg:text-sm text-xs text-[#212121]">
                    {location}
                  </p>
                </div>
                <button className="font-medium hover:-translate-y-1 duration-300 transition-all  text-white lg:text-sm text-xs bg-[#002887] lg:px-[13px] lg:py-[6px] p-2 px-3 rounded-[5px] ">
                  Apply Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default OpenPositions;
