import React from "react";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Chat from "./components/Chat/Chat";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProtectedRoute from "./components/Router/ProtectedRoute";

import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSmile, faImage } from "@fortawesome/free-regular-svg-icons";
import {
  faSpinner,
  faEllipsisV,
  faUserPlus,
  faSignOutAlt,
  faTrash,
  faCaretDown,
  faUpload,
  faTimes,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faSmile,
  faImage,
  faSpinner,
  faEllipsisV,
  faUserPlus,
  faSignOutAlt,
  faTrash,
  faCaretDown,
  faUpload,
  faTimes,
  faBell
);

const App = () => {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/" component={Chat} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route
          render={() => {
            return <h1>404 Page Not found</h1>;
          }}
        />
      </Switch>
    </Router>
  );
};

export default App;
