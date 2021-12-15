function ExpenseDate(props){
    const month=props.date.toLocaleString('en-US',{month:'long'})
    const day=props.date.toLocaleString('en-US',{day:'2-digit'})
    const year=props.date.getFullYear()

    
    return (
        <div className="expense-date">
            <div>{props.date.toLocaleString('en-US',{month:'long'})}</div>
            <div>{props.date.toLocaleString('en-US',{day:'2-digit'})}</div>
            <div>{props.date.getFullYear()}</div>
        </div>

        );
}

export default ExpenseDate;