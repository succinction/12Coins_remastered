import React, {Component} from 'react';
import Label from './Label'

class Coin extends Component {


    constructor(props) {
        super(props);

        this.show_label = this.props.label;
    }

    //
    // componentDidMount() {
    //     //this.change_coin_images ()
    //
    // }
    //
    // componentDidUpdate(prevProps, prevState) {
    //     // invoked immediately after updating occurs
    // }
    //
    // componentWillMount() {
    //
    // }
    //
    // componentWillUpdate(nextProps, nextState) {
    //     //immediately before rendering when new props or state are being received
    //
    //
    // }
    //
    componentWillReceiveProps(nextProps) {


        console.log("this.props.label , nextProps.label COIN", this.props.label, nextProps.label)

        this.show_label = nextProps.label;

    }
    //
    // componentWillUnmount() {
    //
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //
    //
    //
    //
    //     if (this.props.label !== nextProps.label) {
    //         // this.setState({
    //         //     labels_on: nextProps.label
    //         // });
    //
    //     this.show_label = nextProps.label;
    //
    //
    //         // this.props.label = nextProps.label;
    //         return true;
    //         // console.log("this.props.label !== nextProps.label", this.props.label !== nextProps.label, nextProps.label)
    //         // this.state.labels_on = nextProps.label;
    //
    //     }
    //     return false;
    //
    // }


    render() {

        this.coin_labels = ['1 A', '2 B', '3 C', '4 D', '5 E', '6 F', '7 G', '8 H', '9 I', '10 J', '11 K', '12 L', '13 M'];

        this.label = this.coin_labels[this.props.my_index];

        return (

            <div className="coin" id={this.props.id}>

                {this.show_label && <Label id={"lb" + this.props.my_index} label={this.label}/> }

                {true && <img id={"cx" + this.props.my_index} src={this.props.image_url} alt=""/>}

            </div>
        );
    }
}

export default Coin;