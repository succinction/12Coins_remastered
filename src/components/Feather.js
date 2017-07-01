import React, { Component } from 'react';

class Feather extends Component {
    render() {
        return (
               	<div className="feather" id={this.props.id} >
               		<img id={"fe" + this.props.my_index} src="coin_images/white_feather.png" alt=""  />
               	</div>
        );
    }
}

export default Feather;





