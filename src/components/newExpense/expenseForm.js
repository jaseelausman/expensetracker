import React,{useState} from 'react'
import "./expenseForm.css";

 function ExpenseForm(props) {
    const [enteredtitle,setenteredTitle]=useState("");
    const[newAmount,setnewAmount]=useState("");
    const[enteredDate,setenteredDate]=useState("");
    
    function newtext(event)
    {
        setenteredTitle(event.target.value);
        
    }
    function newamount(event){
        setnewAmount(event.target.value);
    }
    function newDate(event){
        setenteredDate(event.target.value);
    }
    function formSubmit(event){
        event.preventDefault();
        const nexpense=
            {
                title:enteredtitle,
                amount:newAmount,
                date:new Date(enteredDate),
            };
       props.onSavenexpense(nexpense);
        setenteredTitle('');
        setnewAmount('');
        setenteredDate('');
    }
  return (
        <form onSubmit={formSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" onChange={newtext} value={enteredtitle}/>
                </div>

                <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" onChange={newamount} value={newAmount}/>
                </div>

                <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' onChange={newDate} value={enteredDate}/>
                </div>

                <div className='new_expense__actions'>
                    <button type="submit">Add Expense</button>
                </div>
                
            </div>
        </form>

  );
}
export default ExpenseForm;
