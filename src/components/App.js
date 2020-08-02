import React, {Component} from 'react';
import ApiService from "../services/api";

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
        return (
            <div className="wrapper">
                Yalantis
            </div>
        )

    }
}
