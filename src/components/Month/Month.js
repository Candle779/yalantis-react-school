import React, {Component} from 'react';

class Month extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: ''
        }
    }

    render() {
        const {monthName} = this.props;
        return (
            <div>
                {monthName}
            </div>
        )
    }
}

export default Month;
