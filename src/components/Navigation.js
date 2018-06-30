import React from 'react';
import {Link} from 'react-router-dom';
import SignOutButton from './SignOut';

import * as routes from '../constants/routes';


const NavigationNonAuth = () =>
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <Link to={routes.LANDING} className="navbar-brand" href="javascript:void(0)">Duplicate Asana</Link>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <li><Link to={routes.SIGN_IN}>Already have an account?</Link></li>
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
                <Link to={routes.HOME} className="navbar-brand" href="javascript:void(0)">Duplicate Asana</Link>
            </div>

            <ul className="nav navbar-nav">
                <li className="active"><Link to={routes.HOME}>HOME</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><SignOutButton /></li>
            </ul>
        </div>
    </nav>

export default Navigation;



