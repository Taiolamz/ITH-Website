import { Section } from "../../Reusables/Container";
import { recent_news } from "./lists";
import { Link } from "react-router-dom";

const RecentNews = () => {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    window.open(path, "_blank");
  };
  return (
    <Section
      id="news and update"
      className="mt-10 lg:flex lg:flex-col lg:gap-5  my-14 lg:mt-20  justify-center lg:overflow-x-auto overflow-y-hidden lg:overflow-y-hidden overflow-x-hidden"
    >
      <p
        className="text-[#5A5B5B] font-semibold lg:text-[28px] text-xl mb-5"
        // data-aos="fade-left"
        // data-aos-duration="500"
      >
        News and Update
      </p>
      <div className="lg:grid lg:grid-cols-3 rows-1 lg:space-y-0 space-y-5 gap-6">
        {recent_news.map((chi, idx) => {
          const { path, content, date, image, alt } = chi;
          return (
            <div
              key={idx}
              className="flex flex-col  bg-white shadow-xl hover:shadow-none duration-300 transition-all group/bg rounded-b-[5px] overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative grid place-items-center">
                <img src={image} alt={alt} className="w-full rounded-t-[5px]" />
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
                <p className="lg:w-[315px] lg:max-w-full  lg:text-base text-sm w-full relative z-10">
                  {content}
                </p>
                <p className="text-xs relative z-10">{date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default RecentNews;
