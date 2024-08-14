import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ShopPage = () => {
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
            <p>Product: {`${query.slug == undefined ? "-" : query.slug[0] + " - " + query.slug[1] + " - " + query.slug[2]}`}</p>
        </div>
    )
}

export default ShopPage;