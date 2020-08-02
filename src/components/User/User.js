import React from 'react';

const User = (props) => {
    const {firstName, lastName, dob} = props;
    return (
        <div>
            {firstName} {lastName} {dob}
        </div>
    )
}

export default User;
