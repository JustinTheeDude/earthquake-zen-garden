import React from 'react';
import Layout from './components/layout';
import earthquakeData from './earthquake_data/earthquakedata.json';
import EarthquakeList from './components/earthquake_list';
import Profile from './components/user_profile';
import EarthquakeDetail from './components/earthquake_detail';
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
    const {site, profile, data} = earthquakeData;

    return (
        <Switch>
            <Layout siteData={site} userData={profile}>
                <Route exact path="/">
                    <EarthquakeList earthquakedata={data}/>
                </Route>
                <Route path="/earthquakedetail/:id">
                    <EarthquakeDetail earthquakedata={data}/>
                </Route>
                <Route exact path="/profile">
                    <Profile profiledata={profile}/>
                </Route>
                <Redirect to="/" />
            </Layout>
        </Switch>
    );
}

export default App;
