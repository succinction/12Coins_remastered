import React, { Component } from 'react';
// import {TweenMax}  from "gsap";

class Feather extends Component {

    //
    // static componentDidMount (callback) {
    // 	//console.log("coin componentDidMount < ")
    // 	const el = ".coin";
    //     TweenMax.fromTo(el, 1, {rotation: 0, opacity: 0}, {rotation: 35, opacity: 1, onComplete: callback});
    // }

    render() {

    	//console.log("render < ");


        return (


               	<div className="feather" id={this.props.id} >
               		<img id={"fe" + this.props.my_index} src="coin_images/white_feather.png" alt=""  />
               	</div>
        );
    }
}

export default Feather;





