import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Callback from "./components/Callback";
import Auth from "./Auth/Auth";
import Secret from "./components/Secret";
import { Provider, Consumer } from "./context";
import NotFound from "./components/NotFound";

let auth = new Auth();

export const mainRoutes = () => (
  <Provider>
    <Router>
      <Route exact path="/" render={() => <App />} />
      <Route exact path="/callback" render={() => <Callback />} />
      {auth.isAuthenticated() && (
        <Consumer>
          {context => <Route path={context.route} component={<Secret />} />}
        </Consumer>
      )}
    </Router>
  </Provider>
);
