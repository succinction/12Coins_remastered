import React, {Component} from 'react';
import Clock from './Clock';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {secondsElapsed: 0};
    }

    tick() {
        this.setState((prevState) => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    reset_time() {
        this.setState(() => ({
            secondsElapsed: 0
        }));
    }

    get_time() {
        let sec = this.state.secondsElapsed;
        let minsx = (Math.floor(sec / 600) > 0) ? Math.floor(sec / 600) : "";
        let mins = Math.floor(sec / 60) % 10;
        let secs = Math.floor(sec % 60 / 10);
        let secs0 = (sec % 10);
        let formatted_time = minsx + "" + mins + ":" + secs + "" + secs0;
        return formatted_time;
    }

    get_seconds() {
        return this.state.secondsElapsed;
    }

    render() {
        return (
            <div id="timer">
                <Clock elapsed={this.state.secondsElapsed}/>
            </div>
        );
    }
}

export default Timer;
