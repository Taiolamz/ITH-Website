import { useEffect, useState } from "react";
import { HarmbourgerMenu } from ".";
import { header_nav } from "../lists";
import { Link, NavLink } from "react-router-dom";
import { ITHLogo } from "../../../../assets/images";
import { AngleRight, CancelIcon, ITHLogoBlue } from "../../../../assets/icons";

const MobileHeaderNav = ({
  heroSectionRef,
}: {
  heroSectionRef?: React.RefObject<HTMLDivElement>;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [isDropOpen, setIsDropOpen] = useState(false);

  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = heroSectionRef?.current;
      if (heroSection) {
        // const heroHeight = heroSection.offsetHeight;
        const scrollTop = window.scrollY;
        if (scrollTop > 10) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    window.open(path, "_blank");
  };

  return (
    <header className={` z-20 fixed top-0  w-full   lg:hidden `}>
      {/* harmbourger menu for mobile view */}
      <div
        className={` ${
          scrolled ? "bg-white" : "bg-transparent"
        } flex justify-between items-center py-3 px-5 transition-all duration-300`}
      >
        <Link to="/home" className="">
          <img src={scrolled ? ITHLogoBlue : ITHLogo} alt="logo" className="" />
        </Link>
        <HarmbourgerMenu
          className={`${scrolled ? "!bg-[#002887]" : "white"} rounded-[1px]`}
          toggleMenu={toggleMenu}
          isOpen={isOpen}
        />
      </div>

      {/* nav-details wrap */}
      <section
        className={`fixed top-0 right-0 h-screen w-[80vw] bottom-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* close side menu */}

        <img
          onClick={toggleMenu}
          src={CancelIcon}
          alt="close"
          className="absolute right-0 p-10"
        />

        <ul className="flex flex-col gap-8 p-6 mt-32">
          {header_nav.map((chi, idx) => {
            const { label, path, drop } = chi;
            if (drop) {
              return (
                <li key={idx} className="border-b pb-2 border-[#EEEFEF]">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setIsDropOpen(!isDropOpen)}
                  >
                    <span className="text-sm text-[#002887] font-normal">
                      {label}
                    </span>

                    <img
                      src={AngleRight}
                      alt="angle right"
                      className={`${
                        isDropOpen ? "rotate-90" : ""
                      } transition-all duration-300`}
                    />
                  </div>
                  <div
                    className={`flex flex-col mt-4 gap-4 overflow-hidden transition-all duration-300 ease-in-out ${
                      isDropOpen
                        ? "max-h-96 opacity-100 visible"
                        : "max-h-0 opacity-0 invisible"
                    }`}
                  >
                    {drop.map((subItem, subIdx) => (
                      <NavLink
                        key={subIdx}
                        to={subItem.path}
                        onClick={(e) => handleLinkClick(e, subItem.path)}
                        className="border-b border-b-[#EEEFEF] p-3 text-sm px-10 underline font-light text-[#212121] last:border-b-0"
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                </li>
              );
            }
            return path ? (
              <NavLink
                key={idx}
                to={path}
                className="border-b text-sm text-[#002887] font-normal pb-4 border-[#EEEFEF]"
              >
                {label}
              </NavLink>
            ) : null;
          })}
        </ul>
      </section>
    </header>
  );
};

export default MobileHeaderNav;
