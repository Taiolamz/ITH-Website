import { Container } from "../../component/Reusables/Container";
import {
  Gallery,
  MediaHeroSection,
  MediaRecentNews,
  Videos,
} from "../../component/Media";
import { useRef } from "react";

const Media = () => {
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  return (
    <Container heroSectionRef={heroSectionRef}>
      <MediaHeroSection heroSectionRef={heroSectionRef} />
      <MediaRecentNews />
      <Gallery />
      <Videos />
    </Container>
  );
};

export default Media;
