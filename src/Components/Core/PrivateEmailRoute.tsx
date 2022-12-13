import { Navigate, Outlet } from "react-router-dom";
export const PrivateRoutes = () => {
    let isAuthenticated = localStorage.getItem("token");
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
