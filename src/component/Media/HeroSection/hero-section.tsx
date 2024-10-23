import { MediaHeroImg, MobileBgMediaHeroImage } from "../../../assets/images";
import { isMobile } from "../../Helpers/helpers";
import { HeroHeader } from "../../Reusables/HeroHeader";
import SliderDown from "../../Reusables/SliderDown/slider-down";

const HeroSection = ({
  heroSectionRef,
}: {
  heroSectionRef?: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <section className="">
      <div
        style={{
          backgroundImage: `url(${
            isMobile ? MobileBgMediaHeroImage : MediaHeroImg
          })`,
        }}
        className="lg:h-[calc(100vh-300px)] h-screen  overflow-hidden  w-full bg-cover relative bg-center"
        ref={heroSectionRef}
      >
        <HeroHeader
          headerText="Media"
          content="Explore our latest media post to state updated with IT Holdings Your preferred technology patner"
          isBtn
        />
        <SliderDown scrollSectionId="news and update" />
      </div>
    </section>
  );
};

export default HeroSection;
