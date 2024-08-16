import Link from "next/link";
import StylesSignUp from "./SignUp.module.css";
const SignUpViews = () => {
    return (
        <div className={StylesSignUp.signup}>
            <h1>Sign Up Page</h1>
            <p>Already have account? <Link href="/auth/signin">Sign In</Link></p>
        </div>
    )
}

export default SignUpViews;