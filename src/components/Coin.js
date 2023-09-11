import React, {Component} from 'react';
import Label from './Label'

class Coin extends Component {


    render() {
        this.coin_labels = ['1 A', '2 B', '3 C', '4 D', '5 E', '6 F', '7 G', '8 H', '9 I', '10 J', '11 K', '12 L', '13 M', '14 N', '15 O'];
        this.label = this.coin_labels[this.props.my_index];
        return (
            <div className="coin" id={this.props.id}>
                {this.props.label && <Label id={"lb" + this.props.my_index} label={this.label}/> }
                {true && <img id={"cx" + this.props.my_index} src={this.props.image_url} alt=""/>}
            </div>
        );
    }
}

export default Coin;