import './ExpenseItem.css'
function ExpenseItem() {
    const expenseDate= new Date(
        2021,12,3)
    const summary="Car Insurance"

    return <div className="expense-item">
        <div> 2021-12-03</div>
        <div className ="expense-item__description">
            <h2> {summary}</h2>
            <div className={"expense-item__price"}>$500</div>
        </div>
    </div>
}

export default ExpenseItem;