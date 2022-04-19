import React from "react";
import { Navigate, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * @function ProtectedRoute
 * @description - constructs the applications protected route layout
 * @returns {JSX} - JSX
 */

const ProtectedRoute = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  //   @ts-ignore
  const { user_token } = useSelector((store) => store.Login);

  const location = useLocation();

  if (!user_token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
