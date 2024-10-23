import { useRef } from "react";
import {
  AboutUsHeroSection,
  Anniversary,
  Founder,
  OurLeadership,
} from "../../component/AboutUs";
import { NewsLetter } from "../../component/Home";
import { Container } from "../../component/Reusables/Container";

const AboutUs = () => {
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  return (
    <Container heroSectionRef={heroSectionRef}>
      <AboutUsHeroSection heroSectionRef={heroSectionRef} />
      <Anniversary />
      <Founder />
      <OurLeadership />
      <NewsLetter />
    </Container>
  );
};

export default AboutUs;
