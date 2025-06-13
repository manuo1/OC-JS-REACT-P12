import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/common/Layout";
import Error404 from "../pages/Error404";
import ProfilePage from "../pages/ProfilePage";

/**
 * Router component defining the application routes.
 *
 * Uses React Router v6 to declare the route structure.
 * The Layout component wraps the nested routes.
 *
 * Routes:
 * - "/" renders HomePage
 * - "/profil/:id" renders ProfilePage with dynamic user id param
 * - "/404" renders Error404 page
 * - "*" (catch-all) renders Error404 page for unknown routes
 *
 * @component
 * @returns {JSX.Element} The route configuration component.
 */
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/profil/:id" element={<ProfilePage />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default Router;
