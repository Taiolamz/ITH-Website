import { motion } from "framer-motion";
import { trusted_partners } from "./lists";
import { Section } from "../../Reusables/Container";
import { HrLine } from "../../../assets/icons";

const TrustedPartners = () => {
  return (
    <Section className="overflow-hidden relative">
    <div className="flex gap-3 items-center">
      <p className="p-3 py-5 lg:text-base text-sm text-[#002887]">Our Trusted Partners</p>
      <img src={HrLine} alt="horizontal line" />
    </div>
    <motion.div
      className="flex lg:gap-20 gap-10 px-28"
      animate={{ x: ["0%", "-100%"] }}
      transition={{
        duration: 20, // Increase the duration for a slower animation
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {[...trusted_partners, ...trusted_partners].map((partner, idx) => (
        <img
          key={idx}
          src={partner}
          alt={`Partner ${idx}`}
          className="w-32 h-auto"
        />
      ))}
    </motion.div>
  </Section>
  
  );
};

export default TrustedPartners;
