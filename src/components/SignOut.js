import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () =>
    < a href="javascript:void(0)"
        onClick={auth.doSignOut}>
        <span className="glyphicon glyphicon-log-out"></span>  Log Out
    </a>

export default SignOutButton;