import { Section } from "../Reusables/Container";

const WhyWorkWithITH = () => {
  return (
    <Section
      className="mt-20 flex flex-col items-center justify-center"
      id="career"
    >
      <h1
        // data-aos="fade-left"
        // data-aos-duration="700"
        className="text-[#121212] text-center lg:text-[40px] text-3xl font-semibold"
      >
        Why work with ITH Holdings?
      </h1>
      <p
        data-aos="fade-right"
        data-aos-duration="700"
        className="lg:w-[772px]   text-[#121212] text-center lg:text-base text-sm mt-6 font-light lg:leading-8 leading-6"
      >
        With ITH Holdings you can make a real impact and be part of a ground
        breaking project that empowers business and drive technological
        transformation on a global scale collaborate and learn from an
        accomplished team of highly skilled certified professional who share
        your passion for technology
      </p>
    </Section>
  );
};

export default WhyWorkWithITH;
