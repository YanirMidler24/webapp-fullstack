import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginComp from "./LoginComp";
import Main from "./Main";
import SignUp from "./SignUp";
import { DataProvider } from "../context/dataAPI";
export default function HostRouteComp() {
  return (
    <div>
      <DataProvider>
        <Switch>
          <Route exact path="/" component={LoginComp} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Main" component={Main} />
        </Switch>
      </DataProvider>
    </div>
  );
}
