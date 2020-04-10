import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from "Components/Header";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route
          path="https://jpumki.github.io/Netflix/"
          exact
          component={Home}
        />
        <Route path="https://jpumki.github.io/Netflix/tv" component={TV} />
        <Route
          path="https://jpumki.github.io/Netflix/search"
          component={Search}
        />
        <Route
          path="https://jpumki.github.io/Netflix/movie/:id"
          component={Detail}
        />
        <Route
          path="https://jpumki.github.io/Netflix/show/:id"
          component={Detail}
        />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
