import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PublicRoute = ({ children }) => {

    const { authState } = useContext(AuthContext);
    const { logged } = authState;

    return (!logged)
        ? children
        : <Navigate to={'/marvel'} />
}
