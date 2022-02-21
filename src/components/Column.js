import ArticlePreview from "./ArticlePreview";
import { useState } from "react";
import React from "react";

const Column = (props) =>{
    const column = props.column;
    const [isEditing, setIsEditing] = useState(false);
    const [buttonText, setButtonText] = useState("Edit Title");
    const [inputText, setInputText] = useState(column.title);
    const ref = React.createRef();

    const handleClick=()=>{
        if(!isEditing){
            setIsEditing(true);
            setButtonText("Save");
        }else{
            setIsEditing(false);
            setButtonText("Edit Title");
            column.title = inputText;//this right here should be replaced with a post call to change the title on the backend. But should I mess with your database?
            console.log(column.imageURL);
        }
    }

    const changeImageWidth=(m)=>{
        return m + "&width=" + Math.round(column.width/12*500);
    }

    return(
        <div ref={ref} className="Column" >
            {/* <img src={changeImageWidth(column.imageURL/*, document.getElementById('column'))} alt="bilde" /> */}
            <img src={changeImageWidth(column.imageUrl)} alt="bilde" />
            {!isEditing && <a href= {column.url}>
                <h1>{column.title}</h1>
            </a> }
            {isEditing && <input onChange={(e)=>(setInputText(e.target.value))}/>}
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    );
}

export default Column;