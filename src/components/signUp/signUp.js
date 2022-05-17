
import { Link } from "react-router-dom";
const SignUp = () => {
return(
    <div className="formSignIn card mx-auto">
        <div className="card-header"><h3>Sign up</h3></div>
            <div className="card-body">
                <form>
                    <input placeholder="Username"></input>
                    <input placeholder="Email" type="email"></input>
                    <input placeholder="Repite email"></input>
                    <input placeholder="Password" type="password"></input>
                    <input placeholder="Repite password"></input>
                </form>
            </div>
        <div className="card-footer"><Link to="/"><button className="btn btn-danger" style={{fontWeight:'600'}}>Register</button></Link></div>    
    </div>
)
}

export default SignUp;