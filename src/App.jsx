import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import Preloader from "../src/components/Preloader";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <Body>
        <NavBar />
      </Body>
      <Footer />
    </Router>
  );
}
