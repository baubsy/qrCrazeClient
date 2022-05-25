import React, {useState, useEffect} from "react";
import Secrets from "../Secrets";
import backEnd from "../backEnd";

const SignUp = () => {
    const [auth, setAuth] = useState();
    const [signedIn, setSignedIn] = useState();

    
    useEffect(() => {
        
        
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: Secrets.CLIENTID,
                scope: 'email'
            }).then(() => {
                //this.auth = window.gapi.auth2.getAuthInstance();
                setAuth(window.gapi.auth2.getAuthInstance());
                setSignedIn(auth.isSignedIn.get());
                //console.log(auth.currentUser.get.getBasicProfile());
            });
        });
        
    }, [])

    const onRegisterClick = async () => {
        await auth.signIn();
        let id_token = auth.currentUser.get().getAuthResponse().id_token;
        
        const response = await backEnd.post('/register', 'idtoken=' + id_token, {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
        //redirect to Registration component here to ask for extra info once more is added
        setSignedIn(auth.isSignedIn.get());
        console.log(response);
        
    };

    const onSignOutClick = async () => {
        await auth.signOut();
        setSignedIn(auth.isSignedIn.get());
    }

    return (
        <button onClick={onRegisterClick} className="ui red google button">
                    <i className="google icon"/>
                    Register With Google
        </button>
    )
  
}

export default SignUp;