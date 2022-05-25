
import { useState} from "react";

//import { Link } from "react-router-dom";

const SignIn = () => {

    const [user, setUser] = useState({
        mail: '',
        pass: ''
    });

const getIn = (event) => {

    setUser({...user, [event.target.name] : event.target.value})

    console.log(user)
    
}

const enviarDatos = (event) => {
    event.preventDefault()

    if(user.mail.length < 12){
        setUser('')
        console.log("no se encontro usuario")
    }else{
        console.log("enviando" + user.mail + "y" + user.pass )
    }
    
}

return(
   <form onSubmit={enviarDatos}>
    <div className="formSignIn card mx-auto">
        <div className="card-header"><h3>Sign in</h3></div>
            <div className="card-body">
                <form>
                    <input placeholder="Email" type="email" onChange={getIn} name="mail"></input>
                    <input placeholder="Password" type="password" onChange={getIn} name="pass"></input>
                </form>
            </div>
        <div className="card-footer"><button className="btn btn-danger" type="submit" style={{fontWeight:'600'}}>Get in</button></div>    
    </div>
    </form>
    
)
}

export default SignIn;