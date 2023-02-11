import React,{useContext} from 'react'
import './NavLinks.css'
import {NavLink} from 'react-router-dom'
import {AuthContext} from '../../context/auth-context'

const NavLinks = (props)=>{
	const authContext = useContext(AuthContext);
	return(
		<ul className="nav-links">
			<li>
				<NavLink to="/" exact="true">ALL USERS</NavLink>
			</li>
			{
				authContext.isLoggedIn && 
			<li>
				<NavLink to="/u1/places">MY PLACES</NavLink>
			</li>
			}
			{
				authContext.isLoggedIn && 
			
			<li>
				<NavLink to="/places/new">NEW PLACE</NavLink>
			</li>
			}
			{
				!authContext.isLoggedIn && 

			<li>
				<NavLink to="/auth">AUTHENTICATE</NavLink>
			</li>
			}
		</ul>
		);
}

export default NavLinks;