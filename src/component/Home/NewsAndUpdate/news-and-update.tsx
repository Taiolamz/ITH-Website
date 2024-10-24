import { Link } from "react-router-dom";
import { HashButton } from "../../Reusables/Button";
import { Section } from "../../Reusables/Container";
import { news_and_update } from "./lists";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NewsAndUpdate = () => {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    window.open(path, "_blank");
  };
  return (
    <Section className="lg:mb-40 mb-10 lg:mt-40 mt-10 flex flex-col gap-5  justify-center">
      <h1
        data-aos="fade-right"
        data-aos-duration="1000"
        className="text-black font-medium lg:text-[40px] text-3xl my-6"
      >
        News and Updates
      </h1>

      <div className="lg:columns-3 lg:space-y-0 space-y-5 grid-rows-3 gap-6">
        {news_and_update.map((chi, idx) => {
          const { path, content, date, image, alt } = chi;
          const delay = idx * 400;
          return (
            <div
              key={idx}
              className="flex flex-col  bg-white shadow-xl hover:shadow-none duration-300 transition-all group/bg rounded-b-[5px] overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={delay}
            >
              <div className="relative grid place-items-center">
                <LazyLoadImage
                  src={image}
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s", width: "100%" },
                  }}
                  alt={alt}
                  className="w-full rounded-t-[5px]"
                />

                <div className="absolute inset-0 bg-black opacity-30 rounded-t-[5px]"></div>
                <div className="absolute group grid place-items-center cursor-pointer border border-[#EDEDED] h-[80px] w-[80px] rounded-full hover:h-[100px] hover:w-[100px] transition-all duration-300 hover:bg-white hover:shadow-xl ease-in-out ">
                  <Link
                    onClick={(e) => handleLinkClick(e, path)}
                    to={path}
                    className="text-white border-b border-b-white group-hover:text-[#020E2A] group-hover:border-b-[#020E2A] transition-all duration-300 ease-in-out"
                  >
                    Read
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-2 lg:p-10 p-5 transition-all duration-300 bg-white group-hover/bg:bg-blue-100  relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-100 transform translate-x-full  transition-transform duration-300 group-hover/bg:translate-x-0 rounded-l-[50rem]"></div>{" "}
                <p className="lg:w-[315px] lg:text-base text-sm w-full relative z-10">
                  {content}
                </p>
                <p className="text-xs relative z-10">{date}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-10">
        <HashButton toPath="/media#news and update" btnText="View More" />
      </div>
    </Section>
  );
};

export default NewsAndUpdate;
