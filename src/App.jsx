import Skill from "./components/Skill";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Cert from "./components/Cert";

export default function App() {
  return (
    <div className="mx-auto">
      <div>
        <Profile />
        <Skill />
        <Cert />
        <Contact />
      </div>
      <About />
      <Portfolio />
    </div>
  );
}
