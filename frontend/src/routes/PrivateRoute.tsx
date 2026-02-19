import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";

function PrivateRoute() {
    const {status} = useAuth();

    if (status !== "authenticated") {
        return <Navigate to={"/"} />
    } else {
        return <Outlet />
    }
}

export default PrivateRoute;