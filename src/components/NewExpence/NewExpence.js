import React from "react";
import './NewExpence.css';
import ExpenceForm from "./ExpenceForm";
const NewExpence = (props) =>{
    const NewExpenceDataHandler =(enterExpenceData)=>{
        const expenceData = {
            ...enterExpenceData,
            ID : Math.random().toString 
        }
        props.onAddExpence(expenceData);
        console.log(expenceData);
    };
    return(
        <div className="new-expense">
            <ExpenceForm onSaveExpenceDate={NewExpenceDataHandler}/>
        </div>
    );
}
export default NewExpence;