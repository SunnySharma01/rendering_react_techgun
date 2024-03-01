//import React, { useState } from 'react';
import './ExpenceItem.css'
import ExpenceDate from './ExpenceDate';
import Card from '../UI/Card';
const ExpenceItem =(props)=>{                         /*Arrow function*/
       
    return(
        <Card className='expense-item'>
            <ExpenceDate date={props.date}/>
            <div className='expense-item_desription'> 
            <h2>{props.title}</h2>
            <div className='expence-item_price'>${props.amount}</div>
            </div>
          
         </Card>
    );
}
export default ExpenceItem;
