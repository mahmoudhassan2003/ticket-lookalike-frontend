
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useWishlist } from "@/contexts/WishlistContext";

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
  
  // Create a direct variable for the URL to ensure consistency
  const eventUrl = `/event/${id}`;
  
  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
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
