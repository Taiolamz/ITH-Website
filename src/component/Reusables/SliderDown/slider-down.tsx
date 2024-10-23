import { BsArrowDownRight } from "react-icons/bs";

const SliderDown = ({ scrollSectionId }: { scrollSectionId?: string }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop;
      console.log(sectionTop, "section top");
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };
  const scrollDown = (sectionId?: string) => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
    if (sectionId) {
      scrollToSection(sectionId);
    }
  };

  return (
    <div
      onClick={() => scrollDown(scrollSectionId)}
      className="absolute bottom-0 right-0 lg:-mr-28 -mr-10 -mb-3 border cursor-pointer border-[#EEEFEF80] hover:border-white rounded-full lg:w-[250px] lg:h-[250px] w-[100px] h-[100px] grid place-items-center group hover:w-[130px] hover:h-[130px] lg:hover:w-[280px] lg:hover:h-[280px] transition-all duration-500 "
    >
      <BsArrowDownRight className="transform lg:w-[47px] lg:h-[47px] text-[#EEEFEF4D] group-hover:text-white lg:-ml-16 -ml-6 transition-all duration-500  group-hover:rotate-[44.5deg]" />
    </div>
  );
};

export default SliderDown;
