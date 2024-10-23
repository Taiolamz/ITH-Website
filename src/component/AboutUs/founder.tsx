import { Link } from "react-router-dom";
import { CeoMobileImage, FounderImage } from "../../assets/images";
import { isMobile } from "../Helpers/helpers";

const Founder = () => {
  return (
    <section className="relative mx-2 lg:overflow-x-auto overflow-x-hidden lg:mx-0 lg:grid lg:grid-cols-2 gap-3 items-center !my-2 !pt-0 bg-[#020E2A]">
      <div className="col-span-2 lg:col-span-1 w-full">
        <img
          src={isMobile ? CeoMobileImage : FounderImage}
          alt="Olusegun Enitan Dada, O.E.D"
          className="w-full h-auto object-cover"
          data-aos="fade-right"
          data-aos-duration="500"
        />
      </div>

      <div className="flex flex-col gap-5 px-4 lg:mt-0 mt-5 lg:px-0 lg:pr-28">
        <p
          data-aos="fade-left"
          data-aos-duration="1000"
          className="text-white lg:text-[32px] text-3xl font-semibold"
        >
          Olusegun Enitan Dada, O.E.D
        </p>

        <div className="max-w-fit">
          <p
            data-aos="fade-left"
            data-aos-duration="700"
            className="text-white font-medium lg:text-base text-sm border-b lg:pb-5 pb-2 border-[#FBFBFB33]"
          >
            Founder & CEO
          </p>
        </div>

        <p
          data-aos="fade-left"
          data-aos-duration="1000"
          className="text-white font-light lg:w-[517px] lg:text-base lg:leading-7 text-xs"
        >
          Olusegun Enitan Dada, OED, is a visionary entrepreneur and the driving
          force behind IT Horizons Holdings, the parent company of IT Horizons,
          Zojatech, and Zojapay. With over a decade of experience in IT
          solutions and software development, he leads these companies under ITH
          Holdings to drive digital transformation and innovation across Africa.
          His relentless pursuit of excellence is shaping the future of
          technology, one business at a time.
        </p>

        <div data-aos="fade-left" data-aos-duration="1500" className="my-5">
          <button className="bg-white rounded-[5px] lg:p-[11px] p-2 px-[13px]">
            <Link
              to={"#"}
              className="border-b border-[#020E2A] lg:text-base text-sm text-[#020E2A] text-center"
            >
              View Linkedin
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Founder;
