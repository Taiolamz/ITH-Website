import { useRef } from "react";
import {
  AboutUs,
  HeroSection,
  ModernBusiness,
  NewsAndUpdate,
  NewsLetter,
  WhoAreWe,
} from "../../component/Home";
import { Container } from "../../component/Reusables/Container";
const Home = () => {
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  return (
    <Container heroSectionRef={heroSectionRef}>
      <HeroSection heroSectionRef={heroSectionRef} />
      <AboutUs />
      {/* relook at this */}
      <WhoAreWe />
      <ModernBusiness />
      <NewsLetter />
      <NewsAndUpdate />
    </Container>
  );
};

export default Home;
