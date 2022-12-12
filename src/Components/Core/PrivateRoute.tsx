import { Navigate, Outlet } from "react-router-dom";
export const PrivateRoutes = () => {
    let isAuthenticated = localStorage.getItem("authorizedUser");
    return isAuthenticated === "1" ? <Outlet /> : <Navigate to="/login" />;
};
