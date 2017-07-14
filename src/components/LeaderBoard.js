import React, {Component} from 'react';

class LeaderBoard extends Component {
    // constructor(props) {
    //     super(props);
    // }
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

    render() {
        return (
            <div className="leaders">
                <table>
                    <thead>
                    <tr>
                        <th colSpan="7">LEADER BOARD</th>
                    </tr>
                    <tr>
                        <th colSpan="7">Your Stats</th>
                    </tr>
                    <tr >
                        <th>Name</th>
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
                        <td>JBH</td>
                        <td>1</td>
                        <td>4</td>
                        <td>4</td>
                        <td>40</td>
                        <td>50</td>
                        <td>0:44</td>
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
