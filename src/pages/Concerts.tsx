
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryNav from '../components/CategoryNav';
import { Music2 } from "lucide-react";
import EventCard from '../components/EventCard';

const concertEvents = [
  {
    id: "c1",
    title: "Taylor Swift - The Eras Tour",
    date: "Jul 15, 2025",
    location: "Wembley Stadium, London",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts"
  },
  {
    id: "c2",
    title: "Bruno Mars World Tour",
    date: "Aug 5, 2025",
    location: "Madison Square Garden, New York",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts"
  },
  {
    id: "c3",
    title: "Adele Live in Concert",
    date: "Sep 10, 2025",
    location: "O2 Arena, London",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts"
  },
  {
    id: "c4",
    title: "Beyoncé Renaissance World Tour",
    date: "Oct 3, 2025",
    location: "Stade de France, Paris",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts"
  },
  {
    id: "c5",
    title: "The Weeknd After Hours Tour",
    date: "Nov 12, 2025",
    location: "Scotiabank Arena, Toronto",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts"
  },
  {
    id: "c6",
    title: "BTS World Tour",
    date: "Dec 7, 2025",
    location: "Tokyo Dome, Japan",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts"
  }
];

const Concerts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CategoryNav />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ticket-blue to-purple-700 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Music2 size={36} className="mr-2" />
              <h1 className="text-3xl md:text-4xl font-bold">Concerts</h1>
            </div>
            <p className="text-lg max-w-2xl mx-auto">
              Experience the thrill of live music performances from your favorite artists.
            </p>
          </div>
        </section>

        {/* Concerts List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Upcoming Concerts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {concertEvents.map((event) => (
                <EventCard 
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  image={event.image}
                  category={event.category}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Concerts;
