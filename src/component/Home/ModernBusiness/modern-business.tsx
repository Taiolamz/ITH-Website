import { LightImage } from "../../../assets/images";
import { Button } from "../../Reusables/Button";
import { Section } from "../../Reusables/Container";

const ModernBusiness = () => {
  return (
    <Section className="lg:mt-40 mt-10 lg:overflow-x-auto overflow-x-hidden overflow-y-hidden flex flex-col justify-center ">
      <div
        className="lg:flex lg:justify-between grid grid-rows-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="bg-[#0028870D] w-full lg:p-14 p-4 py-20 flex flex-col gap-7  h-[350px] lg:h-[535px]">
          <p className="text-[#002887] uppercase lg:text-sm text-sm font-medium">
            Modern Business
          </p>
          <h1 className="text-[#121212] text-2xl lg:leading-normal leading-8 font-bold lg:text-[40px] lg:w-[590px]">
            Your Business Partner in Emerging Technology
          </h1>
          <div className="mt-auto">
          <Button
            toPath={"/contact"}
            btnText="Contact Us"
          />
          </div>
        </div>

        {/* right display */}
        <div className="grid grid-cols-2 grid-rows-1 gap-0">
          <div className="bg-[#004BFF] h-full"></div>
          <div className="bg-[#002887]"></div>
          <div className="bg-[#002887]"></div>
          <div className="flex items-center justify-center bg-[#002887]">
            <img src={LightImage} alt="light" className="w-full " />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ModernBusiness;
