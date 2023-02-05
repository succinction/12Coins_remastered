import scale_0        from './scale_svg/scale_0.svg';
import scale_plate    from './scale_svg/scale_plate.svg';
import spinner    from './scale_svg/spinner.svg';
import cover from './scale_svg/spinner_cover1.svg';
import React, {Component} from 'react';
import {TweenLite, Elastic}  from "gsap";


class Scale extends Component {
    tip_scale = (zero) => {
        // console.log('tip_scale probs.balanced: ',  this.props.balanced)
        let bal = (zero === 0) ? zero : this.props.balanced;
        TweenLite.to("#scale", 2, {rotation: -bal, ease: Elastic.easeOut, transformOrigin: "232px 230px"});
        TweenLite.to("#scale_left_plate", 2, {rotation: bal, ease: Elastic.easeOut});
        TweenLite.to("#scale_right_plate", 2, {rotation: bal, ease: Elastic.easeOut});
        TweenLite.to("#spinner", 2, {rotation: bal * -4, ease: Elastic.easeOut});
    };

    componentDidUpdate(prevProps, prevState) {
        this.tip_scale()
    }

    render() {
        return (
            <div>
                <div className="scale" id="scale">
                    <img className="spinner" id="spinner" src={spinner} alt=""/>
                    <img className="scale_arm" id="scale_arm" src={scale_0} alt=""/>
                    <img className="scale_left_plate" id="scale_left_plate" src={scale_plate} alt=""/>
                    <img className="scale_right_plate" id="scale_right_plate" src={scale_plate} alt=""/>
                    <img className="cover" id="cover" src={cover} alt=""/>
                </div>
            </div>
        );
    }
}

export default Scale;
