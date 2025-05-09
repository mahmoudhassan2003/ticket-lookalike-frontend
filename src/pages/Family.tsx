
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryNav from '../components/CategoryNav';
import { Users } from "lucide-react";
import EventCard from '../components/EventCard';

// Ensuring event IDs precisely match those in EventDetail.tsx
const familyEvents = [
  {
    id: "f2", // This ID exactly matches the one in EventDetail.tsx
    title: "Disney on Ice",
    date: "Dec 10-15, 2025",
    location: "Barclays Center, New York",
    image: "https://images.unsplash.com/photo-1580974852861-c381510bc98a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Family",
    price: 39.99
  },
  {
    id: "peppa-pig", // Using unique, descriptive IDs that match EventDetail.tsx
    title: "Peppa Pig Live Show",
    date: "Nov 5, 2025",
    location: "The SSE Arena, London",
    image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Family",
    price: 29.99
  },
  {
    id: "science-festival",
    title: "Family Science Festival",
    date: "Oct 22, 2025",
    location: "National Science Museum, Washington DC",
    image: "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Family",
    price: 24.99
  },
  {
    id: "lego-exhibition",
    title: "LEGO Exhibition",
    date: "Sep 18-25, 2025",
    location: "Convention Center, Chicago",
    image: "https://images.unsplash.com/photo-1560961911-ba7ef651a56c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Family",
    price: 19.99
  },
  {
    id: "zoo-adventure",
    title: "Zoo Adventure Day",
    date: "Aug 12, 2025",
    location: "San Diego Zoo",
    image: "https://images.unsplash.com/photo-1534442358476-22ebece702fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Family",
    price: 34.99
  },
  {
    id: "marvel-experience",
    title: "Marvel Superhero Experience",
    date: "Jul 4, 2025",
    location: "Universal Studios, Orlando",
    image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Family",
    price: 49.99
  }
];

const Family = () => {
  // Enhanced console logging for debugging
  React.useEffect(() => {
    console.log("Loading Family page with events:", familyEvents);
    console.log("Event IDs on Family page:", familyEvents.map(event => event.id));
  }, []);

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

export default Family;
