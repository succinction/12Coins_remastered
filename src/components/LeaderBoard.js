import React, {Component} from 'react';
// import axios from 'axios';

class LeaderBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {response_data: {}}

        this.initialized = false
    }

    // componentDidMount() {
    //
    // }

// componentDidUpdate(prevProps, prevState) {
//
// }
//     componentWillMount() {
//         this.getLeaderBoard()
//
//     }


    componentWillReceiveProps(nextProps) {
        console.log("LEADERBOARD componentWillUpdate");
        console.log("nextProps: ", nextProps);
        console.log("this.props: ", this.props);
        console.log("LeaderBoard return", this.props.data !== nextProps.data);
        if (this.props.data !== nextProps.data) {
            this.initialized = true;
            this.setState({response_data: nextProps});



        console.log("nextProps: attempts", nextProps.data.yourStats.attempts )
        console.log("nextProps: score", nextProps.data.yourStats.score )
        console.log("nextProps: wins", nextProps.data.yourStats.wins )
        console.log("nextProps: bestStreak", nextProps.data.yourStats.bestStreak )

        }
    }


    shouldComponentUpdate(nextProps, nextState) {

        console.log("SHOULD this.initialized", this.initialized)
        console.log("SHOULD nextState",nextState.response_data)
        console.log("SHOULD return ",this.state.response_data !== nextState.response_data)

        if (this.state.response_data !== nextState.response_data){

        console.log("nextProps: attempts", nextProps.data.yourStats.attempts )
        console.log("nextProps: score", nextProps.data.yourStats.score )
        console.log("nextProps: wins", nextProps.data.yourStats.wins )
        console.log("nextProps: bestStreak", nextProps.data.yourStats.bestStreak )
        }


        return this.state.response_data !== nextState.response_data;


    }

    // componentWillUpdate(nextProps, nextState) {
    //
    //
    //
    //
    //
    // }

// componentWillReceiveProps(nextProps) {
//
// }
// componentWillUnmount() {
//
// }



    render() {
        return (
            <div className="leaders">


                <h1>Hi  {this.initialized && this.state.response_data.data.yourStats.yourOverall} </h1>

                <table>
                    <thead>
                    <tr>
                        <th colSpan="8">LEADER BOARD</th>
                    </tr>
                    <tr>
                        <th colSpan="8">Refresh</th>
                    </tr>
                    <tr>
                        <th colSpan="8">Your Stats</th>
                    </tr>
                    <tr >
                        <th>Name</th>
                        <th>Ranking Score</th>
                        <th>Current Win Streak</th>
                        <th>Best Win Streak</th>
                        <th>Total Wins</th>
                        <th>Total Attempts</th>
                        <th>Accumulated Score</th>
                        <th>Best Score</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr >
                        {/*<td>{this.state.response_data.data.data.yourStats.attempts}</td>*/}
                        <td> HI TRUE {this.initialized && this.state.response_data.data.yourStats.yourOverall}</td>
                        {/*<td>{this.state.response_data.data.data.currentStreak}</td>*/}
                        {/*<td>{this.state.response_data.data.data.bestStreak}</td>*/}
                        {/*<td>{this.state.response_data.data.data.wins}</td>*/}
                        {/*<td>{this.state.response_data.data.data.attempts}</td>*/}
                        {/*<td>{this.state.response_data.data.data.score}</td>*/}
                        {/*<td>{this.state.response_data.data.data.bestScore}</td>*/}
                    </tr>
                    </tbody>
                </table>
                <table>

                    <thead>
                    <tr>
                        <th colSpan="7">Your Recent Games | Your Top Games</th>
                    </tr>
                    <tr>
                        <th>Time</th>
                        <th>Game Type</th>
                        <th>Game Id</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td>:50</td>
                        <td>12</td>
                        <td>Game_233</td>
                        <td>6/23/2017</td>
                    </tr>
                    <tr>
                        <td>1:33</td>
                        <td>12</td>
                        <td>Game_234</td>
                        <td>6/23/2017</td>
                    </tr>
                    <tr>
                        <td>1:40</td>
                        <td>12</td>
                        <td>Game_235</td>
                        <td>6/23/2017</td>
                    </tr>
                    <tr>
                        <td>1:55</td>
                        <td>12</td>
                        <td>Game_210</td>
                        <td>6/23/2017</td>
                    </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                    <tr>
                        <th colSpan="7">Highest Ranked Players *</th>
                    </tr>
                    <tr >
                        <th>Player Name</th>
                        <th>Rank</th>
                        <th>Current Win Streak</th>
                        <th>Best Win Streak</th>
                        <th>Total Wins</th>
                        <th>Total Attempts</th>
                        <th>Best Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr >

                        <td><a href="">JBH</a></td>
                        <td>1</td>
                        <td>4</td>
                        <td>4</td>
                        <td>9</td>
                        <td>12</td>
                        <td>0:45</td>
                    </tr>
                    <tr>

                        <td><a href="">Chris</a></td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>12</td>
                        <td>45</td>
                        <td>0:55</td>

                    </tr>
                    <tr>

                        <td><a href="">Mazda</a></td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>10</td>
                        <td>13</td>
                        <td>2:45</td>

                    </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                    <tr>
                        <th colSpan="6">Top Scored Games This Month *</th>
                    </tr>
                    <tr>
                        <th>Time</th>
                        <th>Game Id</th>
                        <th>Player Name</th>
                        <th>Rank</th>
                        <th>Game Type</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td>:50</td>
                        <td>Game_239</td>
                        <td>JBH</td>
                        <td>1</td>
                        <td>12</td>
                        <td>6/23/2017</td>
                    </tr>
                    <tr>
                        <td>1:33</td>
                        <td>Game_267</td>
                        <td>Chris</td>
                        <td>2</td>
                        <td>12</td>
                        <td>6/23/2017</td>
                    </tr>
                    <tr>
                        <td>1:40</td>
                        <td>Game_249</td>
                        <td>Mazda</td>
                        <td>3</td>
                        <td>12</td>
                        <td>6/23/2017</td>
                    </tr>
                    <tr>
                        <td>1:55</td>
                        <td>Game_210</td>
                        <td>JBH</td>
                        <td>1</td>
                        <td>12</td>
                        <td>6/23/2017</td>
                    </tr>
                    </tbody>

                </table>
            </div>

        );
    }
}

export default LeaderBoard;
