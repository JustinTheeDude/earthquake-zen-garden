import React from 'react';
import Layout from './components/layout';
import EarthquakeList from './components/earthquake_list';
import Profile from './components/user_profile';
import EarthquakeDetail from './components/earthquake_detail';
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
    return (
        <Switch>
            <Layout>
                <Route exact path="/">
                    <EarthquakeList />
                </Route>
                <Route path="/earthquakedetail/:id">
                    <EarthquakeDetail />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Redirect to="/" />
            </Layout>
        </Switch>
    );
}

export default App;
