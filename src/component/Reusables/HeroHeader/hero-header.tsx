import { ReactNode } from "react";
import { Button } from "../Button";

const HeroHeader = ({
  headerText,
  content,
  isBtn,
  toPath,
}: {
  headerText?: string | ReactNode;
  content?: string | ReactNode;
  isBtn?: boolean;
  toPath?: string;
}) => {
  return (
    <div className="container lg:h-screen lg:pt-4 lg:px-4 mx-auto">
      <div className="pl-4 py-5 absolute bottom-0 mb-10">
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          className="font-semibold  lg:mb-0  text-white text-2xl lg:text-5xl w-[350px] lg:w-[650px] lg:leading-snug leading-9 mb-5"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          {headerText}
        </p>

        <p
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          className="text-white lg:w-[520px] lg:max-w-full w-[300px] lg:leading-7 leading-6 text-sm lg:text-"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          {content}
        </p>

        {isBtn ? (
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
          >
            <Button
              toPath={toPath}
              className="text-white hover:shadow-custom-white mt-5 border-white hover:bg-white hover:!text-[#002887]"
              spanClass="bg-white group-hover:text-[#002887]"
              spanClassTwo="text-white"
              btnText="Learn More"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HeroHeader;
