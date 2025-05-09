import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Form from "../component/form";
import { Navigate, Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Hola!! Ingresa a tu cuenta aqui </h1>
			
			{store.auth ? <Navigate to="/private"/> : <Form/> }
			<div className="mb-3 mx-auto mt-3">
				<Link to="/signup">
						<button className="btn btn-primary">Registrate!</button>
				</Link>
			</div>
		</div>
	);
};
