import {createContext} from 'react';

export const AuthContext = createContext({
	isLoggedIn: false,
	item:1,
	login: ()=>{},
	logout: ()=>{}
});