import { Section } from "../Reusables/Container";

const Anniversary = () => {
  return (
    <Section
      className="lg:h-screen lg:overflow-x-hidden lg:mt-20 overflow-x-hidden lg:max-w-full overflow-y-hidden flex flex-col justify-center"
      id={"Anniversary"}
    >
      <div className="lg:grid lg:grid-cols-[_.5fr_1fr] gap-10 rows-1 place-items-center">
        <div className="flex justify-center">
          <div className="flex flex-col gap-0">
            <p
              data-aos="fade-right"
              data-aos-duration="500"
              className="text-[#012169] font-medium lg:text-[300px] text-[230px] leading-none"
            >
              14
            </p>
            <p
              data-aos="fade-right"
              data-aos-duration="500"
              className=" text-[#012169] font-medium lg:text-[32px] text-right"
            >
              years
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 lg:mt-0 mt-7">
          <p
            data-aos="fade-left"
            data-aos-duration="500"
            className="lg:w-[772px] lg:max-w-full lg:text-base text-sm  font-light lg:leading-8 leading-6"
          >
            Founded in 2010, our journey began with the establishment of IT
            Horizons, an IT solutions firm dedicated to delivering innovative
            and customized technology solutions across various <br /> industries
          </p>
          <p
            data-aos="fade-left"
            data-aos-duration="500"
            className="lg:w-[772px] lg:max-w-full lg:text-base text-sm font-light lg:leading-8 leading-6"
          >
            In 2019, we diversified our operations with the launch of Zojatech,
            a forward-thinking software development company focused on digital
            transformation solutions. Zojatech quickly gained recognition for
            its ground breaking products like Revvex, a budget management
            system, and Mance, a performance management system. Our commitment
            to staying ahead of industry trends ensured that Zojatech became a
            key player in the Fintech and SaaS sectors.{" "}
          </p>
        </div>
      </div>
      {/* our vision */}
      <div className="mt-44 flex flex-col items-center justify-center">
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-[#121212] lg:text-[40px] text-3xl font-semibold"
        >
          Our Vision
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="lg:w-[772px] text-center text-[#121212] lg:text-base text-xs font-light leading-snug mt-4 lg:leading-8"
        >
          {" "}
          ITH Holdings vision is to be Africa’s technology partner of choice by
          2023
        </p>
      </div>
    </Section>
  );
};

export default Anniversary;
