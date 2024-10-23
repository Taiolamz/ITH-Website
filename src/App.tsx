import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import { pages_route_group } from "./routes/pages";
import "aos/dist/aos.css";
import AOS from "aos";
import ScrollToTop from "./component/Reusables/SliderDown/scroll-to-top";

function App() {
  AOS.init({
    duration: 1000,
  });

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        {pages_route_group.map((route, idx) => {
          const { path } = route;
          return <Route key={idx} path={path} element={<route.element />} />;
        })}
      </Routes>
    </>
  );
}

export default App;
