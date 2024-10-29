import { Section } from "../../Reusables/Container";
import { FlipCard } from "../../Reusables/FlipCard";
import { about_us } from "./lists";

const AboutUs = () => {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    window.open(path, "_blank");
  };
  return (
    <Section className="w-screen pb-10 lg:mt-20 lg:overflow-x-auto overflow-x-hidden overflow-y-hidden mt-16 flex flex-col gap-14 justify-center text-center">
      <div className=" flex flex-col items-center gap-6 justify-center">
        <h1
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-[#121212] container lg:text-[40px] text-2xl font-semibold"
        >
          About Us
        </h1>

        <p
          data-aos="fade-up"
          data-aos-duration="700"
          className="lg:w-[772px] lg:text-base text-xs leading-5 text-center  text-[#121212] font-light lg:leading-8"
        >
          {" "}
          We are a dynamic conglomerate committed to driving technological
          innovation and excellence across multiple industries. We leverage our
          expertise to deliver cutting-edge solutions.
        </p>
      </div>

      {/* <div className="flex w-full columns-3 gap-10 "> */}
      <div className="lg:flex lg:justify-between lg:items-center grid place-items-center grid-rows-3 gap-3 ">
        {about_us.map((chi, idx) => {
          const { label, image, subsidiary, content, logo, path } = chi;
          const delay = idx * 400;
          return (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              key={idx}
              data-aos-delay={delay}
              // className="mx-4 my-4"
            >
              <FlipCard
                logo={logo}
                image={image}
                label={label}
                subsidiary={subsidiary}
                content={content}
                onPathRoute={(e) => handleLinkClick(e, path)}
              />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default AboutUs;
