
import Expenses from './components/Expenses';
import NewExpense from './components/newExpense/newExpense';
import React,{useState} from 'react';




let dummyexpenses = [
  {
    id: 'e1',
    title: ' Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },

];

function App()

{
  const [exp,setExp]=useState(dummyexpenses)
  const addExpenseHandler=expense=>
{

  setExp([expense,...exp])
  console.log(expense);
  
};

  
  return (
      <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      
      <Expenses items={exp}/>
      </div>
  
  );
  
}

export default App;
