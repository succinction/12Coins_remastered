import React, {Component} from 'react';
// import axios from 'axios';

class LeaderBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {response_data: {}}
        this.initialized = false
    }


    componentWillReceiveProps(nextProps) {
        // console.log("LEADERBOARD componentWillUpdate");
        // console.log("nextProps: ", nextProps);
        // console.log("this.props: ", this.props);
        // console.log("LeaderBoard return", this.props.data !== nextProps.data);
        if (this.props.data !== nextProps.data) {
            this.initialized = true;
            this.setState({response_data: nextProps});



        // console.log("nextProps: attempts", nextProps.data.yourStats.attempts )
        // console.log("nextProps: score", nextProps.data.yourStats.score )
        // console.log("nextProps: wins", nextProps.data.yourStats.wins )
        // console.log("nextProps: bestStreak", nextProps.data.yourStats.bestStreak )

        }
    }


    shouldComponentUpdate(nextProps, nextState) {

        // console.log("SHOULD this.initialized", this.initialized)
        // console.log("SHOULD nextState",nextState.response_data)
        // console.log("SHOULD return ",this.state.response_data !== nextState.response_data)

        // if (this.state.response_data !== nextState.response_data){

        // console.log("nextProps.data.bestPlayers.username", nextProps.data.bestPlayers.username )
        // console.log("nextProps.data.bestPlayers.score ", nextProps.data.bestPlayers.score )
        // console.log("nextProps.data.bestPlayers.wins", nextProps.data.bestPlayers.wins )
        // console.log("nextProps.data.bestPlayers.bestStreak", nextProps.data.bestPlayers.bestStreak )
        // }


        return this.state.response_data !== nextState.response_data;


    }

    render() {
        return (
            <div className="leaders">
                <table>
                    <thead>
                    <tr>
                        <th colSpan="8">LEADER BOARD (In beta, nothing guaranteed.)</th>
                    </tr>
                    {/*<tr>*/}
                        {/*<th colSpan="8">Refresh</th>*/}
                    {/*</tr>*/}
                    <tr>
                        <th colSpan="8">Your Stats (You are: {this.initialized && this.state.response_data.data.yourStats.username}) </th>
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
                    {/*</tr>*/}
                    </thead>
                    <tbody>
                    <tr >
                        <td>{this.initialized && this.state.response_data.data.yourStats.username}</td>
                        <td>{this.initialized && this.state.response_data.data.yourStats.yourOverall}</td>
                        <td>{this.initialized && this.state.response_data.data.yourStats.currentStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.yourStats.bestStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.yourStats.wins}</td>
                        <td>{this.initialized && this.state.response_data.data.yourStats.attempts}</td>
                        <td>{this.initialized && this.state.response_data.data.yourStats.score}</td>
                        <td>{this.initialized && this.state.response_data.data.yourStats.bestScore}</td>
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
                        <th>Ranking Score</th>
                        <th>Best Win Streak</th>
                        <th>Current Win Streak</th>
                        <th>Total Wins</th>
                        <th>Total Attempts</th>
                        <th>Accumulated Score</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr >

                        <td>{this.initialized && this.state.response_data.data.bestPlayers[0].username}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[0].overall}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[0].bestStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[0].currentStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[0].wins}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[0].attempts}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[0].score}</td>

                    </tr>
                    <tr >

                        <td>{this.initialized && this.state.response_data.data.bestPlayers[1].username}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[1].overall}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[1].bestStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[1].currentStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[1].wins}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[1].attempts}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[1].score}</td>

                    </tr>
                    <tr >

                        <td>{this.initialized && this.state.response_data.data.bestPlayers[2].username}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[2].overall}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[2].bestStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[2].currentStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[2].wins}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[2].attempts}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[2].score}</td>

                    </tr>
                    <tr >

                        <td>{this.initialized && this.state.response_data.data.bestPlayers[3].username}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[3].overall}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[3].bestStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[3].currentStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[3].wins}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[3].attempts}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[3].score}</td>

                    </tr>
                    <tr >

                        <td>{this.initialized && this.state.response_data.data.bestPlayers[4].username}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[4].overall}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[4].bestStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[4].currentStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[4].wins}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[4].attempts}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[4].score}</td>

                    </tr>
                    <tr >

                        <td>{this.initialized && this.state.response_data.data.bestPlayers[5].username}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[5].overall}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[5].bestStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[5].currentStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[5].wins}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[5].attempts}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[5].score}</td>

                    </tr>
                    <tr >

                        <td>{this.initialized && this.state.response_data.data.bestPlayers[6].username}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[6].overall}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[6].bestStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[6].currentStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[6].wins}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[6].attempts}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[6].score}</td>

                    </tr>
                    <tr >

                        <td>{this.initialized && this.state.response_data.data.bestPlayers[7].username}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[7].overall}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[7].bestStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[7].currentStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[7].wins}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[7].attempts}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[7].score}</td>

                    </tr>
                    <tr >

                        <td>{this.initialized && this.state.response_data.data.bestPlayers[8].username}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[8].overall}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[8].bestStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[8].currentStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[8].wins}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[8].attempts}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[8].score}</td>

                    </tr>
                    <tr >

                        <td>{this.initialized && this.state.response_data.data.bestPlayers[9].username}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[9].overall}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[9].bestStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[9].currentStreak}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[9].wins}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[9].attempts}</td>
                        <td>{this.initialized && this.state.response_data.data.bestPlayers[9].score}</td>

                    </tr>

                    </tbody>
                </table>


                <table>

                    <thead>
                    <tr>
                        <th colSpan="7">Your Recent Games</th>
                    </tr>
                    <tr>
                        <th>Game ID</th>
                        <th>Final Time</th>
                        <th>Score</th>
                        <th>Game Type</th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td></td>

                    </tr>
                    <tr>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[0].gameID}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[0].finalTime}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[0].score}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[0].gameType}</td>
                    </tr>
                    <tr>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[1].gameID}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[1].finalTime}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[1].score}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[1].gameType}</td>
                    </tr>
                    <tr>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[2].gameID}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[2].finalTime}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[2].score}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[2].gameType}</td>
                    </tr>
                    <tr>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[3].gameID}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[3].finalTime}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[3].score}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[3].gameType}</td>
                    </tr>
                    <tr>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[4].gameID}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[4].finalTime}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[4].score}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[4].gameType}</td>
                    </tr>
                    <tr>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[5].gameID}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[5].finalTime}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[5].score}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[5].gameType}</td>
                    </tr>
                    <tr>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[6].gameID}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[6].finalTime}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[6].score}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[6].gameType}</td>
                    </tr>
                    <tr>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[7].gameID}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[7].finalTime}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[7].score}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[7].gameType}</td>
                    </tr>
                    <tr>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[8].gameID}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[8].finalTime}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[8].score}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[8].gameType}</td>
                    </tr>
                    <tr>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[9].gameID}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[9].finalTime}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[9].score}</td>
                        <td>{this.initialized && this.state.response_data.data.yourLastGames[9].gameType}</td>
                    </tr>
                    </tbody>
                </table>

                {/*<table>*/}
                    {/*<thead>*/}
                    {/*<tr>*/}
                        {/*<th colSpan="6">Top Scored Games This Month *</th>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                        {/*<th>Time</th>*/}
                        {/*<th>Game Id</th>*/}
                        {/*<th>Player Name</th>*/}
                        {/*<th>Rank</th>*/}
                        {/*<th>Game Type</th>*/}
                        {/*<th>Date</th>*/}
                    {/*</tr>*/}
                    {/*</thead>*/}
                    {/*<tbody>*/}

                    {/*<tr>*/}
                        {/*<td>:50</td>*/}
                        {/*<td>Game_239</td>*/}
                        {/*<td>JBH</td>*/}
                        {/*<td>1</td>*/}
                        {/*<td>12</td>*/}
                        {/*<td>6/23/2017</td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                        {/*<td>1:33</td>*/}
                        {/*<td>Game_267</td>*/}
                        {/*<td>Chris</td>*/}
                        {/*<td>2</td>*/}
                        {/*<td>12</td>*/}
                        {/*<td>6/23/2017</td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                        {/*<td>1:40</td>*/}
                        {/*<td>Game_249</td>*/}
                        {/*<td>Mazda</td>*/}
                        {/*<td>3</td>*/}
                        {/*<td>12</td>*/}
                        {/*<td>6/23/2017</td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                        {/*<td>1:55</td>*/}
                        {/*<td>Game_210</td>*/}
                        {/*<td>JBH</td>*/}
                        {/*<td>1</td>*/}
                        {/*<td>12</td>*/}
                        {/*<td>6/23/2017</td>*/}
                    {/*</tr>*/}
                    {/*</tbody>*/}

                {/*</table>*/}
            </div>

        );
    }
}

export default LeaderBoard;
