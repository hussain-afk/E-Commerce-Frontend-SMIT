import { Route, Routes, Navigate } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "../pages/Home";
import DetailPage from "../pages/DetailPage";
import ProdByCategory from "../pages/ProdByCategory";
import FilterProducts from "../pages/FilterProducts";
import AllProducts from "../pages/AllProducts";
import CartPage from "../pages/CartPage";
import NotFound from "../components/NotFound";
import AuthPage from "../pages/AuthPage";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { toast } from "react-hot-toast";

// 1. Chhota sa Guard Component


const Routing = () => {
  const { user } = useContext(StoreContext);

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      toast.error('You need to be logged in to access this page');
      return <Navigate to="/auth" replace />;
    }
    return children;
  };


  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {/* Unprotected Route (Har koi dekh sakta hai) */}
        <Route index element={<Home />} />

        {/* Protected Routes (Sirf logged in users ke liye) */}
        <Route 
          path="/product/:id" 
          element={<ProtectedRoute><DetailPage /></ProtectedRoute>} 
        />
        <Route 
          path="/category/:title" 
          element={<ProtectedRoute><ProdByCategory /></ProtectedRoute>} 
        />
        <Route 
          path="/shop/:cat" 
          element={<ProtectedRoute><FilterProducts /></ProtectedRoute>} 
        />
        <Route 
          path="/shop" 
          element={<AllProducts />} 
        />
        <Route 
          path="/cart" 
          element={<ProtectedRoute><CartPage /></ProtectedRoute>} 
        />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

export default Routing;