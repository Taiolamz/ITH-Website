import { CareerHeroImage, CareerMobileHeroImage } from "../../assets/images";
import { isMobile } from "../Helpers/helpers";
import { HeroHeader } from "../Reusables/HeroHeader";
import { HeroOverlayBg } from "../Reusables/HeroHeader/hero-overlay";
import SliderDown from "../Reusables/SliderDown/slider-down";

const CareerHeroSection = ({
  heroSectionRef,
}: {
  heroSectionRef?: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <section className="">
      <div
        style={{
          backgroundImage: `url(${
            isMobile ? CareerMobileHeroImage : CareerHeroImage
          })`,
        }}
        className="lg:h-[calc(100vh-250px)] h-screen overflow-hidden  w-full bg-cover relative bg-center"
        ref={heroSectionRef}
      >
        <HeroOverlayBg opacity=".5" overlayBg="#121212" />
        {/* <HeroOverlayBg overlayBg="#121212"/> */}
        <HeroHeader
          headerText="Careers"
          content="Explore our current opportunities and embark on a career where your contributions will help shape the future of technology!"
        />
        <SliderDown scrollSectionId="career" />
      </div>
    </section>
  );
};

export default CareerHeroSection;
