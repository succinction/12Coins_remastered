import React, {Component} from 'react';
import scale_icon from './scale_svg/scale_icon.svg';
import {Power3, TimelineLite}  from "gsap";
class Nav extends Component {

    componentDidMount() {
        const nav_id = ["#restart_btn", "#label_btn", "#cheat_btn", "#replace_btn", "#coins_3_btn", "#coins_6_btn", "#coins_9_btn", "#coins_10_btn", "#coins_11_btn", "#coins_12_btn", "#coins_13_btn", "#coins_14_btn", "#coins_15_btn", "#scale_icon0", "#scale_icon1", "#scale_icon2"];
        const tl = new TimelineLite();
        tl.from(nav_id[0], .9, {y: -100, autoAlpha: 0, ease: Power3.easeOut})
            .from(nav_id[1], .9, {y: -100, autoAlpha: 0, ease: Power3.easeOut}, "-=.7")
            .from(nav_id[2], .9, {y: -100, autoAlpha: 0, ease: Power3.easeOut}, "-=.7")
            .from(nav_id[3], .9, {y: -50, autoAlpha: 0, ease: Power3.easeOut}, "-=.7")
            .from(nav_id[4], .9, {y: -50, autoAlpha: 0, ease: Power3.easeOut}, "-=.7")
            .from(nav_id[5], .8, {y: -50, autoAlpha: 0, ease: Power3.easeOut}, "-=.7")
            .from(nav_id[6], .8, {y: -50, autoAlpha: 0, ease: Power3.easeOut}, "-=.7")
            .from(nav_id[7], .8, {y: -50, autoAlpha: 0, ease: Power3.easeOut}, "-=.7")
            .from(nav_id[8], .8, {y: -50, autoAlpha: 0, ease: Power3.easeOut}, "-=.7")
            .from(nav_id[9], .8, {y: -50, autoAlpha: 0, ease: Power3.easeOut}, "-=.7")
            .from(nav_id[10], .8, {y: -50, autoAlpha: 0, ease: Power3.easeOut}, "-=.7")
            .from(nav_id[11], .8, {y: -50, autoAlpha: 0, ease: Power3.easeOut}, "-=.7")
            .from(nav_id[12], .8, {y: -50, autoAlpha: 0, ease: Power3.easeOut}, "-=.7")
            .from(nav_id[13], .8, {y: -50, autoAlpha: 0, ease: Power3.easeOut}, "-=.7")
            .from(nav_id[14], .8, {y: -50, autoAlpha: 0, ease: Power3.easeOut}, "-=.7")
            .from(nav_id[15], .8, {y: -50, autoAlpha: 0, ease: Power3.easeOut}, "-=.7")
    }

    render() {
        const number_buttons = true;
        const to_15 = (false) ? number_buttons : false;
        const TRUE = true;
        return (
            <div className="nav">
                {TRUE && <button id="restart_btn" className="btn" onClick={this.props.reset_fn}>Restart</button> }
                {TRUE && <button id="label_btn" className="btn" onClick={this.props.label_fn}>Labels</button> }
                {TRUE && <button id="cheat_btn" className="btn" onClick={this.props.cheat_fn}>Cheat</button> }
                {TRUE && <button id="replace_btn" className="btn" onClick={this.props.replace_fn}>Replace</button> }
                {number_buttons && <button id="coins_3_btn" className="btn" onClick={this.props.coins_3_fn}>3</button> }
                {number_buttons && <button id="coins_6_btn" className="btn" onClick={this.props.coins_6_fn}>6</button> }
                {number_buttons && <button id="coins_9_btn" className="btn" onClick={this.props.coins_9_fn}>9</button> }
                {number_buttons &&
                <button id="coins_10_btn" className="btn" onClick={this.props.coins_10_fn}>10</button> }
                {number_buttons &&
                <button id="coins_11_btn" className="btn" onClick={this.props.coins_11_fn}>11</button> }
                {number_buttons &&
                <button id="coins_12_btn" className="btn" onClick={this.props.coins_12_fn}>12</button> }
                {to_15 && <button id="coins_13_btn" className="btn" onClick={this.props.coins_13_fn}>13</button> }
                {to_15 && <button id="coins_14_btn" className="btn" onClick={this.props.coins_14_fn}>14</button> }
                {to_15 && <button id="coins_15_btn" className="btn" onClick={this.props.coins_15_fn}>15</button> }
                {TRUE && <img className="scale_icon" id="scale_icon0" src={scale_icon} alt=""/>}
                {TRUE && <img className="scale_icon" id="scale_icon1" src={scale_icon} alt=""/>}
                {TRUE && <img className="scale_icon" id="scale_icon2" src={scale_icon} alt=""/>}
            </div>
        );
    }
}

export default Nav;
