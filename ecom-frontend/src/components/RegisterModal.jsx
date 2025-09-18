import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/animations.css';

const RegisterModal = ({ isOpen, onClose, onSwitchToLogin }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement registration logic
        console.log('Register with:', formData);
    };

    return (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
            <div className="relative bg-white shadow-2xl rounded-2xl w-full max-w-md overflow-hidden">
                {/* Header Gradient Bar */}
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2"></div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="top-4 right-4 z-10 absolute font-bold text-gray-500 hover:text-gray-700 text-xl"
                >
                    ×
                </button>

                <div className="p-8">
                    <div className="mb-8 text-center">
                        <h2 className="mb-2 font-bold text-gray-900 text-2xl">
                            Create a new account
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Or{' '}
                            <button
                                onClick={onSwitchToLogin}
                                className="font-medium text-cyan-600 hover:text-blue-600 transition-colors"
                            >
                                sign in to your account
                            </button>
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Input */}
                        <div>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full"
                            />
                        </div>

                        {/* Phone Number Input */}
                        <div>
                            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                                <span className="bg-gray-50 px-4 py-3 border-gray-300 border-r text-gray-500">
                                    +88
                                </span>
                                <input
                                    type="tel"
                                    placeholder="Your Contact Number"
                                    className="flex-1 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>
                        </div>

                        {/* Send OTP Button */}
                        <button
                            type="submit"
                            className="bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg w-full font-medium text-white transition-colors"
                        >
                            Send OTP
                        </button>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="border-gray-300 border-t w-full"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-2 text-gray-500">or continue with</span>
                            </div>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="gap-4 grid grid-cols-2">
                            <button
                                type="button"
                                className="flex justify-center items-center hover:bg-gray-50 px-4 py-2 border border-gray-300 rounded-lg transition-colors"
                            >
                                <img
                                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                                    alt="Google"
                                    className="mr-2 w-5 h-5"
                                />
                                <span className="font-medium text-sm">Google</span>
                            </button>
                            <button
                                type="button"
                                className="flex justify-center items-center hover:bg-gray-50 px-4 py-2 border border-gray-300 rounded-lg transition-colors"
                            >
                                <img
                                    src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                                    alt="Facebook"
                                    className="mr-2 w-5 h-5"
                                />
                                <span className="font-medium text-sm">Facebook</span>
                            </button>
                        </div>
                    </form>

                    {/* Terms and Privacy */}
                    <p className="mt-6 text-gray-500 text-sm text-center">
                        By continuing you agree to our{' '}
                        <Link to="/terms" className="text-cyan-600 hover:text-cyan-500">
                            Terms & Conditions
                        </Link>
                        ,{' '}
                        <Link to="/privacy" className="text-cyan-600 hover:text-cyan-500">
                            Privacy Policy
                        </Link>
                        {' '}&{' '}
                        <Link to="/refund" className="text-cyan-600 hover:text-cyan-500">
                            Refund-Return Policy
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterModal;