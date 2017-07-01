import React, {Component} from 'react';

class Ankh extends Component {
    render() {
        return (
            <div className="ankh" id={this.props.id}>
                <img id={"nk" + this.props.my_index} src="coin_images/ankh.png" alt=""/>
            </div>
        );
    }
}

export default Ankh;





