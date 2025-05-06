
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    // Enhanced debugging information
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Additional debug information
    console.log("Current location state:", location.state);
    console.log("Current URL parameters:", location.search);
    console.log("Last part of URL path:", location.pathname.split('/').pop());
    console.log("Full path breakdown:", location.pathname.split('/'));
    
    // Parse event ID if applicable
    const pathParts = location.pathname.split('/');
    if (pathParts[1] === 'event' && pathParts[2]) {
      console.log("Event ID from URL:", pathParts[2]);
    }
  }, [location.pathname, location.search, location.state]);

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
          <Button 
            className="bg-ticket-blue hover:bg-ticket-lightBlue"
            onClick={() => navigate("/")}
          >
            Return to Home
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
