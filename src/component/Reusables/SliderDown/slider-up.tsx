import { useEffect, useState } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";

export const SliderUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={scrollToTop}
      className={` ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-all duration-300 bg-black m-5 fixed bottom-0 cursor-pointer animate-bounce z-10 right-0 w-[50px] grid place-items-center h-[50px] rounded-full`}
    >
      <FaArrowTurnUp className="text-white" />
    </div>
  );
};
