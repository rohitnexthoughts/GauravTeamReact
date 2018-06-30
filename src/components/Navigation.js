import React from 'react';
import {Link} from 'react-router-dom';
import SignOutButton from './SignOut';

import * as routes from '../constants/routes';


const NavigationNonAuth = () =>
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">Duplicate Asana</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <li><Link to={routes.SIGN_UP}><span className="glyphicon glyphicon-log-in"></span> Sign Up</Link></li>
            </ul>
        </div>
    </nav>


const Navigation = ({authUser}) =>
    <div>
        { authUser ? <NavigationAuth /> : <NavigationNonAuth /> }
    </div>


const NavigationAuth = () =>
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">Duplicate Asana</a>
            </div>

            <ul class="nav navbar-nav">
                <li class="active"><Link to={routes.HOME}>HOME</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><SignOutButton /></li>
            </ul>
        </div>
    </nav>

export default Navigation;
