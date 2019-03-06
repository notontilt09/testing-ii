import React from 'react';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <div>
                <h5>Scorer Dashboard</h5>
            </div>
            <div>
                <button onClick={this.props.ball}>Ball</button>
                <button onClick={this.props.strike}>Strike</button>
                <button onClick={this.props.foul}>Foul</button>
                <button onClick={this.props.hit}>Hit</button>
            </div>
            </>
        )
    }
}

export default Dashboard;