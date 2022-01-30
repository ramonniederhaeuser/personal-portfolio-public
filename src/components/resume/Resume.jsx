import "./resume.scss";
import { resumeData } from "./../../data";

export default function Resume() {
  return (
    <div className="mainContainer" id="resume">
      <div className="timeline">
        {resumeData.map((d) => (
          <div
            className={"container " + (d.id % 2 ? "right" : "left")}
            key={d.id}
          >
            <div className="content">
              <h2>{d.title}</h2>
              <h4>{d.cardTitle}</h4>
              <h5>{d.cardSubtitle}</h5>
              <p>{d.cardDetailedText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
