import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../components/Signup";
import Dashboard from "./Dashboard";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";
import ForgotPassword from "../components/ForgotPassword";
import UpdateProfile from "../components/UpdateProfile";
import Navbar from "../components/Navbar";
import HomePage from "./HomePage";
import Footer from "../components/Footer";
import Account from "../components/Account";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/dashboard" element={<PrivateRoute />}>
              <Route exact path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route exact path="/account" element={<PrivateRoute />}>
              <Route exact path="/account" element={<Account />} />
            </Route>
            <Route exact path="/update-profile" element={<PrivateRoute />}>
              <Route exact path="/update-profile" element={<UpdateProfile />} />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
