import React, { Component } from 'react';
import DigitalDisplay from "./DigitalDisplay";


class Clock extends Component {


  render() {
    return (


        <div>
                <DigitalDisplay seconds={this.props.elapsed}/>
        </div>



    );
  }

}

export default Clock;

