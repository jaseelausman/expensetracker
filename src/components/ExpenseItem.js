import './Expenseitem.css';
import react, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import "./Expenseitem.css";



function ExpenseItem(props)
{
  const[title,setTitle]=useState(props.title)
 
  return (
    <div className="expense-item ">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description ">
        <h2>{props.title}</h2>
        <div className="expense-item__price">
        {props.amount}</div>
      
      </div>
    </div>)

}
export default ExpenseItem;