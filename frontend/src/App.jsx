import { useState } from 'react'
import './App.css'
import React from "react";
import { useNavigate } from "react-router-dom";

export function App() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/auth"); // login/register page
  };

  return (
    <>
      <div className="w-full h-screen">
      
      {/* NAVBAR */}
      <nav className="z-10 flex justify-between items-center px-10 py-4 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">BookStore</h1>

        <ul className="flex gap-6 text-sm">
          <li className="hover:text-yellow-400 cursor-pointer">User Management</li>
          <li className="hover:text-yellow-400 cursor-pointer">Book Management</li>
          <li className="hover:text-yellow-400 cursor-pointer">Transactions</li>
          <li className="hover:text-yellow-400 cursor-pointer">Admin</li>
          <li className="hover:text-yellow-400 cursor-pointer">Authors/Suppliers</li>
          <li className="hover:text-yellow-400 cursor-pointer">Feedback</li>
        </ul>

        <button
          onClick={handleGetStarted}
          className="bg-yellow-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-yellow-400"
        >
          Get Started
        </button>
      </nav>

      {/* HERO SECTION */}
      <div
  className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
  }}
>
  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* CONTENT */}
  <div className="relative z-10 p-10 text-white max-w-2xl">
    <h1 className="text-4xl font-bold mb-4">
      Welcome to Your Online Bookstore
    </h1>

    <p className="text-lg mb-6">
      Discover thousands of books, manage your inventory, track sales, and
      connect with authors and suppliers—all in one powerful platform.
    </p>

    <button
      onClick={handleGetStarted}
      className="bg-yellow-500 px-6 py-3 rounded-lg text-black font-semibold hover:bg-yellow-400"
    >
      Get Started
    </button>
  </div>
</div>
    </div>
    </>
  )
}

export default App
