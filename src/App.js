import React, { useState, useCallback } from "react";
import { LoadScript } from "@react-google-maps/api";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import User from "./user/pages/User";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { AuthContext } from "./shared/context/auth-context";
import Auth from "./places/pages/Auth";
import { Provider } from "react-redux";
import store from "./Redux";
import Alert from "./shared/components/UIElements/Alert";
import EditPlace from "./places/pages/EditPlace";
function App() {
  const [isLoggedIn, setIsUserLoggedIn] = useState(false);
  const loginIn = useCallback(() => {
    setIsUserLoggedIn(true);
  }, []);
  const logOut = useCallback(() => {
    setIsUserLoggedIn(false);
  }, []);
  const authenRoutes = () => {
    if (isLoggedIn) {
      return (
        <Routes>
          <Route path="/" exact={true} element={<User />} />
          <Route path="/places/new" exact={true} element={<NewPlace />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route path="/places/edit/:placeId" element={<EditPlace />} />
          <Route
            path="/places/:placeId"
            exact={true}
            element={<UpdatePlace />}
          />
          // <Route path="/places/new" exact={true} element={<NewPlace />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      );
    } else {
      return (
        <Routes>
          <Route path="/" exact={true} element={<User />} />
          <Route path="/auth" exact={true} element={<Auth />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      );
    }
  };
  return (
    <Provider store={store}>
      <AuthContext.Provider
        value={{
          item: 1,
          isLoggedIn: isLoggedIn,
          login: loginIn,
          logOut: logOut,
        }}
      >
        <BrowserRouter>
          <MainNavigation />
          <main>
            <Alert />
            <LoadScript googleMapsApiKey="AIzaSyA-8__oYyr1tCei0lvxmmqycrHDAAdltT0">
              {authenRoutes()}
            </LoadScript>
          </main>
        </BrowserRouter>
      </AuthContext.Provider>
    </Provider>
  );
}

export default App;
