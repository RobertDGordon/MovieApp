/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
// import { getToken } from "./index";

const PrivateRoute = ({ children }) => {
	const isAuthenticated = sessionStorage.getItem('authenticated') || false;
  return isAuthenticated ? children : <Navigate to='/' replace/>;
};

export default PrivateRoute;
