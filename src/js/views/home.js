import React, { useContext} from "react";
import "../../styles/home.css";
import CardPersonaje from "../component/cardPersonaje.jsx";
import CardPlanetas from "../component/cardPlanetas.jsx";
import CardVehiculo from "../component/cardVehiculos.jsx";
import { Context } from "../store/appContext.js";

export const Home = () => {
const {store, action}= useContext(Context)
// console.log(store.personajes)
// console.log(store.planetas)
// console.log(store.vehiculos)
	

	return(
	<div className="container">
		<h1>Personajes</h1>

		<div className="d-flex row flex-nowrap overflow-auto">  		
			{store.personajes.map((item)=><CardPersonaje key={item.uid} nombre={item.name} url={item.url} id={item.uid}/>)}		
			
		</div>

		<h1>Planetas</h1>
		
		<div className="d-flex row flex-nowrap overflow-auto">  		
			{store.planetas.map((item)=><CardPlanetas key={item.uid} nombre={item.name} url={item.url} id={item.uid}/>)}		
		</div>

		<h1>Vehículos</h1>
		
		<div className="d-flex row flex-nowrap overflow-auto">  		
			{store.vehiculos.map((item)=><CardVehiculo key={item.uid} nombre={item.name} url={item.url} id={item.uid}/>)}		
		</div>
		
	</div>
)};
