import { HeroImage, MobileBgHeroImage } from "../../../assets/images";
import { TypewriterEffect } from "../../Reusables/Animation/animation";
import { HeroHeader } from "../../Reusables/HeroHeader";
import SliderDown from "../../Reusables/SliderDown/slider-down";
import TrustedPartners from "../TrustedPartners/trusted-partners";

const HeroSection = ({
  heroSectionRef,
}: {
  heroSectionRef?: React.RefObject<HTMLDivElement>;
}) => {
  const isMobile = window.innerWidth < 768;
  return (
    <section className="bg-[#0028870D] h-screen">
      <div
        style={{
          backgroundImage: `url(${isMobile ? MobileBgHeroImage : HeroImage})`,
        }}
        className="h-[calc(100vh-150px)]  overflow-hidden  w-full bg-cover relative bg-center"
        ref={heroSectionRef}
      >
        <HeroHeader
          headerText={
            <TypewriterEffect text="Innnovating Technology for Business Optimization" />
          }
          content="We are Africa’s technology company instilled with a culture of innovation and excellence, ensuring the growth and success of every business"
          isBtn
          toPath="/about-us"
        />
        <SliderDown />
      </div>
      <TrustedPartners />
    </section>
  );
};

export default HeroSection;
