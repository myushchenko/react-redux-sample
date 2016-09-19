import React from "react";
import { Link } from 'react-router';

export class Header extends React.Component {
	render(){
		const { location } = this.props;
		const homeClass = location.pathname === '/' ? 'active' : '';
		const todosClass = location.pathname.match(/^\/todos/) ? 'active' : '';
		const aboutClass = location.pathname.match(/^\/about/) ? 'active' : '';

		return (
			<nav className="navbar navbar-default">
			    <div className="container">
			         <ul className="nav navbar-nav">
			             <li className={homeClass}><Link to="/">Home</Link></li>
			             <li className={todosClass}><Link to="todos">Todos</Link></li>
			             <li className={aboutClass}><Link to="about">About</Link></li>
			         </ul>
			    </div>
			</nav>
		);
	}
}