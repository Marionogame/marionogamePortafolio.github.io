import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function SoftwareSkill(props) {
  const changeImage = (logo) => {
    if (logo.style === "images") {
      switch (logo.fontAwesomeClassname) {
        case "maxMonitor":
          return (
            <img
              src={require("../../assests/images/maxlogo.jpg")}
              className="iconify"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "150px",
                border: "4px solid #666",
              }}
              alt="Maxlogo"
            />
          );
        case "rastreo":
          return (
            <img
              src={require("../../assests/images/rastreo1.png")}
              className="iconify"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "150px",
                border: "4px solid #666",
              }}
              alt="Rastreo"
            />
          );
        case "Konteo":
          return (
            <img
              src={require("../../assests/images/konteoTransparente.svg")}
              className="iconify"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "150px",
                border: "4px solid #666",
              }}
              alt="konteo"
            />
          );
        default:
          return (
            <img
              src={require("../../assests/images/maxlogoTransparente.png")}
              className="iconify"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "150px",
                border: "4px solid #666",
              }}
              alt="MaxMonitor"
            />
          );
      }
    } else {
      return (
        <span
          className="iconify"
          data-icon={logo.fontAwesomeClassname}
          style={logo.style}
          data-inline="false"
        ></span>
      );
    }
  };
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.skillName}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.skillName}</strong>
                  </Tooltip>
                }
              >
                <li className="software-skill-inline" name={logo.skillName}>
                  {/* <span
                    className="iconify"
                    data-icon={logo.fontAwesomeClassname}
                    style={logo.style}
                    data-inline="false"
                  ></span> */}
                  {changeImage(logo)}
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SoftwareSkill;
