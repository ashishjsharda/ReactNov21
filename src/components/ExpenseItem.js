import './ExpenseItem.css'
function ExpenseItem(props) {
    const expenseDate= new Date(
        2021,12,3)
    const summary="Car Insurance"

    return <div className="expense-item">
        <div>
            <div>{props.date.toLocaleString('en-US',{month:'long'})}</div>
            <div>{props.date.toLocaleString('en-US',{day:'2-digit'})}</div>
            <div>{props.date.getFullYear()}</div>
        </div>
        <div className ="expense-item__description">
            <h2> {props.title}</h2>
            <div className={"expense-item__price"}>{props.amount}</div>
        </div>
    </div>
}

export default ExpenseItem;