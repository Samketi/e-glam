// src/pages/Login.js
import React from "react";
import { auth, googleProvider, facebookProvider } from "../auth/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate("/");
    } catch (error) {
      console.error("Facebook login error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white py-2 rounded mb-4"
        >
          Continue with Google
        </button>
        <button
          onClick={handleFacebookLogin}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Continue with Facebook
        </button>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
