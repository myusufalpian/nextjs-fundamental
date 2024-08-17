import Link from "next/link";
import StylesSignIn from "./Signin.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const SignInViews = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [token, setToken] = useState("");
    const { push } = useRouter();

    const handlerSignIn = () => {
        setIsLogin(true);
        setToken("token baru nih");
        if (token) {
            localStorage.setItem("token", token);
            push("/product");
        }
    };
    return (
        <div className={StylesSignIn.signin}>
            <h1>Sign In Page</h1>
            <button onClick = { handlerSignIn } >Sign In</button>
            <p>Do not have an account? <Link href="/auth/signup">Sign Up</Link></p>
        </div>
    );
};

export default SignInViews;