import React,{useState} from "react";
import Accordion from "../../Elements/Accordion/Accordion2";
import "./Documentation.css";

const Doc2 = () =>{
    const[active, setActive] = useState("");
   
    return(
        <div className="o-doc-container">
            <Accordion title="Title1" active={active}  setActive={setActive}>a</Accordion>
            <Accordion title="Title3" active={active}  setActive={setActive}>Waweaae :3</Accordion>
            <Accordion title="Title4" active={active}  setActive={setActive}>gg :DDDD</Accordion>
        </div>
        
        );
}

export default Doc2;