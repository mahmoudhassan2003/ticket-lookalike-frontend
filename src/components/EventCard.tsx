
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar } from "lucide-react";

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

const EventCard = ({
  id,
  title,
  date,
  location,
  image,
  category,
  isFeatured = false,
  fromText = "From"
}: EventCardProps) => {
  return (
    <Card className="event-card overflow-hidden h-full border border-gray-200 rounded-lg">
      <div className="relative h-40 md:h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {isFeatured && (
          <Badge className="absolute top-2 right-2 bg-ticket-blue text-white">
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <Badge variant="outline" className="mb-2 font-normal text-xs">
          {category}
        </Badge>
        <h3 className="font-semibold text-lg mb-1 line-clamp-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
        </div>
        <p className="text-sm text-gray-500 truncate">{location}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="text-sm text-ticket-blue font-medium">{fromText} $35</span>
        <a 
          href={`/event/${id}`} 
          className="text-sm font-medium text-ticket-blue hover:underline"
        >
          View tickets
        </a>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
