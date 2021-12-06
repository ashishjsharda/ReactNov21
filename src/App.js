import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem'


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
            date:new Date(2021,12,3)
        }
    ]
  return (
      <div>
        <h2> Let's get started</h2>
      <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} > </ExpenseItem>
          <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount}> </ExpenseItem>

      </div>
  );
}

export default App;
