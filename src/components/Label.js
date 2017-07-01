import React, { Component } from 'react';

class Label extends Component {
    render() {
        return (
            <div id={this.props.id} className="label" >
            	{this.props.label}
            </div>
        );
    }
}

export default Label;
