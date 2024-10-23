import { LazyLoadImage } from "react-lazy-load-image-component";
import { Section } from "../../Reusables/Container";
import { leadership_details } from "./lists";
import { Link } from "react-router-dom";

const OurLeadership = () => {
  return (
    <Section className="flex lg:overflow-x-auto lg:overflow-y-hidden  overflow-x-hidden flex-col items-center pt-44 justify-center">
      <div>
        <div className="flex mb-20 flex-col gap-4 justify-center items-center">
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-[#121212] text-3xl font-medium lg:text-[48px] text-center"
          >
            Our Leadership
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-center font-light flex lg:text-base text-sm justify-center text-[#212121] leading-6 lg:w-[610px]"
          >
            ITH Holdings continues to grow its vision of becoming the leading
            provider of technological solutions in Africa.
          </p>
        </div>
        <div className="lg:flex gap-5 lg:items-center space-y-5 lg:space-y-0 ">
          {leadership_details.slice(0, 3).map((chi, idx) => {
            const delay = 300 * idx;
            return (
              <div
                data-aos="flip-right"
                data-aos-duration="1000"
                key={idx}
                data-aos-delay={delay}
                className="relative group w-full grid place-items-center"
              >
                <div className="absolute space-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 grid  transition-all duration-300 z-10 text-center transform translate-y-full">
                  <p className="text-white">{chi.name}</p>
                  <p className="text-xs text-white">{chi.designation}</p>
                  <Link
                    to={chi.path}
                    className="text-[#002887] underline text-xs font-light"
                  >
                    View Linkedin
                  </Link>
                </div>

                <div className="rounded-[5px] w-fit object-cover h-auto transition-all duration-300 ease-in-out grayscale group-hover:grayscale-0">
                  <LazyLoadImage
                    alt={`all-leadership-images-${idx + 1}`}
                    src={chi.image}
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:grid lg:place-items-center mt-5">
          <div className="lg:grid-cols-2 grid gap-5 place-items-center">
            {leadership_details.slice(3).map((chi, idx) => {
              const delay = 300 * idx;
              return (
                <div
                  data-aos="flip-right"
                  data-aos-duration="1000"
                  data-aos-delay={delay}
                  key={idx + 3}
                  className="relative group w-full grid place-items-center"
                >
                  <div className="absolute space-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 grid  transition-all duration-300 z-10 text-center transform translate-y-full">
                    <p className="text-white lg:text-base text-sm">
                      {chi.name}
                    </p>
                    <p className="text-xs text-white">{chi.designation}</p>
                    <Link
                      to={chi.path}
                      className="text-[#002887] underline text-xs font-light"
                    >
                      View Linkedin
                    </Link>
                  </div>
                  <div className="rounded-[5px] w-fit object-cover h-auto transition-all duration-300 ease-in-out grayscale group-hover:grayscale-0">
                    <LazyLoadImage
                      alt={`all-leadership-images-${idx + 1}`}
                      src={chi.image}
                      effect="blur"
                      wrapperProps={{
                        style: { transitionDelay: "1s" },
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurLeadership;
