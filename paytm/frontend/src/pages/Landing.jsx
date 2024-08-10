import { useState } from "react";
import { Signup } from "./Signup";
import { Signin } from "./Signin";

export const Landing = () => {
    const [showSignup, setShowSignup] = useState(false);
    const [showSignin, setShowSignin] = useState(false);

    const handleShowSignup = () => {
        setShowSignup(true);
        setShowSignin(false);
    };

    const handleShowSignin = () => {
        setShowSignin(true);
        setShowSignup(false);
    };

    const handleCloseModals = () => {
        setShowSignup(false);
        setShowSignin(false);
    };

    return (
        <div>
            <AppbarLand 
                handleShowSignup={handleShowSignup}
                handleShowSignin={handleShowSignin}
                handleCloseModals={handleCloseModals}
                showSignup={showSignup}
                showSignin={showSignin}
            />
            <div className="bg-gray-100 min-h-screen flex flex-col">
                {/* Hero Section */}
                <section>
                    <div className="container mx-auto flex justify-center gap-8 z-20">
                        <Card handleShowSignup={handleShowSignup} />
                    </div>
                </section>

                <section className="bg-[#1B1A55] text-white text-center py-20 flex flex-col justify-center items-center">
                    <Heading label="Are you Existing User ?" className="text-4xl mb-4" />
                    <SubHeading label="Don't think too much, We Have one step signin : ) " className="text-xl mb-8" />
                    <Button label="One Step Sign in" onClick={handleShowSignin} className="bg-[#9290C3] text-black px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300" />
                    {showSignin && (
                        <Modal onClose={handleCloseModals}>
                            <Signin />
                        </Modal>
                    )}
                </section>

                <footer className="bg-[#070F2B] text-white py-6 text-center">
                    <p className="mb-2">© 2024 Paytm Clone. All rights reserved.</p>
                    <p>Terms of Service | Privacy Policy</p>
                </footer>
            </div>
        </div>
    );
}

const AppbarLand = ({ handleShowSignup, handleShowSignin, handleCloseModals, showSignup, showSignin }) => {
    return (
        <div className="shadow h-16 flex justify-between items-center sticky top-0 bg-white/10">
            <a href="https://paytm.com/">
                <div className="flex flex-col justify-center h-full">
                    <img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg" alt="" />
                </div>
            </a>
            <div className="flex justify-evenly items-center">
                <button onClick={handleShowSignin} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Signin</button>
                <button onClick={handleShowSignup} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Signup</button>

                {showSignup && (
                    <Modal onClose={handleCloseModals}>
                        <Signup />
                    </Modal>
                )}
                {showSignin && (
                    <Modal onClose={handleCloseModals}>
                        <Signin />
                    </Modal>
                )}
            </div>
        </div>
    );
}

const Modal = ({ onClose, children }) => {
    return (
        <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div onClick={(e) => e.stopPropagation()} className="rounded-lg shadow-lg p-8">
                {children}
            </div>
        </div>
    );
}

const Heading = ({ label, className = '' }) => {
    return (
        <h1 className={`text-3xl font-bold ${className}`}>
            {label}
        </h1>
    );
};

const SubHeading = ({ label, className = '' }) => {
    return (
        <h2 className={`text-xl font-semibold ${className}`}>
            {label}
        </h2>
    );
};

const Button = ({ label, onClick, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${className}`}
        >
            {label}
        </button>
    );
};

const Card = ({ handleShowSignup }) => {
    return (
        <section className="bg-gray-900 dark:bg-gray-900 w-full">
            <div className="border shadow-2xl text-center py-16 ">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Create a PayTm Account Now, and We'll Give You a Bonus of ₹1000+!</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <button onClick={handleShowSignup} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Get started
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                    <a href="#" className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-blue-700 dark:hover:bg-gray-70">
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    );
}
