import React, { Component } from 'react';
import DigitalDisplay from "./DigitalDisplay";


class Clock extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {secondsElapsed: 0};
  // }
  //
  // tick() {
  //   this.setState((prevState) => ({
  //     secondsElapsed: prevState.secondsElapsed + 1
  //   }));
  // }
  //
  // componentDidMount() {
  //   this.interval = setInterval(() => this.tick(), 1000);
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {
    return (


        <div>
                <DigitalDisplay seconds={this.props.elapsed}/>
                {/*<DigitalDisplay seconds={this.state.secondsElapsed}/>*/}
        </div>



    );
  }

}

export default Clock;

