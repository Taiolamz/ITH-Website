// import { useRef, useState } from "react";
import { Section } from "../../Reusables/Container";
import { videos } from "./lists";
import { isMobile } from "../../Helpers/helpers";
import { IoPlayOutline } from "react-icons/io5";

const Videos = () => {
  // const videoRef = useRef(null); // Reference to the video element
  // const [isPlaying, setIsPlaying] = useState(false); // Manage play/pause state

  // const handlePlayPause = () => {
  //   const video = videoRef.current;
  //   if (!isPlaying) {
  //     (video as any).play(); // Play the video
  //   } else {
  //     (video as any).pause(); // Pause the video
  //   }
  //   setIsPlaying(!isPlaying); // Toggle the state
  // };
  return (
    <Section className="flex flex-col justify-center mb-20 lg:overflow-x-auto overflow-x-hidden">
      <p
        className="py-10 font-semibold text-[28px] text-[#5A5B5B]"
        data-aos="fade-left"
        data-aos-duration="700"
      >
        Videos
      </p>

      <div className="lg:grid lg:grid-cols-2 grid-rows-1 space-y-4 lg:space-y-0 lg:gap-2">
        <div data-aos="fade-right" data-aos-duration="700" className="">
          {videos.slice(0, 1).map((chi, idx) => {
            const { title, sub_title, date, src, type } = chi;
            return (
              <div
                className="h-full grid group place-items-center relative"
                key={idx}
              >
                <video
                  className="h-full w-full bg-black  rounded-[5px]"
                  controls={false}
                  // poster={image}
                  autoPlay={false}
                >
                  <source src={src} type={type} />
                  Your browser does not support the video tag.
                </video>

                <div
                  className={`${
                    idx == 0 ? "h-full " : ""
                  } absolute rounded-[5px] h-full  inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300`}
                ></div>

                <div className="border-white top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute m-auto -mb-14 lg:mb-0 cursor-pointer  border-2 grid place-items-center transition-all duration-300 rounded-full group-hover:w-[45px] group-hover:h-[45px] lg:group-hover:w-[70px] lg:group-hover:h-[70px] group-hover:bg-white lg:w-[50px] lg:h-[50px] w-[25px] h-[25px]">
                  <IoPlayOutline
                    className="group-hover:text-[#212121] text-white lg:group-hover:text-3xl group-hover:text-base lg:text-base text-xs transition-all duration-300"
                    // fontWeight={500}
                  />
                </div>
                <div className="absolute top-1/2 lg:p-0 p-2 grid  space-y-16 text-white">
                  <div className="space-y-5">
                    <h1 className="lg:text-2xl !lg:mt-10 text-sm">{title}</h1>
                    <h5 className="lg:text-sm text-xs lg:w-[315px] lg:max-w-full w-full">
                      {sub_title}
                    </h5>
                    <p className="text-sm md:text-base lg:text-xs text-[10px]">
                      {date}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          data-aos={isMobile ? "fade-right" : "fade-left"}
          data-aos-duration="700"
          className="lg:grid lg:grid-rows-2 rows-1 space-y-4 lg:space-y-0  gap-2"
        >
          {videos.slice(1).map((chi, idx) => {
            const { title, sub_title, date, src, type } = chi;
            return (
              <div
                className="h-full grid group  place-items-center relative"
                key={idx}
              >
                <video
                  className="h-full w-full bg-black bg-opacity-50 rounded-[5px]"
                  controls={false}
                  // poster={image}
                  autoPlay={false}
                >
                  <source src={src} type={type} />
                  Your browser does not support the video tag.
                </video>

                <div
                  className={`${
                    idx == 0 ? "h-full " : ""
                  } absolute rounded-[5px] h-full  inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300`}
                ></div>

                <div className="border-white top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute m-auto -mb-14 lg:mb-0 cursor-pointer  border-2 grid place-items-center transition-all duration-300 rounded-full group-hover:w-[45px] group-hover:h-[45px] lg:group-hover:w-[70px] lg:group-hover:h-[70px] group-hover:bg-white lg:w-[50px] lg:h-[50px] w-[25px] h-[25px]">
                  <IoPlayOutline
                    className="group-hover:text-[#212121] text-white lg:group-hover:text-3xl group-hover:text-base lg:text-base text-xs transition-all duration-300"
                    // fontWeight={500}
                  />
                </div>
                <div className="absolute left-0 top-1/2 bottom-0  lg:p-8 p-2 grid  space-y-16 text-white">
                  <div className="space-y-5">
                    <h1 className="lg:text-lg text-sm lg:w-[315px] lg:max-w-full ">
                      {title}
                    </h1>
                    <h5 className="lg:text-sm text-xs lg:w-[315px] lg:max-w-full w-full">
                      {sub_title}
                    </h5>
                    <p className="text-sm md:text-base lg:text-xs text-[10px]">
                      {date}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Videos;
