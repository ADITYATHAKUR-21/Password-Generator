import React, { useState } from "react";
import { SignIn, SignUp, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/images/logo.svg" alt="Password Generator Logo" className="w-10 h-10" />
              <h3 className="text-2xl font-bold text-gray-900">
                PASSWORD GENERATOR
              </h3>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-4">
              {/* Save button - always visible */}
              {/* <button className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                Save
              </button> */}
              
              {/* Show authentication buttons when signed out */}
              <SignedOut>
                <button
                  onClick={() => {setShowSignUp(true); setShowSignIn(false);}}
                  className="bg-blue-600 hover:bg-blue-700 text-black px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  Sign Up
                </button>
                <button
                  onClick={() => {setShowSignIn(true); setShowSignUp(false);}}
                  className="text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  Login
                </button>
              </SignedOut>
              
              {/* Show user button when signed in */}
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal overlays for Sign In and Sign Up */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl relative">
            <button
              onClick={() => setShowSignIn(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <SignIn afterSignInUrl="/" />
          </div>
        </div>
      )}

      {showSignUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl relative">
            <button
              onClick={() => setShowSignUp(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              
            </button>
            <SignUp afterSignUpUrl="/" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
