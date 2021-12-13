import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem'
import ExpenseDate from "./components/ExpenseDate";


function App() {
    const expenses=[
        {
            id:'e1',
            title:'Toilet Paper',
            amount:100.12,
            date:new Date(2021,12,3)
        },
        {
            id:'e2',
            title:'Milk',
            amount:4.12,
            date:new Date(2021,12,4)
        }
    ]
  return (
      <div>
        <h2> Let's get started</h2>
      <ExpenseDate date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} > </ExpenseDate>
          <ExpenseDate date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount}> </ExpenseDate>

      </div>
  );
}

export default App;
