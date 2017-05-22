import React from 'react';
import {Router, Route, Link} from 'react-router';
import Auth from '../services/AuthService';
import AuthenticatedComponent from '../components/AuthenticatedComponent';
import History from '../services/History';
import PublicHeader from '../components/PublicHeader';

class Body extends React.Component {
    constructor() {
        super();
    }

    reset_password(evt) {
        evt.preventDefault();
        var email = this.refs.email.value;
        console.log(email);
        Auth.reset_password(email)
            .catch(function(err) {
                console.log("Error changing password", err);

                var error_response = JSON.parse(err.response), message_error = "";

                message_error += 'Errors\n\n' ;
                for (var er in error_response) {
                    message_error += "\t - "+error_response[er][0]+"\n"
                }

                if (err) alert(message_error);
            })
            .done(function(data) {
                console.log(data);
                //History.replaceState(null, '/');
            });
    }

    render() {
        return (
            <div className="container jumbotron content">
                <h2>Reset Password</h2>
                <form role="form">
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" className="form-control" id="email" ref="email"
                               placeholder="Email address related to your account"/>
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.reset_password.bind(this)}>Submit</button>
                </form>
            </div>
        )
    }
}

class PasswordChangePage extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <PublicHeader/>
                <Body/>
            </div>
        )
    }
}

export default AuthenticatedComponent(PasswordChangePage);
