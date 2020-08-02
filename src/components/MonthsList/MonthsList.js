import React from 'react';
import Month from "../Month";

const MonthsList = (props) => {
    const {months, doFilter, selectedMonthIndex} = props;
    return (
        <div className="uk-margin-small">
            <div className="uk-button-group">
                {
                    months.map(month => {
                        return <Month key={month.monthIndex}  selectedMonthIndex={selectedMonthIndex} {...month} doFilter={() => doFilter(month.monthIndex)}/>
                    })
                }
            </div>
        </div>
    )
}

export default MonthsList;
