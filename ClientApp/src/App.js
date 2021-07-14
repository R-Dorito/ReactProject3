import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { Home } from "./components/Home";
import {
    ChickenPage,
    LambPage,
} from "./components/FoodMainPage/ContentDisplayPage";

import { Paths } from "./components/paths";
import { NavMenu } from "./components/PageLayout/NavMenu";
import { Footer } from "./components/PageLayout/Footer";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div>
                <NavMenu />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path={Paths.Food}>
                        <FoodPage />
                    </Route>
                </Switch>
                <Footer />
            </div>
        );
    }
}

const FoodPage = () => {
    return (
        <Switch>
            <Route exact path={Paths.FoodChicken}>
                <ChickenPage />
            </Route>
            <Route exact path={Paths.FoodLamb}>
                <LambPage />
            </Route>
        </Switch>
    );
};
