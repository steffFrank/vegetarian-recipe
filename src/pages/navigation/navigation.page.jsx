import { Header } from "../../components/header/header.component";
import { Outlet } from "react-router-dom";

export const Navigation = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}