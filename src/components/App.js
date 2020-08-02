import React, {Component} from 'react';
import ApiService from "../services/api";
import UserList from "../components/UsersList";
import MonthsList from "../components/MonthsList";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            months: [
                {monthIndex: 0, monthName: 'January', countUsers: 0},
                {monthIndex: 1, monthName: 'February', countUsers: 0},
                {monthIndex: 2, monthName: 'March', countUsers: 0},
                {monthIndex: 3, monthName: 'April', countUsers: 0},
                {monthIndex: 4, monthName: 'May', countUsers: 0},
                {monthIndex: 5, monthName: 'June', countUsers: 0},
                {monthIndex: 6, monthName: 'July', countUsers: 0},
                {monthIndex: 7, monthName: 'August', countUsers: 0},
                {monthIndex: 8, monthName: 'September', countUsers: 0},
                {monthIndex: 9, monthName: 'October', countUsers: 0},
                {monthIndex: 10, monthName: 'November', countUsers: 0},
                {monthIndex: 11, monthName: 'December', countUsers: 0}
            ],
            selectedMonth: null,
            loaded: false,
            error: null
        }
    }

    componentDidMount() {
        ApiService.getUsers()
            .then(res => {
                const users = res.map(user => {
                    return {...user};
                })
                const months = this.state.months.map(month => {
                    const countUsers = this.getUsersByMonth(users, month);
                    return {...month, countUsers};
                });
                this.setState({users});
                this.setState({months});
                this.setState({loaded: true});
            })
            .catch((error) => {
                this.setState({error});
            })
    }

    getUsersByMonth(users, month) {
        return users.filter(user => {
            return new Date(user.dob).getMonth() === month.monthIndex;
        }).length;
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
