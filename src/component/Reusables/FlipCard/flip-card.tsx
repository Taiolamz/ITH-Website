import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

interface FlipCardProps {
  image: string;
  logo: string;
  label: string;
  subsidiary: string;
  content: string;
  toPath?: string;
  onPathRoute?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const FlipCard: React.FC<FlipCardProps> = ({
  image,
  logo,
  label,
  subsidiary,
  content,
  toPath,
  onPathRoute,
}) => {
  return (
    <div className="lg:w-full   px-2 lg:pr-0 h-[478px] perspective">
      <div className="relative w-full h-full group transition-transform duration-1000 transform-style preserve-3d hover:rotate-y-180">
        <div className="  inset-0 backface-hidden">
          <div className="relative">
            <div className="bg-[#002887] p-5 absolute bottom-0 w-full rounded-b-[5px]">
              <p className="text-white text-[20px] font-medium">{label}</p>
            </div>
            <img
              src={image}
              alt={`about ${label}`}
              className=" h-[478px] rounded-[5px] w-fit object-cover"
            />
          </div>
        </div>

        <div className="absolute inset-0 backface-hidden  bg-[#002887] text-white p-5 flex flex-col  transform rotate-y-180 rounded-[5px] ">
          <div className="flex gap-5 my-5 items-center delay-700 opacity-0 duration-700 group-hover:opacity-100">
            <img
              src={logo}
              alt={`about ${label}`}
              className=" w-fit object-cover"
            />
            <h2 className="text-xl font-bold mb-2">{subsidiary}</h2>
          </div>

          <p className="text-left lg:text-base text-sm lg:leading-normal leading-6  font-light opacity-0 delay-500 translate-y-full transition-all duration-1000 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
            {content}
          </p>

          <div className="mt-10 flex group/arrow gap-2 items-center text-left ml-5 cursor-pointer delay-1000 opacity-0 duration-700 group-hover:opacity-100  ">
            <Link onClick={onPathRoute} to={toPath || "#"}>
              Visit Website
            </Link>
            <GoArrowRight className="group-hover/arrow:translate-x-1 transition-all duration-300 ease-in-out" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
