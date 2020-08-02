import React, {Component} from 'react';

class Month extends Component {
    constructor(props) {
        super(props);
    }

    getClassName(countUsers) {
        switch (true) {
            case countUsers < 3:
                return 'uk-button-secondary';
                break;
            case countUsers < 7 && countUsers >= 3:
                return 'uk-button-primary';
                break;
            case countUsers < 11 && countUsers >= 7:
                return 'uk-button-success';
                break;
            case countUsers >= 11:
                return 'uk-button-danger';
                break;
            default:
                return 'uk-button-secondary';

        }
    }

    doFilter = () => {
        this.props.doFilter();
    };

    render() {
        const {monthName, countUsers} = this.props;
        return (
            <button
                className={`uk-button ${this.getClassName(countUsers)}`}
                onMouseOver={this.doFilter}
            >
                {monthName}
            </button>
        )
    }
}

export default Month;
