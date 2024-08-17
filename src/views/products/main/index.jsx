import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const MainProductViews = () => {
    const [isLogin, setIsLogin] = useState(true);
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setIsLogin(false);
        }
    }, []);
    useEffect(() => {
        if (!isLogin) {
            router.push("/auth/signin");}
    }, [isLogin, router]);

    return (
        <div>
            <h1>Disini Product Page</h1>
        </div>
    );
};

export default MainProductViews;