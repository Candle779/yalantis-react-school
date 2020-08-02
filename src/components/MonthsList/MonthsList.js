import React from 'react';

const MonthsList = (props) => {
    const {months} = props;
    return (
        <div className="months">
            {
                months.map(month => {
                    return month.monthName;
                })
            }

        </div>
    )
}

export default MonthsList;
