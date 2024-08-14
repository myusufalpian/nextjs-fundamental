import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const ProductPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const {push, query} = useRouter();
    useEffect(() => {
        if(!isLogin) {
            push("/auth/signin")
        }
        if (localStorage.getItem("token") !== null) {
            setIsLogin(true)
        }
    }, []);
    return (
        <div>
            <h1>Disini Product Page</h1>
        </div>
    )
}

export default ProductPage;