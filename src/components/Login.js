import React, {Component} from 'react';
import auth from './Auth'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login_error: false
        }
    }

    handleSubmit(e) {
        e.preventDefault()

        let username = this.refs.username.value
        let pass = this.refs.pass.value

        auth.login(username, pass, (loggedIn) => {
            if (loggedIn) {
                this.context.router.replace('/app/')
            } else {
                this.setState({login_error:true})
            }
        })
    }
    // componentWillReceiveProps(nextProps) {
    // }
    // componentDidMount() {
    // }
    //
    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="username" ref="username"/>
                <input type="password" placeholder="password" ref="pass"/>
                <input type="submit"/>
            </form>

        );
    }
}

export default Login;

//

    // getInitialState: () => {
    //     return {
    //       login_error: false
    //     }
    //   },
    //
    // handleSubmit: function(e) {
    //     e.preventDefault()
    //
    //     var username = this.refs.username.value
    //     var pass = this.refs.pass.value
    //
    //     auth.login(username, pass, (loggedIn) => {
    //         if (loggedIn) {
    //             this.context.router.replace('/app/')
    //         } else {
    //             this.setState({login_error:true})
    //         }
    //     })
    // },

    // render: function() {
    //     return (
    //         <form onSubmit={this.handleSubmit}>
    //             <input type="text" placeholder="username" ref="username"/>
    //             <input type="password" placeholder="password" ref="pass"/>
    //             <input type="submit"/>
    //         </form>
    //     )
    // }