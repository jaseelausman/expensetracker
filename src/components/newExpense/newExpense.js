import React from 'react';
import ExpenseForm from './expenseForm';
import "./newExpense.css";



function NewExpense(props) 
{
  const addExpense=(expense)=>{
    const expenseData={
      ...expense,id:Math.random().toString()
    };
    
    props.onAddExpense(expenseData);
  };
  
  return (
  <div className='new-expense'>
    <ExpenseForm  onSavenexpense={addExpense}/>
    
    
  </div>
    
  );
}
export default NewExpense;
