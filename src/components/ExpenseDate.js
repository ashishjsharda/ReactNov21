import './ExpenseDate.css'
function ExpenseDate(props){
    const month=props.date.toLocaleString('en-US',{month:'long'})
    const day=props.date.toLocaleString('en-US',{day:'2-digit'})
    const year=props.date.getFullYear()

    
    return (
        <div className="expense-date">
            <div className="expense_date_month">{props.date.toLocaleString('en-US',{month:'long'})}</div>
            <div className="expense_date_day">{props.date.toLocaleString('en-US',{day:'2-digit'})}</div>
            <div className="expense_date_year">{props.date.getFullYear()}</div>
        </div>

        );
}

export default ExpenseDate;