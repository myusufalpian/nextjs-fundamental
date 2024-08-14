import Link from "next/link";
import { useRouter } from "next/router";

const SignInPage = () => {
    const { push, query } = useRouter();
    const handlerSignIn = () => {
        push("/product")
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={() => handlerSignIn()}>Sign In</button>
            <p>Do not have account? <Link href="/auth/signup">Sign Up</Link></p>
        </div>
    )
}

export default SignInPage;