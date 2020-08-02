import React, {Component} from 'react';

class Month extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: ''
        }
    }

    render() {
        const {monthName, countUsers} = this.props;
        return (
            <div>
                {monthName} {countUsers}
            </div>
        )
    }
}

export default Month;
