import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Room from "../room/room";

const App = (props) => {
  const {offersCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/">
          <Main offersCount={offersCount}/>
        </Route>
        <Route exact path="/favorites">
          <Favorites/>
        </Route>
        <Route path="/offer/:id" exact component={Room}/>
        <Route
          render={() => (
            <>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
