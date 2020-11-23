import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AccordionStyles.css";
import { faPlus, faMinus, faWrench } from "@fortawesome/free-solid-svg-icons";

const Accordion = (props) => {
  const [active, setActive] = useState(true);
  const contentRef = useRef(null);

  var activeTitle = "";
  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `500px`
      : "0px";
  }, [contentRef, active]);

  const toogleActive = () => {
    setActive(!active);
    console.log(active);
    activeTitle = props.title;
    console.log(activeTitle);

  };

  const titleStyle = {
    fontWeight: 600,
    fontSize: "14px"
  };
  const update = () => {
    console.log(props.node.idnode + "  " + props.data.numnode + "  " + props.data.long + "  " + props.data.lat + "  " + props.data.operativeState);
  }

  const deleteNode = () => {
    console.log(props.node.idnode + "  " + props.data.numnode + "  " + props.data.long + "  " + props.data.lat + "  " + props.data.operativeState);
  };

  return (
    <div className="accordion-section" >
      <div className="accordion-title bg-primary p-2 text-white" >
        <p className="mt-3 ml-1" style={titleStyle}> <FontAwesomeIcon icon={faWrench} className="mr-2 rotated" />{props.title}</p>
        <span className="ml-auto">
          <button type="button" onClick={update} className="btn btn-warning z-depth-0 p-2 text-dark m-0 text-right align-middle mr-1 ml-1">Actualizar datos</button>
          <button type="button" onClick={deleteNode} className="btn btn-danger z-depth-0 p-2 text-white m-0 text-right align-middle mr-2 ml-1">Eliminar nodo</button>
          <FontAwesomeIcon icon={active ? faMinus : faPlus} onClick={toogleActive} className={active ? "accordion-icon" : "accordion-icon mr-3 rotated"} />
        </span>
      </div>

      <div ref={contentRef} className={(active ? "show-" : "") + "accordion-content p-0 m-0"}>
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;
