import './ExpenseItem.css'
function ExpenseItem() {
    const expenseDate= new Date(
        2021,12,3)

    return <div className="expense-item">
        <div> {expenseDate}</div>
        <div className ="expense-item__description">
            <h2> Car Insurance</h2>
            <div className={"expense-item__price"}>$500</div>
        </div>
    </div>
}

export default ExpenseItem;