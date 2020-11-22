import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AccordionStyles.css";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Accordion3 = (props) => {
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

    return (
        <div className="accordion-section" >
            <div button className={props.color + " accordion-title p-2 text-white"} >
                <p className="mt-3" style={titleStyle}> <FontAwesomeIcon icon={props.icon} className="mr-2 " />{props.title}</p>
                <span className="ml-auto">
                    <FontAwesomeIcon icon={active ? faMinus : faPlus} onClick={toogleActive} className={active ? "accordion-icon" : "accordion-icon mr-2 rotated"} />
                </span>
            </div>

            <div ref={contentRef} className={(active ? "show-" : "") + "accordion-content p-0 m-0"}>
                {props.children}
            </div>
        </div>
    );
};

export default Accordion3;
