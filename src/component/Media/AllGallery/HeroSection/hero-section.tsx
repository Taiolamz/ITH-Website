import {
  AllGalleryHeroImage,
  AllGalleryMobileHeroImage,
} from "../../../../assets/images";
import { isMobile } from "../../../Helpers/helpers";
import { HeroHeader } from "../../../Reusables/HeroHeader";
import SliderDown from "../../../Reusables/SliderDown/slider-down";

const AllGalleryHeroSection = () => {
  return (
    <section className="">
      <div
        style={{
          backgroundImage: `url(${
            isMobile ? AllGalleryMobileHeroImage : AllGalleryHeroImage
          })`,
        }}
        className="h-[calc(100vh-300px)]  overflow-hidden  w-full bg-cover relative bg-center"
      >
        <HeroHeader headerText="Gallery" />
        <SliderDown />
      </div>
    </section>
  );
};

export default AllGalleryHeroSection;
