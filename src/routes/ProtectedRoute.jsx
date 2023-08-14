import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  if (localStorage.getItem("accessToken")) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
