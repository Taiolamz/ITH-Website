import { Section } from "../../Reusables/Container";
import { WhoAreWeImg } from "../../../assets/images";
import { Button } from "../../Reusables/Button";
// import { LazyLoadImage } from "react-lazy-load-image-component";

const WhoAreWe = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <Section className="lg:mt-36 mt-10">
      {/* <Section className="lg:flex mt-10 lg:overflow-x-auto overflow-x-hidden lg:overflow-y-auto overflow-y-hidden  lg:mt-40 lg:flex-col w-full lg:justify-center"> */}
      <div className="grid lg:grid-cols-[1.7fr_1fr] rows-2 gap-4   w-full items-center relative ">
        <div className="w-full relative">
          <div className="bg-[#002887] lg:w-full !rounded-[5px]  lg:-mb-8 lg:ml-8 lg:h-[300px] w-full h-[40px]  absolute lg:bottom-0 -bottom-4"></div>

          <div
            className="bg-white  py-2 lg:p-6 lg:px-5 px-6 pb-5  lg:py-16  rounded-[5px] lg:w-full z-10 lg:pl-14"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3 className="text-[#002887] lg:text-sm font-medium text-xs lg:my-10 my-6">
              JOIN OUR JOURNEY OF INNOVATIVE EXCELLENCE
            </h3>
            <h1 className="text-[#121212] font-bold lg:text-[40px] text-3xl">
              Who We Are
            </h1>
            <p className="text-[#212121] my-10 lg:w-[650px] lg:max-w-full lg:pr-16 lg:text-base text-xs leading-5 lg:leading-normal">
              At ITH Holdings, we are a dynamic and innovative conglomerate
              comprising IT Horizons, Zojatech, and Zojapay. As a leading
              provider of cutting-edge technology solutions across various
              industries, we are driven by a passion for excellence and a
              commitment to transforming businesses through digital innovation.
              Our team of experts is dedicated to pushing boundaries and
              consistently exceeding client expectations, shaping the future of
              IT, software development, and fintech.
            </p>
            <Button toPath="/about-us" btnText="Learn More" />
          </div>
        </div>

        <div
          data-aos={isMobile ? "fade-right" : "fade-left"}
          data-aos-duration="1000"
          style={{ backgroundImage: `url(${WhoAreWeImg})` }}
          className="bg-cover object-cover lg:-ml-24 bg-center lg:mt-0 mt-5  relative w-full lg:w-[calc(100%+6rem)] h-[420px]   rounded-lg"
          // className="bg-cover object-cover lg:-ml-24 bg-center lg:mt-0 mt-5  relative w-full lg:w-[calc(100% +  10rem)] h-[420px]  z-[561px] rounded-lg"
        ></div>
        {/* <LazyLoadImage
          effect="blur"
          data-aos={isMobile ? "fade-right" : "fade-left"}
          // data-aos-duration="1000"
          src={WhoAreWeImg}
          alt=""
          className="bg-cover object-cover lg:-ml-24 bg-center lg:mt-0 mt-5  relative w-full h-[420px] z-[561px] rounded-lg"
          wrapperProps={{
            style: { transitionDelay: "1s", },
          }}
        /> */}
      </div>
    </Section>
  );
};

export default WhoAreWe;
