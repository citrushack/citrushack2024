import Involved from "./Involved/Involved";
import Sponsors from "./Sponsors/Sponsors";
import Team from "./Team/Team";
import About from "./about/About";
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
    </div>
  );
};

export default Live;
