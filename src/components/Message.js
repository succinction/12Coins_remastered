import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
        <p className="messenger" id="messenger">
        <span className="title" >TWELVE COINS Puzzle</span>   ::    {this.props.msg}
        </p>
        );
    }
}

export default Message;
