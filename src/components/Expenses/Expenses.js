import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';

function Expenses({expenses}) {

    return (
    <Card className="expenses">
        <ExpenseItem detail={expenses[0]}></ExpenseItem>
        <ExpenseItem detail={expenses[1]}></ExpenseItem>
        <ExpenseItem detail={expenses[2]}></ExpenseItem>
        <ExpenseItem detail={expenses[3]}></ExpenseItem>
    </Card>
);
}

export default Expenses;
