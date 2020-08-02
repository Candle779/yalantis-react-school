import React, {Component} from 'react';
import ApiService from "../services/api";
import UserList from "../components/UsersList";
import MonthsList from "./MonthsList/MonthsList";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            months: [
                {monthIndex: 0, monthName: 'January'},
                {monthIndex: 1, monthName: 'February'},
                {monthIndex: 2, monthName: 'March'},
                {monthIndex: 3, monthName: 'April'},
                {monthIndex: 4, monthName: 'May'},
                {monthIndex: 5, monthName: 'June'},
                {monthIndex: 6, monthName: 'July'},
                {monthIndex: 7, monthName: 'August'},
                {monthIndex: 8, monthName: 'September'},
                {monthIndex: 9, monthName: 'October'},
                {monthIndex: 10, monthName: 'November'},
                {monthIndex: 11, monthName: 'December'}
            ]

        }
    }

    componentDidMount() {
        ApiService.getUsers()
            .then(response => {
                this.setState({users: response})
            })
    }

    render() {
        const {users, months} = this.state;
        return (
            <div className="wrapper">
                <MonthsList months={months}></MonthsList>
                <UserList users={users}></UserList>
            </div>
        )
    }
}
