import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Life from "./components/life/Life";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Skills />
        <Life />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
