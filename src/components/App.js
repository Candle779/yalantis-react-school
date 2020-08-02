import React, {Component} from 'react';
import ApiService from "../services/api";
import UserList from "../components/UsersList";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        ApiService.getUsers()
            .then(response => {
                this.setState({users: response})
            })
    }

    render() {
        const {users} = this.state;
        return (
            <div className="wrapper">
                <UserList users={users}></UserList>
            </div>
        )
    }
}
