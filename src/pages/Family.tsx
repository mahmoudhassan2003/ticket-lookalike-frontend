
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryNav from '../components/CategoryNav';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const familyEvents = [
  {
    id: "f1",
    title: "Disney on Ice",
    date: "Dec 10-15, 2025",
    location: "Barclays Center, New York",
    image: "https://images.unsplash.com/photo-1580974852861-c381510bc98a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$45"
  },
  {
    id: "f2",
    title: "Peppa Pig Live Show",
    date: "Nov 5, 2025",
    location: "The SSE Arena, London",
    image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$35"
  },
  {
    id: "f3",
    title: "Family Science Festival",
    date: "Oct 22, 2025",
    location: "National Science Museum, Washington DC",
    image: "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$25"
  },
  {
    id: "f4",
    title: "LEGO Exhibition",
    date: "Sep 18-25, 2025",
    location: "Convention Center, Chicago",
    image: "https://images.unsplash.com/photo-1560961911-ba7ef651a56c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$30"
  },
  {
    id: "f5",
    title: "Zoo Adventure Day",
    date: "Aug 12, 2025",
    location: "San Diego Zoo",
    image: "https://images.unsplash.com/photo-1534442358476-22ebece702fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$40"
  },
  {
    id: "f6",
    title: "Marvel Superhero Experience",
    date: "Jul 4, 2025",
    location: "Universal Studios, Orlando",
    image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$55"
  }
];

const Family = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CategoryNav />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-500 to-purple-500 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Users size={36} className="mr-2" />
              <h1 className="text-3xl md:text-4xl font-bold">Family Events</h1>
            </div>
            <p className="text-lg max-w-2xl mx-auto">
              Fun and exciting events for the whole family to enjoy together.
            </p>
          </div>
        </section>

        {/* Family Events List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Upcoming Family Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {familyEvents.map((event) => (
                <Card key={event.id} className="h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2">Family</Badge>
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

export default Family;
