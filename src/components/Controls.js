import React, { Component } from 'react';

class Controls extends Component {

//     constructor(props) {
//         super(props);
//     }
// componentDidMount() {
//
// }
// componentDidUpdate(prevProps, prevState) {
//
// }
// componentWillMount() {
//
// }
// componentWillUpdate(nextProps, nextState) {
//
// }
// componentWillReceiveProps(nextProps) {
//
// }
// componentWillUnmount() {
//
// }
// shouldComponentUpdate(nextProps, nextState) {
//     return ;
// }
//Controls

    render() {
        let game_num = 9;
        let measure_num = 1;
        let player_name = "Joe_Howard";
        return (
            <div id="controls">
                REPLAY CONTROLS : |
                Player: {player_name} |
                Game Number: {game_num} |
                {/*<button id="play" className="btn" onClick={'#'}> play > </button>*/}
                {/*<button id="play" className="btn" onClick={this.props.play_fn}> play > </button>*/}
                <strong> {measure_num} </strong>
                {/*<button id="backwards" className="btn" onClick={'#'}>  back </button> |*/}
                {/*<button id="backwards" className="btn" onClick={this.props.backwards_fn}>  back </button> |*/}
                {/*<button id="forwards" className="btn" onClick={'#'}> next > </button>*/}
                {/*<button id="forwards" className="btn" onClick={this.props.forwards_fn}> next > </button>*/}


            </div>

        );
    }
}

export default Controls;
