import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = ({onAddExpenseData}) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const exponseData = {
            ...enteredExpenseData,
            id: Math.random.toString(),
        };

        onAddExpenseData(exponseData);
    }

    return ( 
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;