import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehiculo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	
	useEffect(()=>{
		actions.infoVehiculo(params.theid)
		
	},[])

	console.log(store.infoVehiculo)
	return (
		<div className="jumbotron text-center">
			 <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg`} className="card-img-left" alt="..."></img>
			<h1 className="display-4">{store.infoVehiculo?.properties?.name}</h1>
			<h2> </h2>
			<hr className="my-4" />
			<div className="container">
				<table className="table">
					<thead>
						<tr>
						<th scope="col">Capacity</th>
						<th scope="col">Consumables</th>
						<th scope="col">Cost in credits</th>
						<th scope="col">Crew</th>
						</tr>
					</thead>
					
						<tr>
						<td>{store.infoVehiculo?.properties?.cargo_capacity}</td>
						<td>{store.infoVehiculo?.properties?.consumables}</td>
						<td>{store.infoVehiculo?.properties?.cost_in_credits}</td>
						<td>{store.infoVehiculo?.properties?.crew}</td>
						</tr>
						
				</table>
			</div>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SingleVehiculo.propTypes = {
	match: PropTypes.object
};