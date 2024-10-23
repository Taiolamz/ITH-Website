import { ContactHeroImg, MobileContactHeroImage } from "../../../assets/images";
import { isMobile } from "../../Helpers/helpers";
// import TypewriterEffect from "../../Reusables/Animation/animation";
import { HeroHeader } from "../../Reusables/HeroHeader";
import SliderDown from "../../Reusables/SliderDown/slider-down";

const ContactHeroSection = ({
  heroSectionRef,
}: {
  heroSectionRef?: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <section className="lg:overflow-auto overflow-x-hidden">
      <div
        style={{
          backgroundImage: `url(${
            isMobile ? MobileContactHeroImage : ContactHeroImg
          })`,
        }}
        className="lg:h-[calc(100vh-300px)] h-screen overflow-hidden  w-full bg-cover relative bg-center"
        ref={heroSectionRef}
      >
        <HeroHeader
          headerText={"Contact Us"}
          content="Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. "
        />
        <SliderDown scrollSectionId="contact" />
      </div>
    </section>
  );
};

export default ContactHeroSection;
