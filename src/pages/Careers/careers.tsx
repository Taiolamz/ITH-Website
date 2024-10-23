import { useRef } from "react";
import {
  CareerHeroSection,
  OpenPositions,
  OurCoreValues,
  WhyWorkWithITH,
} from "../../component/Career";
import { Container } from "../../component/Reusables/Container";

const Career = () => {
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  return (
    <Container heroSectionRef={heroSectionRef}>
      <CareerHeroSection heroSectionRef={heroSectionRef} />
      <WhyWorkWithITH />
      <OurCoreValues />
      <OpenPositions />
    </Container>
  );
};

export default Career;
