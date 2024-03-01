import React, {useState} from "react";
import './ExpenceForm.css';

const ExpenceForm = (props) =>{
    const [enterTitle, setEnteredTitle]= useState('');
    const [enterAmount, setEnteredAmount]= useState('');
    const [enterDate, setEnteredDate]= useState('');
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    const submitHandler = (event) =>{
        event.preventDefault();

        const expenceData ={
            title : enterTitle,
            amount : enterAmount,
            date: new Date(enterDate),
        }
        props.onSaveExpenceDate(expenceData);
        console.log(expenceData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expence_controls">
                <div className="new-expence_control">
                <label>Title</label>
                <input type="text" value={enterTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expence_control">
                <label>Amount</label>
                <input type="number" value={enterAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expence_control">
                <label>Date</label>
                <input type="date" value={enterDate} onChange={dateChangeHandler}/>
                </div>

            </div>
            <div className="new-expence_actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenceForm;