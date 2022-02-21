import Row from "./Row";
import { useEffect, useState } from "react";


const ArticleList = (props) => {
    const rows = props.rows;

    return(
        <div className= "Frame">
            {rows.map((row, index)=>(
                <Row key={index} row={row} />
            ))}
        </div>
    );
}

export default ArticleList;