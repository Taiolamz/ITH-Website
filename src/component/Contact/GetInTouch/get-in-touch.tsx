import { Section } from "../../Reusables/Container";
import { LocationIcon } from "../../../assets/icons";
import { address_location, socials } from "./lists";
import { Link } from "react-router-dom";
import { Button } from "../../Reusables/Button";

const GetInTouch = () => {
  return (
    <Section
      id="contact"
      className=" flex flex-col my-10  justify-center lg:overflow-x-auto overflow-y-hidden lg:overflow-y-hidden overflow-x-hidden"
    >
      <div className="lg:grid lg:grid-cols-2 rows-2 justify-between gap-[10rem] place-items-baseline ">
        <div className="flex flex-col">
          <h2
            data-aos="fade-right"
            data-aos-duration="700"
            className="text-[#121212] lg:mt-0 mt-10 font-semibold text-[28px]"
          >
            Get In Touch
          </h2>
          <div
            data-aos="fade-right"
            data-aos-duration="700"
            className="flex gap-2 items-center mt-8"
          >
            <img src={LocationIcon} alt="location" />
            <p className="text-[20px] font-semibold">Address</p>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="flex flex-col gap-5 mt-4"
          >
            {address_location.map((chi, idx) => {
              const {
                country,
                logo,
                address_one,
                address_two,
                phone,
                phone_two,
              } = chi;
              return (
                <div key={idx}>
                  <div className="flex gap-3 items-center mb-2">
                    <p className="font-medium">{country}</p>
                    <img src={logo} alt={`${country} logo`} />
                  </div>
                  <div className="flex gap-5 items-center">
                    <p className="text-[#212121] font-light lg:text-sm text-xs w-full lg:w-[250px]">
                      {address_one}
                    </p>
                    {address_two ? (
                      <span className="h-[50px] w-[.5px] bg-[#002887]"></span>
                    ) : null}
                    <p className="text-[#212121] ml-5 font-light lg:text-sm text-xs w-full lg:w-[250px]">
                      {address_two}
                    </p>
                  </div>
                  <div className="flex gap-4  items-center">
                    <p className="text-[#212121]  w-[200px] font-light lg:text-sm text-xs ">
                      {phone}
                    </p>
                    {phone_two ? (
                      <span className="h-[20px] w-[.5px] bg-[#002887]"></span>
                    ) : null}

                    <p className="text-[#212121] lg:text-sm text-xs w-full  font-light ">
                      {phone_two}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex gap-3 items-center my-10">
            {socials.map((chi, idx) => {
              const { icon, path, label } = chi;
              const delay = 300 * idx;

              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={delay}
                >
                  <Link
                    to={path}
                    key={idx}
                    className="relative  bg-[#004BFF] group hover:bg-black transition-all duration-300 delay-100 lg:w-[98.13px] w-[60px] h-[60px] lg:h-[98.13px] grid place-items-center overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-black transform translate-x-full translate-y-[-100%] transition-transform duration-500 ease-in-out rounded-b-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
                    <div className="flex flex-col items-center justify-center">
                      <img src={icon} alt={label} className="relative z-10" />
                      <p className="text-[9px] text-white z-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full">
                        @IT Holding
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* form display */}
        <form action="">
          <p
            data-aos="fade-left"
            data-aos-duration="800"
            className="text-[#212121] leading-snug  font-semibold lg:text-[28px] text-base "
          >
            For enquiries, please fill out the form below and a member of our
            team will contact you.
          </p>
          <div className="flex flex-col gap-5 mt-8">
            <div
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="300"
              className="flex flex-col gap-2"
            >
              <label
                htmlFor=""
                className="text-[#5A5B5B] font-light lg:text-base text-xs"
              >
                Full Name <span className="text-[#EA4335]">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                className="bg-[#F5F5F5] rounded-[5px] p-4 placeholder:text-[#9D9D9D] lg:text-base text-xs placeholder:text-sm placeholder:font-light outline-none font-light"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="600"
              className="flex flex-col gap-2"
            >
              <label
                htmlFor=""
                className="text-[#5A5B5B] font-light lg:text-base text-xs"
              >
                Email Address<span className="text-[#EA4335]">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter email address"
                className="bg-[#F5F5F5] rounded-[5px] p-4 placeholder:text-[#9D9D9D] lg:text-base text-xs placeholder:text-sm placeholder:font-light outline-none font-light"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="900"
              className="flex flex-col gap-2"
            >
              <label
                htmlFor=""
                className="text-[#5A5B5B] font-light lg:text-base text-xs"
              >
                Message <span className="text-[#EA4335]">*</span>
              </label>
              <textarea
                placeholder="Enter message"
                className="bg-[#F5F5F5] rounded-[5px] resize-none pt-5 p-4 placeholder:text-[#9D9D9D] lg:text-base text-xs placeholder:text-sm placeholder:font-light outline-none font-light"
                rows={5}
              />
            </div>
            <div
              className="mt-8"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <Button toPath={"#"} btnText="Send Message" />
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default GetInTouch;
