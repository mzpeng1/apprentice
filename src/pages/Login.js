import React from 'react'
import "./Login.css"
import Layout from "../components/layout"
import {Button} from "@material-ui/core"
import { auth, provider } from "../components/firebase"
import { useStateValue } from "../context/StateProvider"
import { actionTypes } from "../context/reducer"

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn=()=> {
        auth.signInWithPopup(provider).then( result => {
            dispatch ({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        }).catch((error) => alert(error.message));
    };

    return (
        <Layout>
        <div className="login">
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
        </Layout>
    )
}

export default Login
