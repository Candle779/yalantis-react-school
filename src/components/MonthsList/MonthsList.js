import React from 'react';
import Month from "../Month";

const MonthsList = (props) => {
    const {months, doFilter} = props;
    return (
        <div className="uk-margin-small">
            <div className="uk-button-group">
                {
                    months.map(month => {
                        return <Month key={month.monthIndex} {...month} doFilter={() => doFilter(month.monthIndex)}/>
                    })
                }
            </div>
        </div>
    )
}

export default MonthsList;
