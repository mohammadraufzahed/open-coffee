import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import { Route } from "react-router";
import Home from "../pages/Home";

const Routes: React.FC = () => {
  return (
    <IonReactRouter>
      <Route path="/" component={Home} exact />
    </IonReactRouter>
  );
};

export default Routes;
