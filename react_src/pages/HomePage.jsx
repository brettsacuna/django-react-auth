import React from 'react';
import {Router, Route, Link} from 'react-router';
import PublicHeader from '../components/PublicHeader';

class Body extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="container-fluid jumbotron text-center content">
                <h1>Welcome to Vendoo Store</h1>
                <p>Where you will find what you are looking for.</p>
                <Link to='/signup' className="btn btn-lg btn-success">Sign Up</Link> <strong>or</strong> &nbsp;
                <Link to='/login' className="btn btn-lg btn-success">Login</Link>
            </div>
            )
    }
}

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <PublicHeader/>
                <Body/>
            </div>
        )
    }
}

export default HomePage;
