import React from 'react';
import { Redirect, Route, Switch ,BrowserRouter} from "react-router-dom";
import * as Screens from '../screens'

export function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => localStorage.getItem('authToken') ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/", state: { from: props.location } }}
                    />
                )
            }
        />
    )
}

export default function () {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Screens.Home} />
                <PrivateRoute exact path="/easteregg" component={Screens.EasterEgg} />
            </Switch>
        </BrowserRouter>

    );

}


