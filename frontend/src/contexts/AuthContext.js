import React, { useContext, useState, useEffect } from "react";
import UserServices from "../services/UserServices";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [userEntity, setUserEntity] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log("Email sent.");
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        console.log(error);
      });
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function fetchData() {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        let userEn = await UserServices.getUserByEntityId(user.uid);
        setUserEntity(userEn);
      }
      setLoading(false);
    });

    return unsubscribe;
  }

  useEffect(() => {
    fetchData();
  }, []);

  const value = {
    currentUser,
    userEntity,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
