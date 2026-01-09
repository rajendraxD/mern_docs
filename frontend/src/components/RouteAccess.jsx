import { Outlet, Navigate } from "react-router-dom";
// import { getToken } from "../services/interceptorService";
export const ProtectedRoute = () => {
  // const isLoggedIn = getToken()
  const isLoggedIn = localStorage.getItem("token") || false;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
export const PublicRoute = () => {
  const isLoggedIn = localStorage.getItem("token") || false;

  return isLoggedIn ? <Navigate to="/home" replace /> : <Outlet />;
};

// export const ProtectedRoute = () => {

//   if (!getToken()) return <Navigate to="/user-login" replace />;
//   return (
//     <Outlet />
//   );
// };
// export const PublicRoute = () => {

//   if (getToken()) return <Navigate to="/home" replace />;
//   return (
//     <Outlet />
//   );
// };