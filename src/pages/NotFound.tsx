
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "@/components/ui/use-toast";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    // Comprehensive debugging information with path analysis
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    const pathParts = location.pathname.split('/');
    
    // Check if this is an event path
    if (pathParts[1] === 'event') {
      const eventId = pathParts[2];
      console.error(`Failed to find event with ID: ${eventId}`);
      console.log("Event ID format:", eventId ? `Type: ${typeof eventId}, Length: ${eventId.length}` : "undefined");
      
      // Show toast with error information for debugging
      toast({
        title: "Event not found",
        description: `Could not find event with ID: ${eventId}`,
        variant: "destructive",
      });
    }
    
    // Additional debug information
    console.log("Current location state:", location.state);
    console.log("Current URL parameters:", location.search);
    console.log("Full path breakdown:", pathParts);
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
