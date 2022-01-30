import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#life">Über mich</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#resume">Lebenslauf</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
    </div>
  );
}
