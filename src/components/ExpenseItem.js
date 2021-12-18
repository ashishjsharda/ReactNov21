import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
    const expenseDate= new Date(
        2021,12,3)
    const summary="Car Insurance"
    const month=props.date.toLocaleString('en-US',{month:'long'})
    const day=props.date.toLocaleString('en-US',{day:'2-digit'})
    const year=props.date.getFullYear()

    return <div className="expense-item">
       <ExpenseDate date />
        <div className ="expense-item__description">
            <h2> {props.title}</h2>
            <div className={"expense-item__price"}>{props.amount}</div>
        </div>
    </div>
}

export default ExpenseItem;