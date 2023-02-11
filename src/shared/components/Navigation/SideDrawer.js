import React from 'react'
import ReactDOM from 'react-dom'
import {CSSTransition} from 'react-transition-group'
import './SideDrawer.css'

const SideDrawer = (props)=>{
	const closeDrawer = ()=>{
		console.log("Xyz...")
		props.closeDrawer();
	}
	const content =
		<CSSTransition in={props.show} timeout={200} classNames="slide-in-left" 
		mountOnEnter onmountOnExit>
		<aside onClick={props.closeDrawer} className="side-drawer">
		<div className="drawer__close-btn-container" >

		<button className="drawer__close-btn" onClick={closeDrawer}>Close X</button>
		</div>
			{props.children}
		</aside>
		</CSSTransition>
		;
		return ReactDOM.createPortal(content,document.getElementById('drawer-hook'))
}

export default SideDrawer;