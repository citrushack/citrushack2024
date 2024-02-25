import Involved from "./Involved/Involved";
import Sponsors from "./Sponsors/Sponsors";
import Team from "./Team/Team";
import About from "./about/About";
import FAQ from "./faq/FAQ";
import Footer from "./footer/footer";
import Judges from "./judges/Judges";
import Landing from "./landing/Landing";
import Schedule from "./schedule/Schedule";
import Tracks from "./tracks/Tracks";

const Live = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Landing />
      <About />
      <Schedule />
      <Tracks />
      <Involved />
      <Sponsors />
      <Team />
      <Judges />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Live;
