import { Navigate, Outlet } from "react-router-dom";
export const PrivateSignUpRoute = () => {
    let isAuthenticated = localStorage.getItem("token");
    return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};
