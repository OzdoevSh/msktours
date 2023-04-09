import React, {useContext, useEffect} from 'react';
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import {AdminAuthRoutes, AuthRoutes, publicRoutes, } from "../../router/routes";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const AppRouter = observer (() => {
    const {user} = useContext(Context)

    
    return (
        user.isAuth ?
            <div>
                    {user.User.role === "ADMIN" ?
                        <Switch>{AdminAuthRoutes.map(route =>
                            <Route
                                path={route.path}
                                component={route.component}
                                exact={route.exact}
                                key={route.path}
                            />
                        )}
                            <Redirect to="/CityList"/>
                        </Switch>
                        :
                        <Switch>{AuthRoutes.map(route =>
                                <Route
                                    path={route.path}
                                    component={route.component}
                                    exact={route.exact}
                                    key={route.path}
                                />
                            )}
                            <Redirect to="/CityList"/>
                        </Switch>
                    }
            </div>
                :
                <Switch>
                    {publicRoutes.map(route =>
                        <Route
                            path={route.path}
                            component={route.component}
                            exact={route.exact}
                            key={route.path}
                        />
                    )}
                    <Redirect to="/login"/>
                </Switch>
    );
});

export default AppRouter;