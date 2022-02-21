import Column from "./Column";

const Row = (props) =>{

    const row = props.row;

    const changeWidth=(m, divID)=>{
        if(m==="%"){
            console.log(row.width);
            console.log(row.width/12*100);
            return `${row.width/12*100}%`;
        }else{
            return m +  row.width/12;
        }
    }

return(
        <div className="Row">
            {row.columns.map((column, index)=>(
                <Column key={index} column={column}/>
            ))}
        </div>
    );
}

export default Row;