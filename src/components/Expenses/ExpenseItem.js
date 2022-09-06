import './ExpenseItem.css'
import './ExpenseDate'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({detail}) => {

  return (
    <li>
      <Card className="expense-item"> 
        <ExpenseDate date={detail.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{detail.title}</h2>
          <div className="expense-item__price">${detail.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
