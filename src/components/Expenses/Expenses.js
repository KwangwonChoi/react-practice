import ExpenseList from './ExpenseList'
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import './Expenses.css';
import { useState } from "react";
import ExpensesChart from './ExpensesChart';

function Expenses({expenses}) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const changeFilterHandler = (year) => {
        setFilteredYear(year);
    }

    const filteredExpense = expenses.filter(
        expense => expense.date.getFullYear().toString() === filteredYear
    )

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
            <ExpensesChart expenses={filteredExpense}/>
            <ExpenseList expenses={filteredExpense} />
        </Card>
    );
}

export default Expenses;
