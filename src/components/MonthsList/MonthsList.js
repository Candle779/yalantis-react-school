import React from 'react';
import Month from "../Month";

const MonthsList = (props) => {
    const {months} = props;
    return (
        <div className="months">
            {
                months.map(month => {
                    return <Month key={month.monthIndex} {...month}/>
                })
            }
        </div>
    )
}

export default MonthsList;
