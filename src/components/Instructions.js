import React, { Component } from 'react';

class Instructions extends Component {
    render() {
        return (
        <div className="footer" id="instruct">
            <p>
                Measurements are counted by putting the same number of coins on each side of the scale. <br />
                To Win, balance against the Ankh to verify the heavy coin, or the Feather to verify the light coin. <br />
                <span className="copyright">Copyright 2006-2017   Joseph Howard   | <a href="mailto:succinction@gmail.com" >succinction@gmail.com</a>   |   {this.props.version}   |    built in react with gsap</span> 
            </p>
        </div>
        );
    }
}

export default Instructions;
