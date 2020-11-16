import React from "react";
import Accordion from "../../Elements/Accordion/Accordion"
import "./Documentation.css";

const Documentation = () => (
    <div className="o-doc-container ">
    <Accordion title="A">
      <span className="accordion-text"> bbbb</span>
    </Accordion>
    <Accordion title="B">
      <span className="accordion-text">aaaa</span>
    </Accordion>
    <Accordion title="C">
      <span className="accordion-text">cccccc</span>
    </Accordion>
  </div>
)

export default Documentation;