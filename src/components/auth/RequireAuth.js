import { Outlet, Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    const allowed = allowedRoles.includes(auth?.role);

    const returnComponent = allowed ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );

    return (
        returnComponent
    );
};

export default RequireAuth;
