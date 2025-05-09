import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Form from "../component/form";

export const Private = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            {store.auth ?
              
            <h1>Esta es tu pagina protegida</h1>
            
            : <Form/> }
        </div>
    );
};
