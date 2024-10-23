import { Link, NavLink } from "react-router-dom";
import { ITHLogo } from "../../../assets/images";
import { ITHLogoBlue } from "../../../assets/icons";
import { header_nav } from "./lists";
import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const HeaderNav = ({
  heroSectionRef,
}: {
  heroSectionRef?: React.RefObject<HTMLDivElement>;
}) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = heroSectionRef?.current;
      if (heroSection) {
        // const heroHeight = heroSection.offsetHeight;
        const scrollTop = window.scrollY;
        if (scrollTop > 100) {
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
    <header
      className={`${
        scrolled ? "bg-white" : "bg-transparent"
      } z-20 fixed top-0 w-full hidden lg:flex lg:justify-between transition-all duration-300 items-center   m-auto px-14 h-[80px]`}
    >
      <Link to="/home" className="absolute lg:relative left-0">
        <img src={scrolled ? ITHLogoBlue : ITHLogo} alt="logo" className="" />
      </Link>

      <ul className="lg:flex hidden gap-10  items-center">
        {header_nav.map((item, idx) => {
          const { label, path, drop } = item;

          if (drop) {
            return (
              <li key={idx} className="group relative">
                <div className="flex gap-[.4rem] items-center cursor-pointer">
                  <span
                    className={`text-base font-light transition-all duration-300 ${
                      scrolled ? "text-[#014CFF]" : "text-white"
                    }`}
                  >
                    {label}
                  </span>

                  <IoMdArrowDropdown
                    className={`transform transition-transform duration-500 group-hover:rotate-180 ${
                      scrolled ? "text-[#014CFF]" : "text-white"
                    }`}
                  />
                </div>

                <div
                  className="absolute top-full flex flex-col gap-4  mt-2 p-5 rounded-[5px]  bg-white w-[210px] shadow-md
            transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 origin-top"
                >
                  {drop.map((subItem, subIdx) => (
                    <NavLink
                      key={subIdx}
                      to={subItem.path}
                      className="border-b hover:font-medium ease-out transition-all duration-300   border-b-[#EEEFEF] p-3  px-10 underline text-[#014CFF] last:border-b-0"
                      onClick={(e) => handleLinkClick(e, subItem.path)}
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
              className={({ isActive }) =>
                `text-base font-light transition-all duration-200 ${
                  scrolled ? "text-[#014CFF]" : "text-white"
                } ${isActive ? "" : ""}`
              }
            >
              {label}
            </NavLink>
          ) : null;
        })}
      </ul>
    </header>
  );
};

export default HeaderNav;
