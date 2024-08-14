import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DetailProductPage = () => {
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
            {/* 940e74ca-d3bd-4ad1-89f5-3dd9c9fd09dd  */}
            <h1>Detail Product</h1>
            <p>Product: {query.productUuid}</p>
        </div>
    )
}

export default DetailProductPage;