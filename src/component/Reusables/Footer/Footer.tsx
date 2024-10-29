import { Link } from "react-router-dom";
import { footer, socials } from "./lists";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    window.open(path, "_blank");
  };
  const [openDrop, setOpenDrop] = useState(false);
  return (
    <section className="w-full bg-[#020E2A] overflow-y-hidden relative overflow-x-hidden">
      <div
        className="border-b pb-8 pt-16"
        style={{ borderBottom: ".1rem solid rgba(251, 251, 251, 0.1)" }}
      >
        <div className=" lg:grid lg:place-items-center lg:p-0 px-7 w-full">
          <div className="lg:grid lg:grid-cols-5  lg:place-items-center lg:gap-10  lg:justify-center flex justify-around  items-center  gap-3 ">
            {footer.map((chi, idx) => {
              const { label, path, drop } = chi;
              const delay = 300 * idx;
              if (drop) {
                return (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={delay}
                    key={idx}
                    className="group relative"
                  >
                    <span
                      onClick={() => setOpenDrop(!openDrop)}
                      className="text-white  cursor-pointer min-w-max lg:text-base text-xs font-light"
                    >
                      {label}
                    </span>

                    <div
                      className={`absolute top-full flex flex-col mt-2 gap-5 lg:gap-0 rounded-[5px] w-[180px] shadow-md transition-all duration-500 ease-in-out ${
                        openDrop
                          ? "opacity-100 scale-y-100"
                          : "opacity-0  scale-y-0"
                      } transform  origin-top`}
                    >
                      {drop.map((subItem, subIdx) => (
                        <NavLink
                          key={subIdx}
                          to={subItem.path}
                          className=" lg:p-3 text-left lg:pl-0 text-sm underline last:border-b-0
            text-white transition-all hover:scale-105 duration-300 ease-out 
            hover:text-white"
                          onClick={(e) => handleLinkClick(e, subItem.path)}
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                );
              }
              return path ? (
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={delay}
                  key={idx}
                  className="w-full grid place-items-center"
                >
                  <Link
                    to={path}
                    className="text-white  min-w-max lg:text-base text-xs font-light"
                  >
                    {label}
                  </Link>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>

      <div
        className={`lg:grid lg:place-items-center py-10 transition-all  ease-in-out duration-300 ${
          openDrop ? "lg:mt-24 mt-20" : ""
        }`}
      >
        {/* hover two */}
        <div className="lg:flex lg:gap-14 text-center  colums-2 lg:items-center px-5">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={300}
            className="text-white lg:text-sm text-xs font-light min-w-max"
          >
            Copyrights@2024 IT Horizons Holdings{" "}
          </p>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay={600}>
            <Link
              to="#"
              className="text-white lg:text-sm text-xs min-w-max font-light"
            >
              Privacy Policy
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay={900}>
            <Link
              to="#"
              className="text-white lg:text-sm text-xs min-w-max font-light"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
        <div className="flex gap-3 items-center justify-center my-10 pb-10">
          {socials.map((chi, idx) => {
            const { icon, path, label } = chi;
            const delay = 300 * idx;

            return (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={delay}
              >
                <Link to={path} key={idx}>
                  <img src={icon} alt={label} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
