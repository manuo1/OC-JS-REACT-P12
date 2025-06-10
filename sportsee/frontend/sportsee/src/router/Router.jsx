import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/common/Layout";
import Error404 from "../pages/Error404";
import ProfilePage from "../pages/ProfilePage";

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
