import React, { Component } from 'react';

class Controls extends Component {

    constructor(props) {
        super(props);

        this.func = this.props.load_fn;

        this.loadGame = () => {
            let gameIDin = document.getElementById('gameIdInput').value;
            // console.log( gameIDin);
            this.func(gameIDin)
        }



    }



    render() {


        let measure_num = 0;
        return (
            <div id="controls">
                REPLAY:
                <input type="text" name="gameID" id="gameIdInput" />
                <button id="load" className="btn" onClick={this.loadGame}> LOAD </button>


                Player: {this.props.player_name} |
                Game Number: {this.props.lastGame} |


                {/*<button id="play" className="btn" onClick={'#'}> play > </button>*/}
                {/*<button id="play" className="btn" onClick={this.props.play_fn}> play > </button>*/}
                <strong> {measure_num} </strong>
                {/*<button id="backwards" className="btn" onClick={'#'}>  back </button> |*/}
                <button id="backwards" className="btn" onClick={this.props.backwards_fn}> back </button> |
                {/*<button id="forwards" className="btn" onClick={'#'}> next > </button>*/}
                <button id="forwards" className="btn" onClick={this.props.forwards_fn}> next </button>


            </div>

        );
    }
}

export default Controls;
