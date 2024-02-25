import About from "./about/About";
import Landing from "./landing/Landing";
import Schedule from "./schedule/Schedule";

const Live = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Landing />
      <About />
      <Schedule />
    </div>
  );
};

export default Live;
