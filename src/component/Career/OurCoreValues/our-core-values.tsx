import { HandShakeIcon } from "../../../assets/icons";
import { Section } from "../../Reusables/Container";
import { core_values } from "./lists";

const OurCoreValues = () => {
  return (
    <Section className="mt-48 grid mb-40 place-items-center">
      <h1
        data-aos="fade-left"
        data-aos-duration="700"
        className="text-[#121212] lg:text-[40px] font-semibold"
      >
        Our Core Values
      </h1>
      <div className="lg:grid lg:grid-cols-3 rows-1 space-y-5 lg:space-y-0 gap-5 gap-y-7 mt-10">
        {core_values.map((chi, idx) => {
          const { label, content } = chi;
          const delay = idx * 400;
          return (
            <div
              key={idx}
              className="flex flex-col w-full gap-3 bg-white p-6 py-8 rounded-[5px]"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay={delay}
            >
              <div>
                <img src={HandShakeIcon} alt="hand shake" />
              </div>
              <p className="text-[#121212] font-medium">{label}</p>
              <p className="lg:w-[227px] font-light ">{content}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default OurCoreValues;
