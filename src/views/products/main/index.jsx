import Link from "next/link";
import StylesMainProduct from "./Main.module.css";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
const MainProductViews = () => {
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
        <div className={StylesMainProduct.mainproduct}>
            <h1>Disini Product Page</h1>
        </div>
    )
}

export default MainProductViews;