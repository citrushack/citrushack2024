import About from "./about/About";
import Landing from "./landing/Landing";

const Live = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Landing />
      <About />
    </div>
  );
};

export default Live;
