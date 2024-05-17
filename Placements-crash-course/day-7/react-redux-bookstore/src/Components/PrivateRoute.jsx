import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const location = useLocation();
  const { pathname } = location;
  // Store the previous URL in sessionStorage before redirecting to login
  if (!isAuth) {
    sessionStorage.setItem('prevUrl', pathname);
  }
  return (
    <div>
      {/* Create private route */}
      {isAuth ? children : <Navigate to="/login"  />}
    </div>
  );
};
