import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

export default function VerifyEmail() {
  const navigate = useNavigate();
  let { currentUser } = useAuth();

  let handleSendVerificationEmail = () => {
    currentUser.sendEmailVerification();
    alert(
      "Please check your inbox and follow the instructions, if you don't see the verification email from DotaKaset check your spam/junk folder!"
    );
  };

  let handleEmailVerified = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (currentUser.emailVerified) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div style={{ marginTop: "100px", marginBottom: "100px" }}>
      <h2>Please Verify your email!</h2>
      <button onClick={handleSendVerificationEmail}>
        Send Email Verification to {currentUser.email}
      </button>
      <br />
      <button onClick={handleEmailVerified}>Done!</button>
    </div>
  );
}
