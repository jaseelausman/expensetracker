import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import "./expenses.css"
import ExpensesFilter from './ExpensesFilter';



function Expenses(props)
{  
  const [filteredyear,setFilteredyear]=useState("2020")
  const filterHandler=(selectedYear)=>{
    console.log('expenses.js');
    setFilteredyear(selectedYear);

  };
const filteredExpenses=props.items.filter(expense=>{
  return expense.date.getFullYear().toString()===filteredyear;
});

  return (
       <div  className='expenses'>
        <ExpensesFilter  selected={filteredyear} onChangefilter={filterHandler}/>
        {filteredExpenses.map(expense=><ExpenseItem
             key={expense.id}
             title= {expense.title}
             amount={expense.amount}
             date={expense.date}
            />)}
        </div>
  );
  
};

export default Expenses