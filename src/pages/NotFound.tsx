
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "@/components/ui/use-toast";
import { AlertTriangle } from "lucide-react";

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
          <div className="flex justify-center mb-4">
            <AlertTriangle size={48} className="text-red-500" />
          </div>
          <h1 className="text-4xl font-bold text-ticket-blue mb-4">404</h1>
          <h2 className="text-2xl text-gray-700 mb-4">Event not found</h2>
          <p className="text-gray-600 mb-4 max-w-lg mx-auto">
            We couldn't find the event you're looking for. The event might have been removed or the URL might be incorrect.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            {location.pathname.includes('event/') && (
              <>
                Attempted to load event with ID: <span className="font-mono bg-gray-100 px-1 rounded">{location.pathname.split('/')[2]}</span>
              </>
            )}
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
