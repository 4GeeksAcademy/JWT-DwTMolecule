import React, {useState , useContext} from "react"
import { Context } from "../store/appContext";

const Form = () => {

const { store, actions } = useContext(Context);

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    function senData(e) {
        e.preventDefault()
        console.log(email, password)
        actions.login(email, password)
    }




    return (

        <div>
            <form className="w-50 mx-auto" onSubmit={senData}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
    </form>
        </div>

    )
}

export default Form