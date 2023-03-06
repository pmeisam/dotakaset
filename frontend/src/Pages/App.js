import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Auth Context
import { AuthProvider, useAuth } from "../contexts/AuthContext";

// Pages
import Signup from "../components/Signup";
import Dashboard from "./Dashboard";
import CreateUser from "./CreateUser";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";
import ForgotPassword from "../components/ForgotPassword";
import UpdateProfile from "../components/UpdateProfile";
import Navbar from "../components/Navbar";
import HomePage from "./HomePage";
import Footer from "../components/Footer";
import Account from "../components/Account";
import Subscriptions from "./Subscriptions";
import VerifyEmail from "../components/VerifyEmail";
import TestPage from "./TestPage";
import Upload from "./Upload";
import Checkout from "./Checkout";

function App() {
  const { currentUser } = useAuth();

  if (currentUser) {
    console.log(`${currentUser.email} logged in successfully!`);
  } else {
    console.log("No user logged in!");
  }

  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/testpage" element={<TestPage />} />
            <Route exact path="/upload" element={<Upload />} />
            <Route exact path="/checkout/:amount/:planId" element={<Checkout />} />
            <Route exact path="/dashboard" element={<PrivateRoute />}>
              <Route exact path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route exact path="/createUser" element={<PrivateRoute />}>
              <Route exact path="/createUser" element={<CreateUser />} />
            </Route>
            <Route exact path="/verifyEmail" element={<PrivateRoute />}>
              <Route exact path="/verifyEmail" element={<VerifyEmail />} />
            </Route>
            <Route exact path="/account" element={<PrivateRoute />}>
              <Route exact path="/account" element={<Account />} />
            </Route>
            <Route exact path="/subscriptions" element={<PrivateRoute />}>
              <Route exact path="/subscriptions" element={<Subscriptions />} />
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
