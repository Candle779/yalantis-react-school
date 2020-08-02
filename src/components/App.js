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
            selectedMonthIndex: null,
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
            })
            .catch((error) => {
                this.setState({error});
            })
    }

    onSelectedMonthIndexChange = (monthIndex) => {
        this.setState({selectedMonthIndex: monthIndex})
    };

    getUsersByMonth(users, month) {
        return users.filter(user => {
            return new Date(user.dob).getMonth() === month.monthIndex;
        }).length;
    }

    render() {
        const {users, months, selectedMonthIndex} = this.state;
        const selectedMonth = months.find(m => m.monthIndex === selectedMonthIndex);
        const usersList = users.filter((user) => {
            if (selectedMonthIndex === null) {
                return true;
            }
            return Number(new Date(user.dob).getMonth() === selectedMonthIndex);
        });
        return (
            <section className="uk-section uk-section-small uk-section-default uk-margin-top">
                <div className="uk-container uk-container-expand uk-margin-large-bottom">
                    <MonthsList months={months}
                                selectedMonthIndex={selectedMonthIndex}
                                doFilter={this.onSelectedMonthIndexChange}/>
                    <h1>
                        {
                            selectedMonthIndex === null ?
                                'All users' :
                                `Users who have a birthday in ${selectedMonth.monthName}`
                        }
                    </h1>
                    <UserList users={usersList}/>
                </div>
            </section>

        )
    }
}
