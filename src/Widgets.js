import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
  const article = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articlLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articlRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Today’s top courses </h2> <InfoIcon />
      </div>

      {article("IoT Foundations: Fundamentals", "Bruce Sinclair")}
      {article(
        "Artificial Intelligence Foundations: Thinking Machines",
        "Doug Rose"
      )}
      {article("Agile Foundations", "Doug Rose")}
    </div>
  );
}

export default Widgets;
