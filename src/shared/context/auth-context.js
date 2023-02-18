import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  item: 1,
  login: () => {},
  logout: () => {},
  title: 1,
  formSubmitted: 0,
});

// 			 item: 1,
//           isLoggedIn: isLoggedIn,
//           login: loginIn,
//           logOut: logOut,
