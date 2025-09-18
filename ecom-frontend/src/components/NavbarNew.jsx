import React, { useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";

const Navbar = () => {
    const [cartCount, setCartCount] = useState(0);

    return (
        <nav className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md">
            <div className="mx-auto px-4 max-w-7xl">
                <div className="flex justify-between items-center py-4">
                    {/* LEFT - Logo */}
                    <Link to="/" className="flex flex-shrink-0 items-center space-x-2">
                        <img src={logo} alt="ShopSpot Logo" className="w-12 h-12" />
                        <span className="font-bold text-white text-4xl">ShopSpot Online</span>
                    </Link>

                    {/* CENTER - Search Bar */}
                    <div className="hidden md:flex flex-1 justify-center px-6">
                        <div className="relative w-full max-w-2xl">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="px-5 py-3 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-white w-full text-gray-700 text-lg"
                            />
                            <button className="top-0 right-0 bottom-0 absolute flex justify-center items-center bg-green-500 hover:bg-green-600 px-5 rounded-r-full transition-colors">
                                <Search className="text-white" size={25} />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT - Buttons */}
                    <div className="flex flex-shrink-0 items-center space-x-4">
                        {/* Cart */}
                        <div className="relative cursor-pointer">
                            <ShoppingCart className="text-white hover:text-gray-200" size={30} />
                            <span className="-top-2 -right-2 absolute flex justify-center items-center bg-red-500 rounded-full w-5 h-5 font-bold text-white text-xs">
                                {cartCount}
                            </span>
                        </div>

                        {/* Sign In */}
                        <Link to="/login">
                            <button className="flex items-center bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-full hover:scale-105 transition-all duration-300 transform">
                                <User className="mr-2 text-white" size={20} />
                                <span className="font-medium text-white">Sign In</span>
                            </button>
                        </Link>

                        {/* Sign Up */}
                        <Link to="/register">
                            <button className="flex items-center bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-full hover:scale-105 transition-all duration-300 transform">
                                <User className="mr-2 text-white" size={20} />
                                <span className="font-medium text-white">Sign Up</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;