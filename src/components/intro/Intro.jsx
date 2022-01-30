import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Webentwickler", "Web Design", "Web Applikation"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hallo, mein Name ist</h2>
          <h1>Ramon</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#skills">
          <img src="assets/down.png" alt="arrow down" />
        </a>
      </div>
    </div>
  );
}
