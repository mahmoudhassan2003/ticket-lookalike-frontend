
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
    // Super detailed debugging with all available info
    console.error("===== 404 ERROR DETAILS =====");
    console.error("Attempted route:", location.pathname);
    
    // Get the event ID from the URL if it exists
    const pathParts = location.pathname.split('/');
    const isEventPath = pathParts[1] === 'event';
    const eventId = isEventPath ? pathParts[2] : null;
    
    console.error("Path parts:", pathParts);
    console.error("Is event path:", isEventPath);
    console.error("Event ID from URL:", eventId);
    console.error("URL search params:", location.search);
    console.error("Location state:", location.state);
    console.error("Full location object:", location);
    
    // Show toast notification about the error
    if (isEventPath && eventId) {
      console.error(`Failed to find event with ID: "${eventId}"`);
      console.error("Event ID format:", eventId ? `Type: ${typeof eventId}, Length: ${eventId.length}` : "undefined");
      
      toast({
        title: "Event not found",
        description: `Could not find event with ID: ${eventId}. Please check the event listing.`,
        variant: "destructive",
      });
    }
  }, [location]);

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
