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

// Extract specifically named things from REACT library
// useState allows us to define values by state where changes in these values should be reflected in the component code (useState is a React hook, must be called inside react component function, it returns an array with two elements (1st element is current state value, 2nd element is a function to allow update of state) and you can use array destructuring to access the values)
import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  // use prefix HANDLE for function names that are for event handlers. For props prefeix with ON
  const handleClick = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>£{props.amount}</div>
      </div>
      {/* add event listener to a react element. Add a JS function or point to a function, use ON to list possible event listeners*/}
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
// test push
