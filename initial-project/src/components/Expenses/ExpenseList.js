import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

function Expenses({expenses}) {
    
    if (expenses.length === 0) {
        return <p className="expenses-list__fallback">Found no expenses.</p>
    }

    return (
        <ul className="expenses-list">
            {
                expenses.map(expense => <ExpenseItem key={expense.id} detail={expense} />)
            }
        </ul>
    );
}

export default Expenses;
