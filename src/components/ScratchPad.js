import React, { Component } from 'react';
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";
import Accordion from "./Accordion";
import axios from 'axios';

class ScratchPad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response_data: { 'init': 'init' },
            controler: { identifier: "", group: "" },
        }


    }

    //     componentDidUpdate(prevProps, prevState) {
    //         console.log("componentDidUpdate>>>")
    //         // this.getLeaderBoard(this.props.user_name)
    //     }

    componentWillReceiveProps(nextProps) {
        // console.log("ScratchPad: nextProps.last_game: ")
        // console.log("*>>> ", nextProps.last_game, this.props.last_game)
        // console.log("ScratchPad: nextProps.user_name: ")
        // console.log("*>>> ", nextProps.user_name, this.props.user_name)
        if (this.props.user_name !== nextProps.user_name || this.props.last_game !== nextProps.last_game) {
            this.getLeaderBoard(this.props.user_name)
        }
        // console.log("return", this.props.user_name !== nextProps.user_name || this.props.last_game !== nextProps.last_game)
    }


    getLeaderBoard(username) {
        // console.log("username: " + username)
        let setData = (responsedat) => {
            // console.log("THIS MEANS AJAX SUCCESS RETURN")
            // console.log("setData : responsedat : ", responsedat)
            // console.log("setData : responsedat : ", responsedat.data)
            // console.log("setData : responsedat : ", responsedat.data.yourStats)
            // console.log("setData : responsedat : ", responsedat.data.yourBestGames)
            // console.log("setData : responsedat : ", responsedat.data.yourLastGames)
            this.setState({
                response_data: responsedat.data
            });
        };

        let url_is = 'http://127.0.0.1:8000/api/leaderboard/' + username;
        // console.log('getLeaderBoard url: ', url_is);
        // console.log('getLeaderBoard ... username: ', this.props.user_name);

        axios({
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
            // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: url_is
            // data: dat
        }).then(function (response) {
            setData(response)
        });

    }

    groupFn = (o) => {
        this.setState({ controler: { identifier: o.myID, group: o.groupID } })
    }

    callbackFn = (bool) => {
        // Do some side effect
        // console.log("callbackFn(" + bool + ")")
    }

    render() {
        return (
            <div className="scratch">

                {/*LOGIN NOT FULLY IMPLEMENTED*/}
                <Login />


                <h2>Discover the False Coin in <stroing> 3 </stroing> Measurements</h2>

                <button id="accordionClicker0" >LEADER BOARD (In beta, nothing guaranteed.)</button>

                <Accordion ID="me_0" actionID="accordionClicker0" groupID="AAA" groupFn={this.groupFn} controler={this.state.controler} callbackFn={this.callbackFn}  >
                    <LeaderBoard data={this.state.response_data} />
                </Accordion>

                {/* <button id="accordionClicker2" > */}
                    <h3>How to play:</h3>
                {/* </button> */}
                {/* <Accordion ID="me_2" actionID="accordionClicker2" groupID="AAA" groupFn={this.groupFn} controler={this.state.controler} callbackFn={this.callbackFn}  > */}
                    Drag the coins onto the scale. <br />
                    To win, balance the false coin against the Ank or Feather after measuring only 3 times <br />
                    Balance against the Ankh if the false coin is Heavy<br />
                    Balance against the Feather if the false coin is Light<br />

                    One random Coin will be False (randomly Light or Heavy)<br />

                    <ul>
                        <li>Good Coins = Good Coins</li>
                        <li>Feather = False Light Coin</li>
                        <li>Ankh = False Heavy Coin</li>
                    </ul>
                    To Win, you will need to discover which coin is false, and if it is light or heavy, and then you will
                balance against the Ankh to verify the heavy coin, or the Feather to verify the light coin.<br />
                    Measurements are counted by putting the same number of coins on each side of the scale. <br />
                    Since measurements are counted when the items on each side of the scale are even, add or subtract coins
                    from only one side at a time to avoid accidental measurement counts.

                <p>Twelve (12) draggable coins are placed on the table, all of them with the same weight, except one,
                            the false coin. All of the good coins equal each other. The false coin is either slightly heavier or
                            slightly lighter than the good coins. Try to determine which coin is false by using three (3)
                            measurements on the balancing scale. Once you have determined which coin is false, and whether it is
                            light or heavy, use the Ankh or Feather to make your final declaration by measuring it against the
                            false coin. The Ankh weighs exactly the same as a false heavy coin. The Feather weighs exactly the
                            same as a false light coin. If you have made the correct determination you will be told in the text
                    above the scale.</p>
                    <h3>How the app works</h3>
                    <p>Players can drag the coins onto the balancing scale to perform measurements. Since measurements are
                        counted when the items on each side of the scale are even, add or subtract coins from only one side
                        at a time to avoid accidental measurement counts.
                        One coin is randomly selected to be false and is given a weight that is randomly lighter or heavier
                        than the rest of the coins.
                        When an equal amount of coins is placed on the scale a measurement is counted, and the needle
                        indicates wheather the coins are equal or unequal. The Ankh and the Feather are used to declare your
                        final determination of which coin is false. Once the false coin is determined, the Ankh or the
                        Feather is used to make one final measurement to verify that the false coin was successfully found.
                        Measure the false coin against the Ankh if it is heavy, or against the Feather if it is light. The
                        verification measurement is not counted unless it is incorrect. Enjoy!
                </p>
                    <h4>Button functionality</h4>
                    <p>
                        <strong>Restart:</strong> Resets the game and clears the score. Reassigns the false coin. <br />
                        <strong>Replace:</strong> Returns the coins to the starting position without resetting the score.
                    <br />
                        <strong>Labels:</strong> Toggles coin labels on or off. <br />
                        <strong>Cheat:</strong> Reveals the false coin by nudging it forward. Effects scoring.<br />
                    </p>

                    <h3> Notes on further development:</h3>
                    <h4>Features soon to be added:</h4>
                    <ul>
                        <li>Persistent Scoreboard</li>
                        <li>Option for identical coins</li>
                        <li>Options for 13, 14, and 15 coins</li>
                        <li>Mobile</li>
                    </ul>
                    <h4>Bugs</h4>
                    <ul>
                        <li>report bugs to <a href="mailto:succinction@gmail.com">succinction@gmail.com</a></li>
                    </ul>
                {/* </Accordion> */}
                <button id="accordionClicker1">Demonstration of solution: (Spoiler)</button>

                {/* <Accordion ID="me_1" actionID="accordionClicker1" groupID="AAA"  groupFn={this.groupFn} controler={this.state.controler} callbackFn={this.callbackFn} > */}

                <Accordion ID="me_1" actionID="accordionClicker1" groupID="AAA" groupFn={this.groupFn} controler={this.state.controler} callbackFn={this.callbackFn}  >
                    <div className="video">
                        <p>
                            {true && <iframe title="vid" id="video" width="640" height="360"
                                src="https://www.youtube.com/embed/sk6q6sG-7Ls?rel=0"
                                allowFullScreen></iframe>}
                        </p>
                    </div>
                </Accordion>

                <br />
                <div className="bottom">
                    <span className="copyright">Copyright 2006-2017   Joseph Howard   | <a
                        href="mailto:succinction@gmail.com">succinction@gmail.com</a>   | 2.6 |    built in react with gsap</span>
                </div>
            </div>
        );
    }
}

export default ScratchPad;
