import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/Home_Page/Home_Page";
import AddPlace from "./pages/Add_Place/Add_Place";
import Login from "./pages/Login/Login";
import Layout from "./layout/Layout";
import Register from "./pages/register/Register";

import "./style/index.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/homepage" exact component={HomePage} />
          <Route path="/addplace" exact component={AddPlace} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Redirect from="/" to="/homepage" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
