import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../assets/img/l3.png";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const currentPage = {
    color: "#9a8c98",
    fontWeight: "Bold",
    fontSize: "18px",
    borderBottom: "3px solid #9a8c98 ",
  };

  return (
    <nav className="bg-[#4a4e69] shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <img src={logo} alt="logo" height={50} width={150} />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-4 px-2 text-[#f2e9e4]">
                <div style={pathname === "/" ? currentPage : null}>Home</div>
              </Link>
              <Link to="/services" className="py-4 px-2 text-[#f2e9e4] ">
                <div style={pathname === "/services" ? currentPage : null}>
                  Services
                </div>
              </Link>
              <Link to="/bookings" className="py-4 px-2 text-[#f2e9e4] ">
                <div style={pathname === "/bookings" ? currentPage : null}>
                  My Bookings
                </div>
              </Link>
              <Link to="/about" className="py-4 px-2 text-[#f2e9e4] ">
                <div style={pathname === "/about" ? currentPage : null}>
                  About
                </div>
              </Link>
              <Link to="/contact" className="py-4 px-2 text-[#f2e9e4] ">
                <div style={pathname === "/contact" ? currentPage : null}>
                  Contact
                </div>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <div className="flex items-center space-x-3">
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium text-white">
                  {user.displayName}
                </span>
                <button
                  onClick={handleLogout}
                  className="py-2 px-2 font-medium text-white rounded hover:bg-gray-200 transition duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-200 transition duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="py-2 px-2 font-medium text-white bg-[#a2d2ff] rounded hover:bg-[#375572] transition duration-300"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
