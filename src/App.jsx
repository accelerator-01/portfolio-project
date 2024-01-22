import Skill from "./components/Skill";
import About from "./components/About";
// import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
// import Cert from "./components/Cert";

export default function App() {
  return (
    <div className="container mx-auto">
      <div className="mb-5 mt-5 border-spacing-5 bg-slate-800">
        <Profile />
        <Skill />
        {/* <Cert /> */}
        <Contact />
      </div>
      <div className="mb-5 bg-slate-800">
        <About />
        {/* <Portfolio /> */}
      </div>
    </div>
  );
}
