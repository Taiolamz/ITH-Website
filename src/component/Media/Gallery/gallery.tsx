import { Button } from "../../Reusables/Button";
import { Section } from "../../Reusables/Container";
import { gallery } from "./lists";

const Gallery = () => {
  return (
    <Section className="lg:mt-48 mt-10 flex flex-col justify-center lg:overflow-x-auto overflow-y-hidden lg:overflow-y-hidden overflow-x-hidden ">
      <p className="py-10 font-semibold lg:text-[28px] text-2xl text-[#5A5B5B]">
        Gallery
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-3">
        {gallery.map((chi, idx) => (
          <div
            key={idx}
            className={`relative bg-cover bg-center rounded-[5px] ${
              idx === 0
                ? "row-span-2 col-span-2 lg:h-full h-[20rem]"
                : "lg:h-[16rem] h-[20rem]"
            }`}
            style={{
              backgroundImage: `url(${chi})`,
              // height: idx === 0 ? "100%" : "16rem",
            }}
            data-aos={idx === 0 ? "fade-right" : "fade-left"}
            data-aos-duration="1000"
          ></div>
        ))}
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
