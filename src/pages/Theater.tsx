
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryNav from '../components/CategoryNav';
import { Theater as TheaterIcon } from "lucide-react";
import EventCard from '../components/EventCard';

const theaterEvents = [
  {
    id: "t1", // ID matches EventDetail.tsx
    title: "Hamilton",
    date: "Jun 15-30, 2025",
    location: "Victoria Palace Theatre, London",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater",
    price: 149.99
  },
  {
    id: "theater-phantom", // Unique ID
    title: "The Phantom of the Opera",
    date: "Jul 5-20, 2025",
    location: "Her Majesty's Theatre, London",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater",
    price: 129.99
  },
  {
    id: "theater-les-mis", // Unique ID
    title: "Les Misérables",
    date: "Aug 10-25, 2025",
    location: "Sondheim Theatre, London",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater",
    price: 119.99
  },
  {
    id: "theater-lion-king", // Unique ID
    title: "The Lion King",
    date: "Sep 5-20, 2025",
    location: "Lyceum Theatre, London",
    image: "https://images.unsplash.com/photo-1583004231508-e462638c634a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater",
    price: 139.99
  },
  {
    id: "theater-wicked", // Unique ID
    title: "Wicked",
    date: "Oct 10-25, 2025",
    location: "Apollo Victoria Theatre, London",
    image: "https://images.unsplash.com/photo-1568085874298-f67cb4fbd92f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater",
    price: 124.99
  },
  {
    id: "theater-matilda", // Unique ID
    title: "Matilda The Musical",
    date: "Nov 5-20, 2025",
    location: "Cambridge Theatre, London",
    image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater",
    price: 109.99
  }
];

const Theater = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CategoryNav />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ticket-darkOrange to-red-500 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <TheaterIcon size={36} className="mr-2" />
              <h1 className="text-3xl md:text-4xl font-bold">Theater</h1>
            </div>
            <p className="text-lg max-w-2xl mx-auto">
              Experience the magic of live performances from award-winning shows and productions.
            </p>
          </div>
        </section>

        {/* Theater Events List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Upcoming Theater Shows</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {theaterEvents.map((event) => (
                <EventCard 
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  image={event.image}
                  category={event.category}
                  fromText={`From $${event.price}`}
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

export default Theater;
