import "./topbar.scss";
import { Person, Mail, GitHub } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Web. Dev
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>
              <a href="tel: +41794621250">+41 79 462 12 50</a>
            </span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>
              <a href="mailto: info@ramon-niederhaeuser.ch">
                info@ramon-niederhaeuser.ch
              </a>
            </span>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            <span>
              <a
                href="https://github.com/ramonniederhaeuser"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
