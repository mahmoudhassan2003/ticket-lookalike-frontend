
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-16">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-ticket-blue mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-8">Oops! We couldn't find that page</p>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            The page you're looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Button className="bg-ticket-blue hover:bg-ticket-lightBlue">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
