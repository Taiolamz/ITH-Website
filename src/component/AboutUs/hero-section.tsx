import { LazyLoadComponent } from "react-lazy-load-image-component";
import { AboutUsHeroImage, AboutUsMobileHeroImage } from "../../assets/images";
import { isMobile } from "../Helpers/helpers";
import { HeroHeader } from "../Reusables/HeroHeader";
import { HeroOverlayBg } from "../Reusables/HeroHeader/hero-overlay";
import SliderDown from "../Reusables/SliderDown/slider-down";

const AboutUsHeroSection = ({
  heroSectionRef,
}: {
  heroSectionRef?: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <section className="relative">
      <LazyLoadComponent   > 
        <div
          style={{
            backgroundImage: `url(${
              isMobile ? AboutUsMobileHeroImage : AboutUsHeroImage
            })`,
          }}
          className="lg:h-[calc(100vh-300px)] h-screen w-full bg-cover bg-center relative overflow-hidden"
          ref={heroSectionRef}
        >
          <HeroOverlayBg />
          <HeroHeader
            headerText="About Us"
            content="ITH Holdings continues to grow its vision of becoming the leading provider of technological solutions in Africa."
          />
          <SliderDown scrollSectionId="Anniversary" />
        </div>
      </LazyLoadComponent>
    </section>
  );
};

export default AboutUsHeroSection;
