import React, { Component } from 'react';

class Digital_display extends Component {
  constructor(props) {
    super(props);
  //  this.state = {digit: [0] };


  this.digit_images = [
    "digit_images/digit_0.png",
    "digit_images/digit_1.png",
    "digit_images/digit_2.png",
    "digit_images/digit_3.png",
    "digit_images/digit_4.png",
    "digit_images/digit_5.png",
    "digit_images/digit_6.png",
    "digit_images/digit_7.png",
    "digit_images/digit_8.png",
    "digit_images/digit_9.png"
  ]



  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }


  render() {

   

    // SECONDS ELAPSED
    let sec = this.props.seconds
    let minsx = Math.floor(sec/600)
    let mins = Math.floor(sec/60)
    let secs = Math.floor(sec % 60 / 10)
    let secs0 = (sec % 10)

    return (
      <div>
        <div>
                {false && this.digit_images.map((image, i) =>  <div id={"digit_" + i} ><img src={image} alt=""  /></div> )} 
              
                {true && <span id="digit_0" ><img src={this.digit_images[minsx]} alt="" /></span> } 
                {true && <span id="digit_1" ><img src={this.digit_images[mins]} alt=""  /></span> } 
                <span  ></span>
                {true && <span id="digit_2" ><img src={this.digit_images[secs]} alt=""  /></span> } 
                {true && <span id="digit_3" ><img src={this.digit_images[secs0]} alt=""  /></span> } 

        </div>

      </div>
    );
  }
}
export default Digital_display;







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
