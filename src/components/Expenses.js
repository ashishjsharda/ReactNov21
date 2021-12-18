import ExpenseItem from "./ExpenseItem";

function Expenses(props){

    return <div>
        <ExpenseItem
            date={expenses[0].date}
            title={expenses[0].title}
            amount={expenses[0].amount} >
        </ExpenseItem>
        <ExpenseItem
            date={expenses[1].date}
            title={expenses[1].title}
            amount={expenses[1].amount}>
        </ExpenseItem>
    </div>
}