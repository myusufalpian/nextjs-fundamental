import Link from "next/link";
import StylesSignIn from "./Signin.module.css";
import { useRouter } from "next/router";

const SignInViews = () => {
    const { push } = useRouter();
    const handlerSignIn = () => {
        push("/product")
    }
    return (
        <div className={StylesSignIn.signin}>
            <h1>Sign In Page</h1>
            <button onClick={() => handlerSignIn()}>Sign In</button>
            <p>Do not have account? <Link href="/auth/signup">Sign Up</Link></p>
        </div>
    )
}

export default SignInViews;