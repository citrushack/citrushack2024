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
    </div>
  );
};

export default Live;
