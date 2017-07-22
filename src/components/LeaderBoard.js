import React, {Component} from 'react';
// import axios from 'axios';

class LeaderBoard extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     // this.state = {response_data: {}}
    // }

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

// componentWillUpdate(nextProps, nextState) {
//
// }
// componentWillReceiveProps(nextProps) {
//
// }
// componentWillUnmount() {
//
// }
shouldComponentUpdate(nextProps, nextState) {

        console.log("LEADERBOARD shouldComponentUpdate")
        console.log("nextProps: ", nextProps )
        console.log("nextProps: attempts", nextProps.data.data.yourStats.attempts )
        console.log("nextProps: score", nextProps.data.data.yourStats.score )
        console.log("nextProps: wins", nextProps.data.data.yourStats.wins )
        console.log("nextProps: bestStreak", nextProps.data.data.yourStats.bestStreak )

    return true;
}

    // getLeaderBoard() {
    //
    //
    //     // function setData(responsedat) {
    //     //
    //     //     this.setState({
    //     //         response_data: responsedat
    //     //     });
    //     // }
    //
    //
    //     let setData = (responsedat) => {
    //         console.log("responsedat : ", responsedat)
    //
    //
    //
    //
    //         this.setState({
    //            response_data: responsedat
    //         });
    //     };
    //
    //
    //
    //     let url_is = 'http://127.0.0.1:8000/api/leaderboard/' + this.props.username;
    //     console.log('this username: ', this.props.username);
    //     console.log('this url_is: ', url_is);
    //
    //     axios({
    //         method: 'get',
    //         headers: {'Content-Type': 'application/json'},
    //         // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    //         url: url_is
    //         // data: dat
    //
    //     }).then(function (response) {
    //         console.log('this response: ', response);
    //         // let responsedata = JSON.parse(response)
    //         let responsedata = response
    //         console.log("response [1] --> ");
    //         console.log(responsedata);
    //
    //         setData(responsedata)
    //         // replay()
    //     });
    //
    //
    // }

    render() {
        return (
            <div className="leaders">
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
                        {/*<td>{this.state.response_data.data['yourStats']['username']}</td>*/}
                        {/*<td>{this.state.response_data.yourStats.yourOverall}</td>*/}
                        {/*<td>{this.state.response_data.currentStreak}</td>*/}
                        {/*<td>{this.state.response_data.bestStreak}</td>*/}
                        {/*<td>{this.state.response_data.wins}</td>*/}
                        {/*<td>{this.state.response_data.attempts}</td>*/}
                        {/*<td>{this.state.response_data.score}</td>*/}
                        {/*<td>{this.state.response_data.bestScore}</td>*/}
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
