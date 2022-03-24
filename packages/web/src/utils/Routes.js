import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import EditProfile from "../pages/EditProfile/EditProfile";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Profile from "../pages/Profile/Profile";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import Signup from "../pages/Signup/Signup";
import OnlyUnauthRoute from "../routes/OnlyUnauthRoute";
import ProtectedRoute from "../routes/ProtectedRoute";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import Orders from "../pages/Orders/Orders";
import Order from "../pages/Order/Order";
import HomePage from "../pages/HomePage/HomePage";
import ProductPage from "../pages/ProductPage/ProductPage";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import CartPage from "../pages/CartPage/CartPage";
import MegaMenu from "../pages/HomePage/MegaMenu/MegaMenu";
import EditProfilePage from "../pages/EditUser/EditProfilePage/EditProfilePage";
import AddressMain from "../pages/EditUser/Address/AddressMain";
import DeliveryPage from "../pages/Delivery/DeliveryPage";
import EditUser from "../pages/EditUser/EditUser";

const LayoutsWithNavbar = () => (
  <>
    <MegaMenu />
    <Outlet />
  </>
);
const AllRoutes = () => {
  return (
    <Router>
      {/* <LayoutsWithNavbar /> */}
      <Routes>
        <Route path="/" element={<LayoutsWithNavbar />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
        </Route>
        {/* <Route path="/product/:p_id" element={<Product />} /> */}
        <Route path="/delivery/orders/:order_id" element={<DeliveryPage />} />
        <Route
          path="/me"
          element={
            <ProtectedRoute redirectTo="/login">
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute redirectTo="/login">
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders/:order_id"
          element={
            <ProtectedRoute redirectTo="/login">
              <Order />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute redirectTo="/login">
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit/:section"
          element={
            <ProtectedRoute redirectTo="/login">
              <EditUser />
              {/* <EditProfilePage /> */}
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute redirectTo="/login">
              <CartPage />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route
          exact
          path="/signup"
          element={
            <OnlyUnauthRoute redirectTo={"/me"}>
              <Signup />
            </OnlyUnauthRoute>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <OnlyUnauthRoute redirectTo={"/me"}>
              <Login />
            </OnlyUnauthRoute>
          }
        />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
