import React,{useState} from 'react'
import {Link} from 'react-router-dom'

import './MainNavigation.css'
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
const MainNavigation = (props)=>{
	const [drawerIsOpen,setDrawerIsOpen] = useState(false);
	const openDrawer = ()=>{
		setDrawerIsOpen(true);
	}
	const closeDrawer = ()=>{
		console.log("Close Drawer from Main Navi")
		setDrawerIsOpen(false);
	}
	return(
		<>
		{drawerIsOpen && 
		<SideDrawer  show={drawerIsOpen} closeDrawer={closeDrawer}>
			<nav className="main-navigation__drawer-nav">
		
      	<NavLinks />
      	</nav>
		</SideDrawer>}
				
		
		<MainHeader>
      <button onClick={openDrawer} className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">YourPlaces</Link>
      </h1>
      <nav className="main-navigation__header-nav">
      	<NavLinks />
      </nav>
    </MainHeader>
		</>
		);
}

export default MainNavigation;