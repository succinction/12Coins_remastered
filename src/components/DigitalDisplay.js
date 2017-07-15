import React, {Component} from 'react';
import Digit from "./Digit";

class DigitalDisplay extends Component {


    constructor(props) {
        super(props);
        this.state = {
            digi_0: 0,
            digi_1: 0,
            digi_2: 0,
            digi_3: 0
        }

    }


    componentWillReceiveProps(nextProps) {

        let sec = nextProps.seconds;
        let minsx = Math.floor(sec / 600) % 10;
        let mins = Math.floor(sec / 60) % 10;
        let secs = Math.floor(sec % 60 / 10) % 10;
        let secs0 = (sec % 10);

        if (this.state.digi_0 !== minsx) {
            this.setState({digi_0: minsx})
        }

        if (this.state.digi_1 !== mins) {
            this.setState({digi_1: mins})
        }

        if (this.state.digi_2 !== secs) {
            this.setState({digi_2: secs})
        }

        if (this.state.digi_3 !== secs0) {
            this.setState({digi_3: secs0})
        }

    }

    render() {

        return (
            <div className="container">

                <Digit myid="digit_0" source={this.state.digi_0} className="numeral" />
                <Digit myid="digit_1" source={this.state.digi_1} className="numeral" />
                <Digit myid="digit_2" source={this.state.digi_2} className="numeral" />
                <Digit myid="digit_3" source={this.state.digi_3} className="numeral" />


            </div>
        );
    }
}
export default DigitalDisplay;


// var MyDiv = React.createClass({
//   render: function() {
//     var style = {
//       color: 'white',
//       fontSize: 200
//     };
//
//     return <div style={style}> Have a good and productive day! </div>;
//   }
// });


//
// 1 1
// 2 2
// 3 4
// 4 8
// 5 16
// 6 32
// 7 64
// 8 128
// 9 256
// 10 512
// 11 1024
// 12 2048
// 13 4096
// 14 8192
// 15 16384
// 


////// 7
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0]
// [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0]
// [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0]
// [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0]
// [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]
// [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0]
// [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]
// [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0]
// [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]
// [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]
// [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]
// [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]
// [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]


//var n = 3<<14;
//console.log(n)
/*
 1 1
 2 2
 3 4
 4 8
 5 16
 6 32
 7 64
 8 128
 9 256
 10 512
 11 1024
 12 2048
 13 4096
 14 8192
 15 16384
 */
//
// var a = 1;
// var i = 1;
// console.log(i +": "+ a);
// function recursive_bit(arg) {
// //a = a + arg;
//   a += arg;
//   i++;
//   console.log(i +": "+ a);
//   if (i < 20){
//      recursive_bit(a)
//   }
//
// }
//  recursive_bit(a)
//
