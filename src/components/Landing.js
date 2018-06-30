import React from 'react';
import {SignUpForm} from "./SignUp";
import {SignInForm} from "./SignIn";

const LandingPage = () =>
    <React.Fragment>
        <div>
            <h1>Landing Page</h1>
        </div>
        <div className='row'>
            <div className='col'/>
            <div className='col-4'>
                <SignInForm/>
            </div>
            <div className='col'/>
            <div className='col-4'>
                <SignUpForm/>
            </div>
            <div className='col'/>
        </div>
    </React.Fragment>;

export default LandingPage;