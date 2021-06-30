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
                    <Route exact path="/" component={Home} />
                    <Route path={Paths.Food} component={FoodPage} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

const FoodPage = () => {
    return (
        <Switch>
            <Route exact path={Paths.FoodChicken} component={ChickenPage} />
            <Route exact path={Paths.FoodLamb} component={LambPage} />
        </Switch>
    );
};
