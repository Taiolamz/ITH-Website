import { useRef } from "react";
import { ContactHeroSection, GetInTouch } from "../../component/Contact";
import { Container } from "../../component/Reusables/Container";

const Contact = () => {
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  return (
    <Container heroSectionRef={heroSectionRef}>
      <ContactHeroSection heroSectionRef={heroSectionRef} />
      <GetInTouch />
    </Container>
  );
};

export default Contact;
