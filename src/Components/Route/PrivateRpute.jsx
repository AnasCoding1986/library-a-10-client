import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRpute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-ball loading-lg"></span>;
    }

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRpute;

PrivateRpute.propTypes = {
    children: PropTypes.node,
}