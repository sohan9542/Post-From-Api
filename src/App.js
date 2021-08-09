import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

} from "react-router-dom";
import Post from "./components/header/Post";

import Profile from "./Profile";
export const App = () => {
    return (
        <Router>

            <Switch>
                <Route path='/friend/:id'>
                    <Profile />
                </Route>
                <Route exact path='/'>
                    <Post />
                </Route>

            </Switch>

        </Router>



    )
}


export default App;