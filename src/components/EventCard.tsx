
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

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
  // Enhanced debugging for the event card routing
  console.log(`Rendering EventCard: ID=${id}, Title=${title}, Category=${category}`);
  
  // Always use the original ID as provided without modifications
  console.log(`Using exact event ID for routing: ${id} for event: ${title}`);
  
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
              to={`/event/${id}`} 
              onClick={() => console.log(`Clicked event: ${title}, navigating to: /event/${id}`)}
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
