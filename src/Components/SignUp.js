import React, {useState, useEffect} from "react";
import Secrets from "../Secrets";
import backEnd from "../backEnd";

const SignUp = () => {
    const [auth, setAuth] = useState();

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: Secrets.CLIENTID,
                scope: 'email'
            }).then(() => {
                //this.auth = window.gapi.auth2.getAuthInstance();
                setAuth(window.gapi.auth2.getAuthInstance());
            });
        });
    }, [])

    const onSignInClick = async () => {
        await auth.signIn();
        let id_token = auth.currentUser.get().getAuthResponse().id_token;
        
        backEnd.post('/SignIn', 'idtoken=' + id_token, {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
    };

    return (
        <button onClick={onSignInClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign In With Google
        </button>
    )
  
}

export default SignUp;