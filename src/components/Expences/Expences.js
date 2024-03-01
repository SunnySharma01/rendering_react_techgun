import React from 'react';
import './Expences.css';
import ExpenceItem from './ExpenceItem';
import Card from '../UI/Card';
const Expences=(props)=>{
    return(
 <Card className='expences'>
  {
    props.item.map(
      expence =>(
        <ExpenceItem
        date={expence.date}
        title={expence.title}
        amount={expence.amount}/>

      )
    )
  }     
  </Card>
    )

 }
 export default Expences;