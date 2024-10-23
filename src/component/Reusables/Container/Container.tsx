import { ReactNode } from "react";
import HeaderNav from "../HeaderNav/header-nav";
import Footer from "../Footer/Footer";
import MobileHeaderNav from "../HeaderNav/Mobile/mobile-header-nav";

const Container = ({
  children,
  heroSectionRef,
}: {
  children?: ReactNode;
  heroSectionRef?: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <section className="h-screen  relative">
      <MobileHeaderNav heroSectionRef={heroSectionRef} />
      <HeaderNav heroSectionRef={heroSectionRef} />
      {children}
      <Footer />
    </section>
  );
};

export default Container;
