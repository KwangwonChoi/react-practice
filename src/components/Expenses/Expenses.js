import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import './Expenses.css';
import { useState } from "react";

function Expenses({expenses}) {

    const [filteredYear, setFilteredYear] = useState('2022');

    const changeFilterHandler = (year) => {
        setFilteredYear(year);
    }

    const itemList=expenses.map((expense,index)=>{
        return <ExpenseItem detail={expense}></ExpenseItem>
      })

    return (
    <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
        {
            itemList
        }
    </Card>
);
}

export default Expenses;
