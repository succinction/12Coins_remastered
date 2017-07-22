import React, {Component} from 'react';

class Digit extends Component {
    constructor(props) {
        super(props);

        this.digit_images = [
            "digit_images/digit_0.gif",
            "digit_images/digit_1.gif",
            "digit_images/digit_2.gif",
            "digit_images/digit_3.gif",
            "digit_images/digit_4.gif",
            "digit_images/digit_5.gif",
            "digit_images/digit_6.gif",
            "digit_images/digit_7.gif",
            "digit_images/digit_8.gif",
            "digit_images/digit_9.gif"
        ]

    }

    componentWillReceiveProps(nextProps) {

        document.getElementById(this.props.myid + "_digit_" + this.props.source).style.visibility = "hidden";
        document.getElementById(this.props.myid + "_digit_" + nextProps.source).style.visibility = "visible";

    }


    componentDidMount() {

        document.getElementById(this.props.myid + "_digit_0").style.visibility = "visible";
    }


    render() {
        return (

            <div className="numeral">


                {this.digit_images.map((image, i) =>  <img id={this.props.myid + "_digit_" + i} width='24' key={i} src={image} alt="" className="imag"  /> )}


                {/*<img id={this.props.myid + "_digit_0"} key='0' src={this.digit_images[0]} alt="" className="imag" style={{visibility:"visible"}} />*/}
                {/*<img id={this.props.myid + "_digit_1"} key='1' src={this.digit_images[1]} alt="" className="imag" style={{visibility:"hidden"}}  />*/}
                {/*<img id={this.props.myid + "_digit_2"} key='2' src={this.digit_images[2]} alt="" className="imag" style={{visibility:"hidden"}}  />*/}
                {/*<img id={this.props.myid + "_digit_3"} key='3' src={this.digit_images[3]} alt="" className="imag" style={{visibility:"hidden"}}  />*/}
                {/*<img id={this.props.myid + "_digit_4"} key='4' src={this.digit_images[4]} alt="" className="imag" style={{visibility:"hidden"}}  />*/}
                {/*<img id={this.props.myid + "_digit_5"} key='5' src={this.digit_images[5]} alt="" className="imag" style={{visibility:"hidden"}}  />*/}
                {/*<img id={this.props.myid + "_digit_6"} key='6' src={this.digit_images[6]} alt="" className="imag" style={{visibility:"hidden"}}  />*/}
                {/*<img id={this.props.myid + "_digit_7"} key='7' src={this.digit_images[7]} alt="" className="imag" style={{visibility:"hidden"}}  />*/}
                {/*<img id={this.props.myid + "_digit_8"} key='8' src={this.digit_images[8]} alt="" className="imag" style={{visibility:"hidden"}}  />*/}
                {/*<img id={this.props.myid + "_digit_9"} key='9' src={this.digit_images[9]} alt="" className="imag" style={{visibility:"hidden"}}  />*/}


                {/*<img src={this.digit_images[this.props.source]} alt=""/>*/}
            </div>

        );
    }
}

export default Digit;
