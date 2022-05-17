
import { Link } from "react-router-dom";
const SignIn = () => {
return(
    <div className="formSignIn card mx-auto">
        <div className="card-header"><h3>Sign in</h3></div>
            <div className="card-body">
                <form>
                    <input placeholder="Email" type="email"></input>
                    <input placeholder="Password" type="password"></input>
                </form>
            </div>
        <div className="card-footer"><Link to="/"><button className="btn btn-danger" style={{fontWeight:'600'}}>Get in</button></Link></div>    
    </div>
)
}

export default SignIn;