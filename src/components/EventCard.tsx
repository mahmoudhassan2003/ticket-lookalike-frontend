import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
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
  return (
    <Link to={`/event/${id}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <Badge className="mb-2">{category}</Badge>
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <Calendar className="w-4 h-4 mr-1" /> {date}
          </div>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <MapPin className="w-4 h-4 mr-1" /> {location}
          </div>
          {fromText && (
            <div className="mt-2 text-sm font-medium text-primary">
              From ${fromText}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
