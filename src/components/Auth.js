import React, {Component} from 'react'

import axios from 'axios';


class Login extends Component {
    login = (username, pass, cb) => {
        if (localStorage.token) {
            if (cb) cb(true)
            return
        }
        this.getToken(username, pass,
            (res) => {
            if (res.authenticated) {
                localStorage.token = res.token
                if (cb) cb(true)
            } else {
                if (cb) cb(false)
            }
        })
    }
    logout = () => {
        delete localStorage.token
    }
    loggedIn = () => {
        return !!localStorage.token
    }
    getToken = (username, pass, cb) => {


        // axios({
        //     method: 'get',
        //     headers: {'Content-Type': 'application/json'},
        //     // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        //     url: url_is
        //     // data: dat
        //
        // }).then(function (response) {
        //     console.log('this response: ', response);
        //     // let responsedata = JSON.parse(response)
        //     let responsedata = response
        //     console.log("response [1] --> ");
        //     console.log(responsedata);
        //
        //     setData(responsedata)
        //     // replay()
        // });





        //
        //
        // axios({
        //     method: 'post',
        //     headers: {'Content-Type': 'application/json'},
        //     url: '/api/obtain-auth-token/',
        //     data: {
        //         username: username,
        //         password: pass
        //     }
        //
        // }).then(function(response){
        //
        //
        // });
        //     success: function(res){
        //         cb({
        //             authenticated: true,
        //             token: res.token
        //         })
        //     },
        //     error: (xhr, status, err) => {
        //         cb({
        //             authenticated: false
        //         })
        //     }
        // })
    }
    // render() {
    //     return (
    //     );
    // }
}
export default Login;



//////


// module.exports = {
    // login: function(username, pass, cb) {
    //     if (localStorage.token) {
    //         if (cb) cb(true)
    //         return
    //     }
    //     this.getToken(username, pass,
    //         (res) => {
    //         if (res.authenticated) {
    //             localStorage.token = res.token
    //             if (cb) cb(true)
    //         } else {
    //             if (cb) cb(false)
    //         }
    //     })
    // },
    //
    // logout: function() {
    //     delete localStorage.token
    // },
    //
    // loggedIn: function() {
    //     return !!localStorage.token
    // },
    //
    // getToken: function(username, pass, cb) {
    //     $.ajax({
    //         type: 'POST',
    //         url: '/api/obtain-auth-token/',
    //         data: {
    //             username: username,
    //             password: pass
    //         },
    //         success: function(res){
    //             cb({
    //                 authenticated: true,
    //                 token: res.token
    //             })
    //         },
    //         error: (xhr, status, err) => {
    //             cb({
    //                 authenticated: false
    //             })
    //         }
    //     })
    // },
// }
