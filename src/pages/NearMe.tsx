
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryNav from '../components/CategoryNav';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const nearMeEvents = [
  {
    id: "n1",
    title: "Local Food Festival",
    date: "Jun 5, 2025",
    location: "Central Park, New York",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$15",
    distance: "0.5 miles away"
  },
  {
    id: "n2",
    title: "Neighborhood Art Exhibition",
    date: "Jun 12, 2025",
    location: "Community Gallery, Brooklyn",
    image: "https://images.unsplash.com/photo-1532456745301-b2c645d8b80d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$10",
    distance: "1.2 miles away"
  },
  {
    id: "n3",
    title: "Local Jazz Night",
    date: "Jun 18, 2025",
    location: "Blue Note Jazz Club, Manhattan",
    image: "https://images.unsplash.com/photo-1483393458019-411bc6bd104e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$25",
    distance: "1.8 miles away"
  },
  {
    id: "n4",
    title: "Community Theater Show",
    date: "Jun 25, 2025",
    location: "Village Playhouse, Queens",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$20",
    distance: "2.3 miles away"
  },
  {
    id: "n5",
    title: "Local Sports Tournament",
    date: "Jul 8, 2025",
    location: "City Sports Center, Bronx",
    image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$5",
    distance: "3.1 miles away"
  },
  {
    id: "n6",
    title: "Weekend Farmer's Market",
    date: "Every Saturday",
    location: "Union Square, Manhattan",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Free",
    distance: "1.4 miles away"
  }
];

const NearMe = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CategoryNav />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-500 to-teal-500 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <MapPin size={36} className="mr-2" />
              <h1 className="text-3xl md:text-4xl font-bold">Events Near You</h1>
            </div>
            <p className="text-lg max-w-2xl mx-auto">
              Discover amazing events happening right in your neighborhood.
            </p>
          </div>
        </section>

        {/* Near Me Events List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Events in Your Area</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearMeEvents.map((event) => (
                <Card key={event.id} className="h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-black/70 text-white">
                        {event.distance}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2">Local</Badge>
                    <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <Calendar size={14} className="mr-1" />
                      <span>{event.date}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{event.location}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm font-medium text-ticket-blue">From {event.price}</span>
                      <Button size="sm" variant="outline" asChild className="text-ticket-blue border-ticket-blue hover:bg-ticket-blue hover:text-white">
                        <Link to={`/event/${event.id}`}>Book Tickets</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NearMe;
