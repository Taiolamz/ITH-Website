import { ReactNode } from "react";
import { SliderUp } from "../SliderDown/slider-up";

const Section = ({
  className,
  children,
  id,
}: {
  className?: string;
  children?: ReactNode;
  id?: string;
}) => {
  return (
    <section id={id} className={` container mx-auto px-4 lg:max-w-[full] ${className}`}>
    {/* <section id={id} className={` container mx-auto px-4 py-5 ${className}`}> */}
      {children}
      <SliderUp />
    </section>
  );
};

export default Section;
