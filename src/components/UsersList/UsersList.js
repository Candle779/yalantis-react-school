import React from 'react';
import User from "../User";

const UserList = ({users}) => {
    return (
        users.map(user => {
            return (
                <User key={user.id} {...user}/>
            )
        })

    )
}
export default UserList;
