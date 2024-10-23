const HarmburgerMenu = ({
  toggleMenu,
  isOpen,
  className,
}: {
  toggleMenu: () => void;
  isOpen?: boolean;
  className?: string;
}) => {
  return (
    <div
      className=" flex flex-col justify-between w-8 h-8 cursor-pointer"
      onClick={toggleMenu}
    >
      <span
        className={`${className} h-[2px] w-full bg-white rounded-[.5px] transition-transform duration-300 ease-in-out ${
          isOpen ? "transform rotate-45 translate-y-3.5" : ""
        }`}
      ></span>
      <span
        className={`${className}  h-[2px] w-full bg-white rounded-[.5px] transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`${className}  h-[2px] w-full bg-white rounded-[.5px] transition-transform duration-300 ease-in-out ${
          isOpen ? "transform -rotate-45 -translate-y-3.5" : ""
        }`}
      ></span>
    </div>
  );
};

export default HarmburgerMenu;
