import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	// console.log(store.favoritos)
	return (
		<nav className="container-fluid navbar  mb-3">
			<Link to="/">
			<img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png" alt="..."/>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
						Favoritos
					</a>
					<ul id="ul" className="dropdown-menu dropdown-menu-end">
						{store.favoritos.map((item, index) => {
							return (
								<li key={index} className="dropdown-item">
									<span>
										<i className="fa fa-trash" onClick={() => actions.borrarFavoritos(item)}></i>
									</span>
									<p>{item}</p>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
