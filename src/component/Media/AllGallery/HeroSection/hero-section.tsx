import {
  AllGalleryHeroImage,
  AllGalleryMobileHeroImage,
} from "../../../../assets/images";
import { isMobile } from "../../../Helpers/helpers";
import { HeroHeader } from "../../../Reusables/HeroHeader";
import { HeroOverlayBg } from "../../../Reusables/HeroHeader/hero-overlay";
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
        className="lg:h-[calc(100vh-300px)] h-screen  overflow-hidden  w-full bg-cover relative bg-center"
      >
        <HeroOverlayBg overlayBg="black"/>
        <HeroHeader headerText="Gallery"  />
        <SliderDown />
      </div>
    </section>
  );
};

export default AllGalleryHeroSection;
