import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Button = ({
  type,
  btnText,
  className,
  toPath,
  spanClass,
  spanClassTwo,
}: {
  type?: "reset" | "submit" | "button";
  btnText?: string;
  className?: string;
  spanClass?: string;
  toPath?: string;
  spanClassTwo?: string;
}) => {
 
  return (
    <>
      <Link to={toPath || "#"}>
        <button
          type={type}
          className={`relative hover:shadow-custom-blue inline-flex items-center justify-center px-8 lg:px-10 lg:py-3 py-2 border-[2.5px] overflow-hidden font-medium text-[#002887] transition duration-300 ease-out  border-[#002887] rounded-[5px] group ${className}`}
        >
          <span
            className={`${spanClass} absolute text-xs lg:text-base inset-0 flex gap-2 items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#002887] group-hover:translate-x-0 ease`}
          >
            {btnText}
            <HiOutlineArrowRight />
          </span>
          <span
            className={`absolute flex items-center text-xs lg:text-base justify-center w-full h-full text-[#002887] transition-all duration-300 transform group-hover:translate-x-full ease ${spanClassTwo}`}
          >
            {btnText}
          </span>
          <span className="relative invisible text-xs lg:text-base">
            {btnText}
          </span>
        </button>
      </Link>
    </>
  );
};

export default Button;
