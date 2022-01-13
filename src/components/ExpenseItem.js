// component in react is just a javascript function

// You can only have 1 root element per return statement (JSX code snippet)

// you can add variables to your component to allow dynamic data

// to get data from the app.js file, you need to add properties (props)  Reacct will bundle all the proeperties into one property
// these props names come from the HTML key value pairs in the expense items in the app.js (title, ammout, date)

// can remove variables as we are now getting data from the app.js
// const expenseDate = new Date(2021, 2, 28);
// const expenseTitle = 'car Insurance';
// const expenseAmount = 294.67;

// to maintain cleaner code, create variables that can be injected into the jsx code
// const month = props.date.toLocaleString('en-US', { month: 'long' });
// const day = props.date.toLocaleString('en-US', { day: '2-digit' });
// const year = props.date.getFullYear();

import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>£{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
