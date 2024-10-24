import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "../../Reusables/Button";
import { Section } from "../../Reusables/Container";
import { gallery } from "./lists";

const Gallery = () => {
  return (
    <Section className="lg:mt-48 mt-10 flex flex-col justify-center lg:overflow-x-auto overflow-y-hidden lg:overflow-y-hidden overflow-x-hidden ">
      <p className="py-10 font-semibold lg:text-[28px] text-2xl text-[#5A5B5B]">
        Gallery
      </p>

      <div className="grid place-items-center bg-white shadow-lg hover:scale-[1.02] transition-all duration-300 p-3 py-8 rounded-[5px]">
        <div className="lg:flex lg:gap-3 columns-1 lg:space-y-0 space-y-3">
          <div className="">
            {gallery.slice(0, 1).map((chi, idx) => (
              <div key={idx} data-aos={"fade-right"} data-aos-duration="1000">
                <LazyLoadImage
                  className="w-full"
                  src={chi}
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                />
              </div>
            ))}
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-3 columns-1 lg:space-y-0 space-y-3">
            {gallery.slice(1).map((chi, idx) => {
              const delay = idx * 300;
              return (
                <div
                  key={idx}
                  data-aos={"fade-up"}
                  data-aos-delay={delay}
                  data-aos-duration="1000"
                >
                  <LazyLoadImage
                    className="w-full"
                    src={chi}
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className="flex justify-center mt-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Button toPath="/media/all-gallery" btnText="View More" />
      </div>
    </Section>
  );
};

export default Gallery;
