import React from 'react';
import User from "../User";

const UserList = ({users}) => {
    return (
        <ul className="uk-comment-list">
            {
                users.map(user => {
                    return (
                        <li key={user.id}>
                            <User  {...user}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default UserList;
