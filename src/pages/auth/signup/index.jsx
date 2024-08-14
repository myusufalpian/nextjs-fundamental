import Link from "next/link";

const SignUpPage = () => {
    return (
        <div>
            <h1>Sign Up Page</h1>
            <p>Already have account? <Link href="/auth/signin">Sign In</Link></p>
        </div>
    )
}

export default SignUpPage;