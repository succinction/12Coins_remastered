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
import {TweenMax, Power3}  from 'gsap';
import axios from 'axios';
import Controls from "./components/Controls";
const querystring = require('query-string');

class App extends Component {
    constructor(props) {
        super(props);
        this.gameNumber = 1;
        const initialNumberOfCoins = 9;
        this.numberOfCoins = initialNumberOfCoins;
        this.lucky_number = Math.floor(Math.random() * initialNumberOfCoins);
        this.coin_weights = [Number(6), Number(5), Number(7)];
        this.measurementsUsed = 0;
        this.readout = "Find the false coin within three measurements on the scale.";
        this.light_or_heavy = Math.floor(Math.random() * 2) + 1;

        this.login_fn = (response_name) => {

            let name = localStorage.getItem("name");

            if (name === null || name === "null") {
                name = 'guest';
                this.userName = name;
                // localStorage.setItem("name", name);
            }

            if (response_name !== null) {
                if (response_name !== name ){
                    name = response_name;
                    this.userName = name;
                    this.setState({
                        userName: this.userName
                    })
                }
            }
            localStorage.setItem("name", name);
            return name
        };

        this.userName = this.login_fn(null);

        // localStorage.setItem("name", name);
        // this.userName = "Guest_63";
        this.lastSavedGame = 0;

        this.state = {
            gameNumber: this.gameNumber,
            userName: this.userName,
            replayObject: [],
            rePlayMode: false,
            lastSavedGame: this.lastSavedGame,
            labels: true,
            msg: this.readout,
            numberOfCoins: this.numberOfCoins,
            balanced: 0
        };

        document.onselectstart = function () {
            return false;
        };
        document.body.setAttribute('unselectable', 'on', 0);

        this.cheated = false;

        this.gameSaved = 0;

        this.rePlayMode = false;

        this.renew_game_object = () => {
            let sign = (this.light_or_heavy > 1) ? "+" : "-";
            return {
                userName: this.userName,
                gameNumber: this.gameNumber,
                gameType: this.state.numberOfCoins,
                falseCoin: this.lucky_number + sign,
                numberOfMeasurements: 0,
                finalTime: 0,
                measurements: []
            }
        };
        this.reset_location_array = (num) => {
            let numb = (num > 0) ? num : this.state.numberOfCoins;
            let arr = [0, 0];
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
//////////////////////////////////////////////////////////////////////////////////////
        this.gameObject = this.renew_game_object();
//////////////////////////////////////////////////////////////////////////////////////
    }

    // COLOR WARP
    applyColor = () => {
        this.element.style.backgroundColor = "hsl(" + this.colr.h + "," + this.colr.s + "%," + this.colr.l + "%)";
    };
    end_color = () => {
        TweenMax.to(this.colr, 6, {h: 0, l: 100, onUpdate: this.applyColor});
    };
    // /COLOR WARP


//////////////////////////////////////////////////////////////////////////////////////
    updateGameObject = () => {

        let measuretime = this._child_timer.get_time();
        let ankh_xy = [parseInt(document.getElementById("ankh")._gsTransform.x, 10), parseInt(document.getElementById("ankh")._gsTransform.y, 10)];
        let feather_xy = [parseInt(document.getElementById("feather")._gsTransform.x, 10), parseInt(document.getElementById("feather")._gsTransform.y, 10)];

        let push_position = {'time': measuretime, 'ankh': ankh_xy, 'feather': feather_xy};
        for (let i = this.state.numberOfCoins - 1; i >= 0; i--) {
            const this_coin = document.getElementById('coin' + i);
            const coin_xy = [parseInt(this_coin._gsTransform.x, 10), parseInt(this_coin._gsTransform.y, 10)];
            push_position['coin' + i] = coin_xy;
        }

        this.gameObject.numberOfMeasurements = this.measurementsUsed;
        this.gameObject.finalTime = measuretime;
        this.gameObject.gameType = this.state.numberOfCoins;
        this.gameObject.measurements.push(push_position);
    };


//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
    // REPLAY OBJECT:
    // PLAYER NAME
    // GAME NUMBER
    // DATE
    // MEASUREMENTS


    // REPLAY MODE

    enterReplay = (gameID) => {

        // console.log('enterReplay: ', gameID);

        // INTRO REPLAY CONTROLS

        // let replay = () => {
        //     this.rePlayMode = true;
        // };


        let saveState = (data_user, data_id, response_data) => {
            this.setState({
                userName: data_user,
                lastSavedGame: data_id,
                rePlayMode: true,
                replayObject: response_data
            });
        };

        // LOAD GAME THROUGH AJAX

        axios({
            method: 'get',
            headers: {'Content-Type': 'application/json'},
            // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: 'http://127.0.0.1:8000/api/game/' + gameID
            // data: dat

        }).then(function (response) {
            let responsedata = JSON.parse(response.data.measurements);
            saveState(response.data.user, response.data.id, responsedata)
        });


    };


    backward_replay = () => {
        console.log('backward_replay');
        console.log(this.state.replayObject[0])

    };

    forward_replay = () => {
        console.log('forward_replay');
        console.log(this.state.replayObject[1])

    };


//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
    //  SAVE GAMEOBJECT


    saveGameObject = (used, time, score, dur) => {

        if (this.gameSaved === this.gameObject.gameNumber) {
            return;
        }

        let change_name = (arg) => {
            // console.log(arg);
            if (this.userName !== arg) {
                this.login_fn(arg)
                this.userName = arg;
                this.gameObject.userName = arg;
            }
        };

        let SavedGame = (gameID, argname) => {

            if (this.state.userName !== argname) {
                this.setState({
                    userName: argname,
                    lastSavedGame: gameID
                });

                this.login_fn(argname)


            } else {
                this.setState({
                    lastSavedGame: gameID
                });
            }

        };

        let cheated = (this.cheated) ? 'True' : 'False';
        let scoretime = (this.cheated) ? time + "-cheat" : time;
        let thescore = (this.cheated) ? 0 : score;

        let dat = querystring.stringify(
            {
                userName: this.gameObject.userName,
                won: thescore,
                duration: dur,
                cheat: cheated,
                gameNumber: this.gameObject.gameNumber,
                gameType: this.gameObject.gameType,
                numberOfMeasurements: used,
                finalTime: scoretime,
                falseCoin: this.gameObject.falseCoin,
                measurements: JSON.stringify(this.gameObject.measurements),
            }
        );

        axios({
            method: 'post',
            // headers: {'Content-Type': 'application/json'},
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: 'http://127.0.0.1:8000/api/savegame/',
            data: dat

        }).then(function (response) {
            change_name(response.data.newGuest);
            SavedGame(response.data.gameID, response.data.newGuest)
        });

        this.gameSaved = this.gameObject.gameNumber


    };

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
    reset_game = (numbr) => {
        // console.log("number passed : ", numbr)
        if (typeof(numbr) !== "number") {
            numbr = this.state.numberOfCoins
        }

        if (this.measurementsUsed > 0) {
            this.saveGameObject(this.measurementsUsed, "0:00", 0, 0);
        }

        let lucky_number_init = -1;
        this.cheated = false;
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
        this.gameNumber++;
        let icons = ["#scale_icon0", "#scale_icon1", "#scale_icon2"];
        TweenMax.to(icons, .5, {autoAlpha: 1, ease: Power3.easeOut});
        TweenMax.to(["#cheat_btn"], 2, {color: "hsl(0, 0%, 100%)"});
        TweenMax.to(["#messenger"], 2, {color: "hsl(0, 0%, 0%)"});

        this.setState({
            numberOfCoins: numbr,
            gameNumber: this.gameNumber,
            msg: this.readout,
        });

        this.reset_coins(numbr);

        // this.coin_location_array = this.reset_location_array(numbr);
        // this.coin_locations = this.coin_location_array.toString();

        this.gameObject = this.renew_game_object();

    };
    replace_coins = () => {
        this._child.replace_coins();
        this.reset_coins()
    };
    reset_coins = (num) => {
        // this.readout = this.coin_locations;
        this.coin_location_array = this.reset_location_array(num);
        this.coin_locations = this.coin_location_array.toString();
        // this.readout += " : " + this.coin_locations;
        this.setState({
            // msg: this.readout,
            balanced: 0
        });
    }
    /////////////////////////////////////////////////////////////////////////
    balance_scale = (tc) => {
        let balance_mod = 0;
        if (tc.clientY < 428) {
            let offset = window.innerWidth / 2;
            balance_mod = (tc.clientX < offset) ? 1 : -1;
        } else if (tc.changedTouches && tc.changedTouches[0].clientY < ( (window.screen.height > 428) ? 428 : window.screen.height - 100)) {
            let offset = window.screen.width / 2;
            balance_mod = (tc.changedTouches[0].clientX < offset) ? 1 : -1;
        } else {
            balance_mod = 0;
        }
        let balanced = 0;
        let indexx = Number(tc.target.id.substr(2));
        this.coin_location_array[indexx] = balance_mod;
        let coins_on_scale_now = 0;
        let measurement_constituted = 0;
        for (let i = 0; i < this.coin_location_array.length; i++) {
            coins_on_scale_now += Math.abs(this.coin_location_array[i]);
            measurement_constituted += this.coin_location_array[i];
        }
        if (measurement_constituted === 0) {
            /////
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
            // hide lucky
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
        let duration = this._child_timer.get_seconds();
        let number_of_coins = this.state.numberOfCoins;
        let coin_locations_now = this.coin_location_array.toString();
        //
        if (measurement_constituted === 0 && coins_on_scale_now > 0 && this.coin_locations !== coin_locations_now) {
            // SCALE BALANCED, SO UPDATE GAMEOBJECT
            this.updateGameObject();
            if ((Math.abs(this.coin_location_array[number_of_coins]) === 1 || Math.abs(this.coin_location_array[number_of_coins + 1]) === 1) && coins_on_scale_now === 2) {
                if (this.state.balanced === 0) {
                    if (this.measurementsUsed < 3) {
                        // WIN
                        // COLOR WARP
                        TweenMax.to(this.colr, 2, {
                            h: -360,
                            l: 50,
                            onUpdate: this.applyColor,
                            onComplete: this.end_color,
                            yoyo: true,
                            repeat: 2
                        });
                        // /COLOR WARP
                        this.readout = 'You Win! ' + number_of_coins + ' Coins in ' + this.measurementsUsed + ' of 3 measurements! ' + time;

                        // SAVE GAME PROCEDURE

                        // IF USER IS ANONYMOUS
                        // // ASK FOR A NAME TO ENTER ON THE LEADER BOARD
                        // SAVE VIA AJAX CALL
                        // //
                        this.saveGameObject(this.measurementsUsed, time, 1, duration);


                    } else if (this.measurementsUsed < 4) {
                        // WIN
                        // COLOR WARP
                        TweenMax.to(this.colr, 4, {
                            h: 360,
                            l: 50,
                            onUpdate: this.applyColor,
                            onComplete: this.end_color,
                            yoyo: true,
                            repeat: 2
                        });
                        // /COLOR WARP
                        this.readout = 'You Win! ' + number_of_coins + ' Coins in ' + this.measurementsUsed + ' of 3 measurements! ' + time;

                        // SAVE GAME
                        this.saveGameObject(this.measurementsUsed, time, 1, duration);


                    } else {
                        this.readout = 'Correct, but it took you ' + this.measurementsUsed + ' of 3 measurements. ' + time;
                        this.saveGameObject(this.measurementsUsed, time, 0, duration);
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
                this.readout = this.measurementsUsed + ' of 3 measurements used.';
                TweenMax.to("#scale_icon" + (this.measurementsUsed - 1), .5, {autoAlpha: 0.2, ease: Power3.easeOut});
            }
        }
        this.coin_locations = coin_locations_now;


        ////////
        this.setState({
            msg: this.readout
        })
        ///////
    };
/////////////////////////// BUTTONS //////////////////////////////////////////
    show_cheat = () => {
        //console.log("Cheating")
        let lucky_label = ("#coin" + this.lucky_number );
        TweenMax.to(lucky_label, .4, {y: "-=30"});
        TweenMax.to(["#messenger", "#cheat_btn"], 2, {color: "hsl(0, 80%, 60%)"});

        this.cheated = true;

    };


    //////////////////////////////////////////////
    // coins_ = (num) => {
    //     this.setState({
    //         numberOfCoins: num
    //     });
    //     this.reset_game(num)
    // };
    //////////////////////////////////////////////
    // THESE ARE VERBOSE EXPLICITLY REFERENCED CALLBACKS FOR GOOD REASON
    coins_3 = () => {
        this.reset_game(3)
    };
    coins_6 = () => {
        this.reset_game(6)
    };
    coins_9 = () => {
        this.reset_game(9)
    };
    coins_10 = () => {
        this.reset_game(10)
    };
    coins_11 = () => {
        this.reset_game(11)
    };
    coins_12 = () => {
        this.reset_game(12)
    };
    toggle_labels = () => {
        this.setState({
            labels: !this.state.labels
        });
        // console.log('labels: !this.state.labels : ', this.state.labels)
    };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // shouldComponentUpdate(nextProps, nextState) {
    //     return true;
    // }


    render() {
        let TRUE = true;
        return (
            <div className="App" id="app_id">

                {TRUE && <Bg />}

                {TRUE && <Scale balanced={this.state.balanced}/>}

                {TRUE && <Timer ref={(child) => {
                    this._child_timer = child;
                }}/>}

                {TRUE && <Instructions />}

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

                <Controls lastGame={this.state.lastSavedGame} player_name={this.state.userName}
                          backwards_fn={this.backward_replay} forwards_fn={this.forward_replay}
                          load_fn={this.enterReplay}/>

                {TRUE && <ScratchPad user_name={this.state.userName} last_game={this.state.lastSavedGame}/> }
            </div>
        );
    }
}

export default App;
