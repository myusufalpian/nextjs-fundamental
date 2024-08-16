import Navbar from "../Navbar";
import {useRouter} from "next/router";

const disabledNavbar = ["/auth/signin", "/auth/signup"];
const AppShell = (props) => {
    const {pathname} = useRouter();
    const {children} = props;
    return (
        <main>
            { !disabledNavbar.includes(pathname) && <Navbar />}
            {children}
        </main>
    )
}

export default AppShell;