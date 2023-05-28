import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
  domain="elite-ryde.us.auth0.com"
  clientId="dhbmd34m1l593IFmG91ezD4515DVmP5L"
  authorizationParams={{
    redirect_uri: `${window.location.origin}/dashboard`
  }}
  >
    <Provider store={store}>
    <App />
  </Provider>
  </Auth0Provider>
);
