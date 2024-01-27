import Skill from "./components/Skill";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Cert from "./components/Cert";

export default function App() {
  return (
    <div className="container mx-auto lg:grid lg:grid-cols-2 lg:gap-x-1">
      <div className="m-3 border-spacing-5 bg-slate-800 p-4">
        <Profile />
        <About />
        <Skill />
      </div>
      <div className="m-3 overflow-hidden bg-slate-800 p-4">
        <Portfolio />
        <Cert />
        <Contact />
      </div>
    </div>
  );
}
