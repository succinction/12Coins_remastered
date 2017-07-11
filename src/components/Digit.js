import React, { Component } from 'react';

class Digit extends Component {
// PRELOAD IMAGES

  render() {
    return (

          <span id={this.props.digi_id}>
          {/*<span id="digit_3">*/}
              <img src={this.props.digit_image} alt=""/>
          </span>

    );
  }
}

export default Digit;
