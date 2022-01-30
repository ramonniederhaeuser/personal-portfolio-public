import { useEffect, useState } from "react";
import SkillsList from "../skillsList/SkillsList";
import "./skills.scss";
import { skillsPortfolio, frameworkPortfolio } from "../../data";

export default function Skills() {
  const [selected, setSelected] = useState("skills");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "framework",
      title: "Frameworks",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "language":
        setData(skillsPortfolio);
        break;
      case "framework":
        setData(frameworkPortfolio);
        break;
      default:
        setData(skillsPortfolio);
    }
  }, [selected]);

  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <ul>
        {list.map((item) => (
          <SkillsList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item" key={d.id}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
