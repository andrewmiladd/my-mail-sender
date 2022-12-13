import { Navigate, Outlet } from "react-router-dom";
export const PrivateLoginRoute = () => {
    let isAuthenticated = localStorage.getItem("token");
    return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};
