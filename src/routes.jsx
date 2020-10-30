import React, { useContext } from "react";
import { Fragment } from "react";
import { Switch, Redirect } from "react-router-dom";
import GlobalContext from "./Contexts/GlobalContext";
import Layout from "./components/layout/Layout";
import RegisterHome from "./Pages/RegisteredHome";
import NotFound from "./Pages/NotFound";
import RouteWithLayout from "./RouteWithLayout";

const Routes = () => {
  const ctx = useContext(GlobalContext);
  return (
    <Fragment>
      <Switch>
        <RouteWithLayout component={RegisterHome} exact layout={Layout} path="/" />
        <RouteWithLayout
          component={NotFound}
          exact
          layout={Layout}
          path="/not-found"
        />

        <Redirect to="/not-found" />
      </Switch>
    </Fragment>
  );
};

export default Routes;
