import Skill from "./components/Skill";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Cert from "./components/Cert";

export default function App() {
  return (
    <div className="container mx-auto md:grid md:grid-cols-2 md:gap-x-1 lg:grid lg:grid-cols-2 lg:gap-x-1">
      <div className="m-3 overflow-hidden p-4">
        <Profile />
        <About />
        <div className="sm:hidden">
          <Skill />
        </div>
      </div>
      <div className="m-3 overflow-hidden p-4">
        <Portfolio />
        <Cert />
        <Contact />
      </div>
    </div>
  );
}
