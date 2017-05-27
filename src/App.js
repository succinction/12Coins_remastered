import React, {Component} from 'react';
import './App.css';
import Coins from './components/Coins'
import Nav   from './components/Nav'
import Bg    from './components/Bg'
import Instructions    from './components/Instructions'
import Message from './components/Message'
import ScratchPad   from './components/ScratchPad';
import Scale from './components/Scale'
import Timer   from './components/Timer';
import {TweenMax, Power3}  from "gsap";
// import {TweenLite, Power3}  from "gsap";
// import {TweenLite, Elastic, TweenMax, Power3}  from "gsap";

class App extends Component {

    constructor(props) {
        super(props);

        const initial_game = 1;


        const initialNumberOfCoins = 12;
        this.lucky_number = Math.floor(Math.random() * initialNumberOfCoins);
        this.coin_weights = [Number(6), Number(5), Number(7)];
        this.measurementsUsed = 0;
        this.readout = "Find the false coin within three measurements on the scale.";
        this.light_or_heavy = Math.floor(Math.random() * 2) + 1


        this.version = "2.5.0";
        this.state = {
            gameNumber: initial_game,
            labels: true,
            msg: this.readout,
            numberOfCoins: initialNumberOfCoins,
            balanced: 0
        };

        document.onselectstart = function () {
            return false;
        };
        document.body.setAttribute('unselectable', 'on', 0);
        this.reset_location_array = (num) => {
            let numb = (num > 0) ? num : this.state.numberOfCoins;
            // console.log("entered reset_location.. numb :   : ", numb)

            let arr = [0, 0]
            for (let i = 0; i < numb; i++) {
                arr.push(0);
            }
            return arr


        };

        this.coin_location_array = this.reset_location_array();

        this.coin_locations = this.coin_location_array.toString();

        // COLOR WARP
        this.colr = {h: 0, s: 50, l: 100};
        this.element = document.getElementsByTagName("body")[0];
        // /COLOR WARP


    }

    // COLOR WARP
    applyColor = () => {
        this.element.style.backgroundColor = "hsl(" + this.colr.h + "," + this.colr.s + "%," + this.colr.l + "%)";
    }
    end_color = () => {
        TweenMax.to(this.colr, 20, {h: 0, l: 100, onUpdate: this.applyColor});
    }
    // /COLOR WARP

    reset_game = (numbr) => {


        let lucky_number_init = -1;
        this._child_timer.reset_time();
        if (typeof(numbr) === "number") {
            lucky_number_init = Math.floor(Math.random() * numbr);
        } else {

            lucky_number_init = Math.floor(Math.random() * this.state.numberOfCoins);
        }
        this.measurementsUsed = 0;
        this.readout = "Find the false coin within three measurements on the scale.";
        this.lucky_number = lucky_number_init;
        this.light_or_heavy = Math.floor(Math.random() * 2) + 1;
        this.setState({
            gameNumber: this.state.gameNumber + 1,
            msg: this.readout,
        });
        let icons = ["#scale_icon0", "#scale_icon1", "#scale_icon2"]
        TweenMax.to(icons, .5, {autoAlpha: 1, ease: Power3.easeOut});
        TweenMax.to(["#cheat_btn"], 2, {color: "hsl(0, 0%, 100%)"})
        TweenMax.to(["#messenger"], 2, {color: "hsl(0, 0%, 0%)"})

        this.reset_coins(numbr);


    };

    replace_coins = () => {
        this._child.replace_coins()
        this.reset_coins()
    }

    reset_coins = (num) => {

        this.readout = this.coin_locations;
        this.coin_location_array = this.reset_location_array(num);
        this.coin_locations = this.coin_location_array.toString();
        this.readout += " : " + this.coin_locations;
        this.setState({
            msg: this.readout,
            balanced: 0
        });

    }


    /////////////////////////////////////////////////////////////////////////


    balance_scale = (tc) => {
        // console.log("balance_scale << << ARG:tc =  ", tc)
        // console.log(tc)
        // console.log('tc.changedTouches ', tc.changedTouches)
        // console.log(tc.changedTouches[0])
        // console.log(tc.changedTouches[0].clientY)
        let balance_mod = 0;
        if (tc.clientY < 428) {
            let offset = window.innerWidth / 2;
            //console.log("offset: " + offset )

            balance_mod = (tc.clientX < offset) ? 1 : -1;
        } else if (tc.changedTouches && tc.changedTouches[0].clientY < ( (window.screen.height > 428) ? 428 : window.screen.height - 100)) {

            let offset = window.screen.width / 2;
            //console.log("changedTouches  <  offset : " + offset , " y " + tc.changedTouches[0].clientY)
            balance_mod = (tc.changedTouches[0].clientX < offset) ? 1 : -1;
        } else {
            balance_mod = 0;
        }
        let balanced = 0;

        let indexx = Number(tc.target.id.substr(2));
        // console.log("indexx : " + indexx + "  :  ");
        // console.log(tc)
        // console.log(tc.clientX, tc.clientY)
        // console.log(tc.target.id)
        this.coin_location_array[indexx] = balance_mod;


        let coins_on_scale_now = 0;
        let measurement_constituted = 0;
        for (let i = 0; i < this.coin_location_array.length; i++) {
            coins_on_scale_now += Math.abs(this.coin_location_array[i]);
            measurement_constituted += this.coin_location_array[i];
        }


        if (measurement_constituted === 0) {
            // show lucky
            for (let i = 0; i < this.coin_location_array.length; i++) {
                if (i === this.lucky_number) {
                    balanced += this.coin_location_array[i] * this.coin_weights[this.light_or_heavy];
                } else if (i === this.coin_location_array.length - 2) {
                    balanced += this.coin_location_array[i] * this.coin_weights[1];
                } else if (i === this.coin_location_array.length - 1) {
                    balanced += this.coin_location_array[i] * this.coin_weights[2];
                } else {
                    balanced += this.coin_location_array[i] * this.coin_weights[0];
                }

            }
        } else {
            // hide luicky
            for (let i = 0; i < this.coin_location_array.length; i++) {
                if (i === this.coin_location_array.length - 2) {
                    balanced += this.coin_location_array[i] * this.coin_weights[1];
                } else if (i === this.coin_location_array.length - 1) {
                    balanced += this.coin_location_array[i] * this.coin_weights[2];
                } else {
                    balanced += this.coin_location_array[i] * this.coin_weights[0];
                }
            }
        }


        this.setState({
            balanced: balanced,
            msg: Number(tc.target.id.substr(2)) + " clientX: " + tc.clientX
        });
        this.score(measurement_constituted, coins_on_scale_now)
    };


    score = (measurement_constituted, coins_on_scale_now) => {

        let time = this._child_timer.get_time();

        let number_of_coins = this.state.numberOfCoins;
        // console.log('number_of_coins', number_of_coins)

        let coin_locations_now = this.coin_location_array.toString();
        //
        // let coins_on_scale_now = 0;
        // let measurement_constituted = 0;
        // for (let i = 0; i < this.coin_location_array.length; i++) {
        //     coins_on_scale_now += Math.abs(this.coin_location_array[i]);
        //     measurement_constituted += this.coin_location_array[i];
        // }
        //
        //


        // console.log('coins_on_scale_now', coins_on_scale_now)
        // console.log('coin_locations_now', coin_locations_now)
        // console.log('measurement_constituted', measurement_constituted)

        if (measurement_constituted === 0 && coins_on_scale_now > 0 && this.coin_locations !== coin_locations_now) {
            if ((Math.abs(this.coin_location_array[number_of_coins]) === 1 || Math.abs(this.coin_location_array[number_of_coins + 1]) === 1) && coins_on_scale_now === 2) {
                if (this.state.balanced === 0) {
                    if (this.measurementsUsed < 3) {
                        // COLOR WARP
                        TweenMax.to(this.colr, 15, {
                            h: -360,
                            l: 50,
                            onUpdate: this.applyColor,
                            onComplete: this.end_color,
                            yoyo: true,
                            repeat: 2
                        });
                        // /COLOR WARP
                        this.readout = 'You Win! ' + number_of_coins + ' Coins in ' + this.measurementsUsed + ' of 3 measurements! ' + time;
                    } else if (this.measurementsUsed < 4) {
                        // COLOR WARP
                        TweenMax.to(this.colr, 20, {
                            h: 360,
                            l: 50,
                            onUpdate: this.applyColor,
                            onComplete: this.end_color,
                            yoyo: true,
                            repeat: 2
                        });
                        // /COLOR WARP
                        this.readout = 'You Win! ' + number_of_coins + ' Coins in ' + this.measurementsUsed + ' of 3 measurements! ' + time;
                    } else {
                        this.readout = 'Correct, but it took you ' + this.measurementsUsed + ' of 3 measurements. ' + time;
                        if (this.measurementsUsed === 4) {

                        }
                    }
                } else {
                    this.measurementsUsed++;
                    this.readout = 'Oops. Wrong. ' + this.measurementsUsed + ' of 3 measurements used. ' + time;

                    TweenMax.to("#scale_icon" + (this.measurementsUsed - 1), .5, {
                        autoAlpha: 0.2,
                        ease: Power3.easeOut
                    });


                }
            } else {
                this.measurementsUsed++;
                // if (this.measurementsUsed === 1) {
                //     //attempts[number_of_coins]++;
                // }
                this.readout = this.measurementsUsed + ' of 3 measurements used.';

                TweenMax.to("#scale_icon" + (this.measurementsUsed - 1), .5, {autoAlpha: 0.2, ease: Power3.easeOut});

                // if (this.measurementsUsed > 5) {
                // } else if (this.measurementsUsed > 3) {
                // } else if (this.measurementsUsed === 3) {
                // }
            }
        }
        this.coin_locations = coin_locations_now;


        this.setState({
            // balanced: balancedv,
            // msg: Number(tc.target.id.substr(2)) + " clientX: " + tc.clientX
            msg: this.readout
        })
        // this.setState({msg: this.readout});
        // this.tip_scale();
    };


/////////////////////////// BUTTONS //////////////////////////////////////////
    show_cheat = () => {
        //console.log("Cheating")
        let lucky_label = ("#coin" + this.lucky_number )
        TweenMax.to(lucky_label, .4, {y: "-=30"})
        TweenMax.to(["#messenger", "#cheat_btn"], 2, {color: "hsl(0, 80%, 60%)"})
    };


    coins_3 = () => {
        this.setState({
            numberOfCoins: 3
        });
        this.reset_game(3)
    };
    coins_6 = () => {
        this.setState({
            numberOfCoins: 6
        });
        this.reset_game(6)
    };
    coins_9 = () => {
        this.setState({
            numberOfCoins: 9
        });
        this.reset_game(9)
    };
    coins_10 = () => {
        this.setState({
            numberOfCoins: 10
        });
        this.reset_game(10)
    };
    coins_11 = () => {
        this.setState({
            numberOfCoins: 11
        });
        this.reset_game(11)
    };
    coins_12 = () => {
        this.setState({
            numberOfCoins: 12
        });
        this.reset_game(12)
    };


    toggle_labels = () => {
        this.setState({
            labels: !this.state.labels
        });
        // console.log('labels: !this.state.labels : ', this.state.labels)

    };


///////////////////////////////////////////////////////////////////////////////
    render() {

        let TRUE = true;
        return (
            <div className="App" id="app_id">

                {TRUE && <Bg />}
                {TRUE && <Scale balanced={this.state.balanced}/>}

                {TRUE && <Timer ref={(child) => {
                    this._child_timer = child;
                }}/>}

                {TRUE && <Instructions version={this.version}/>}
                {TRUE && <Message msg={this.state.msg} className="messenger" id="messenger"/>}


                <Nav className="nav" coins_3_fn={this.coins_3} coins_6_fn={this.coins_6} coins_9_fn={this.coins_9}
                     coins_10_fn={this.coins_10} coins_11_fn={this.coins_11} coins_12_fn={this.coins_12}
                     coins_13_fn={this.coins_13} coins_14_fn={this.coins_14} coins_15_fn={this.coins_15}
                     replace_fn={this.replace_coins} reset_fn={this.reset_game} cheat_fn={this.show_cheat}
                     label_fn={this.toggle_labels}/>

                <Coins ref={(child) => {
                    this._child = child;
                }} gameNumber={this.state.gameNumber} numberOfCoins={this.state.numberOfCoins}
                       label={this.state.labels} balance_func={this.balance_scale} resetgame_fn={this.reset_game}/>


                {TRUE && <ScratchPad version={this.version}/> }
            </div>

        );
    }
}

export default App;