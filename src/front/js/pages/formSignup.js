import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Form from "../component/form";
import { Navigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const FormSignup = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function sendData(e) {
        e.preventDefault();
        console.log(email, password);
        actions.signup(email, password);
    }

    return (
        <div>
            <form className="w-50 mx-auto" onSubmit={sendData}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        required 
                    />
                </div>
                
                {store.auth ? <Navigate to="/private"/> :  <button type="submit" className="btn btn-primary">Registrar</button>}
                
            </form>
        </div>
    );
}

export default FormSignup;
