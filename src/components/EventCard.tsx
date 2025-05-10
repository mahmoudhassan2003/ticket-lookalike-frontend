
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useWishlist } from "@/contexts/WishlistContext";
import { useToast } from "@/hooks/use-toast";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  category: string;
  isFeatured?: boolean;
  fromText?: string;
}

const EventCard = ({ id, title, date, location, image, category, isFeatured, fromText }: EventCardProps) => {
  // Extra detailed debugging to help track event ID issues
  console.log(`Rendering EventCard: ID=${id}, Title=${title}, Category=${category}`);
  console.log(`Event route will be: /event/${id}`);
  
  const { toast } = useToast();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(id);
  
  // Create a direct variable for the URL to ensure consistency
  const eventUrl = `/event/${id}`;
  
  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to event detail
    e.stopPropagation(); // Prevent event bubbling
    
    if (inWishlist) {
      removeFromWishlist(id);
      toast({
        title: "Removed from wishlist",
        description: `${title} has been removed from your wishlist`
      });
    } else {
      // Extract price from fromText or use a default price
      const price = fromText 
        ? parseFloat(fromText.replace(/[^0-9.]/g, '')) 
        : 29.99;
      
      console.log(`Adding to wishlist with price: ${price}`);
      
      addToWishlist({
        id,
        title,
        date,
        location,
        image,
        category,
        price: price
      });
      
      toast({
        title: "Added to wishlist",
        description: `${title} has been added to your wishlist`
      });
    }
  };
  
  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors ${inWishlist ? 'text-red-500' : 'text-gray-400'}`}
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill={inWishlist ? "currentColor" : "none"} 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </button>
      </div>
      <CardContent className="p-4">
        <Badge variant="outline" className="mb-2">{category}</Badge>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin size={14} className="mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          {fromText && <span className="text-ticket-blue font-medium">{fromText}</span>}
          <Button size="sm" variant="outline" asChild className="text-ticket-blue border-ticket-blue hover:bg-ticket-blue hover:text-white">
            <Link 
              to={eventUrl} 
              onClick={() => {
                console.log(`Clicked event: ${title} with ID: ${id}`);
                console.log(`Navigating to: ${eventUrl}`);
              }}
            >
              Book Tickets
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
