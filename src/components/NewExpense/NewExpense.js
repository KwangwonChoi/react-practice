import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = ({onAddExpenseData}) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const exponseData = {
            ...enteredExpenseData,
            id: Math.random.toString(),
        };

        onAddExpenseData(exponseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const endEditingHandler = () => {
        setIsEditing(false);
    }

    let expenseForm = <button onClick={startEditingHandler}>Add New Expense</button>
    
    if (isEditing) {
        expenseForm = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={endEditingHandler} />
    }

    return ( 
        <div className="new-expense">
            {
                expenseForm
            }
        </div>
    )
}

export default NewExpense;