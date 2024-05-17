import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { PrivateRoute } from "../Components/PrivateRoute";
import { RecipeDetail } from "../Pages/RecipeDetail";

export const MainRoutes = () => {
  return (
    <Routes>
      {/* Add all routes here */}
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/recipe/:id"
        element={
          <PrivateRoute>
            <RecipeDetail />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};
