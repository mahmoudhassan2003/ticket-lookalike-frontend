
import React from 'react';
import EventCard from './EventCard';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Event data with high-quality images
const upcomingEvents = [
  {
    id: "5",
    title: "Coldplay - Music of the Spheres World Tour",
    date: "Aug 15, 2025",
    location: "Wembley Stadium, London",
    image: "https://images.unsplash.com/photo-1470020618177-f49a96241ae7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts"
  },
  {
    id: "6",
    title: "UEFA Champions League Final",
    date: "May 31, 2025",
    location: "Allianz Arena, Munich",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports"
  },
  {
    id: "7",
    title: "Kevin Hart - Comedy Tour",
    date: "Sep 3, 2025",
    location: "Madison Square Garden, New York",
    image: "https://images.unsplash.com/photo-1606982763583-11636a6c8382?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Comedy"
  },
  {
    id: "8",
    title: "Cirque du Soleil - Alegría",
    date: "Jul 25-30, 2025",
    location: "Royal Albert Hall, London",
    image: "https://images.unsplash.com/photo-1551142915-8d5bca85a0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater"
  },
  {
    id: "9",
    title: "Imagine Dragons World Tour",
    date: "Oct 5, 2025",
    location: "T-Mobile Arena, Las Vegas",
    image: "https://images.unsplash.com/photo-1564585222527-c2777a5bc6cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts"
  },
  {
    id: "10",
    title: "Wimbledon Tennis Championships",
    date: "Jun 28 - Jul 11, 2025",
    location: "All England Club, London",
    image: "https://images.unsplash.com/photo-1565051756237-e85fb8cac7ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports"
  },
  {
    id: "11",
    title: "The Lion King - Broadway Musical",
    date: "Sep 10-20, 2025",
    location: "Minskoff Theatre, New York",
    image: "https://images.unsplash.com/photo-1583004231608-3109948a3fd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater"
  },
  {
    id: "12",
    title: "Comic Con International",
    date: "Jul 24-27, 2025",
    location: "San Diego Convention Center",
    image: "https://images.unsplash.com/photo-1612036782180-6f0822045d55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Festivals"
  }
];

const UpcomingEvents = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Upcoming Events</h2>
          <Button variant="link" className="text-ticket-blue flex items-center">
            View all <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
