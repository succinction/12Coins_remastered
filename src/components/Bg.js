import React, { Component } from 'react';
import bg   from './scale_svg/bg.svg';

class Bg extends Component {
    render() {
        return (
			<div className="bg" id="bg" >
				<img src={bg} alt=""  />
			</div>
        );
    }
}

export default Bg;
