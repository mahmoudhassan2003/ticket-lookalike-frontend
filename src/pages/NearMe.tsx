
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryNav from '../components/CategoryNav';
import { MapPin } from "lucide-react";
import EventCard from '../components/EventCard';

const nearMeEvents = [
  {
    id: "n1", // ID matches EventDetail.tsx
    title: "Local Food Festival",
    date: "Jun 5, 2025",
    location: "Central Park, New York",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$15",
    category: "Local",
    distance: "0.5 miles away"
  },
  {
    id: "nearme-art", // Unique ID
    title: "Neighborhood Art Exhibition",
    date: "Jun 12, 2025",
    location: "Community Gallery, Brooklyn",
    image: "https://images.unsplash.com/photo-1532456745301-b2c645d8b80d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$10",
    category: "Local",
    distance: "1.2 miles away"
  },
  {
    id: "nearme-jazz", // Unique ID
    title: "Local Jazz Night",
    date: "Jun 18, 2025",
    location: "Blue Note Jazz Club, Manhattan",
    image: "https://images.unsplash.com/photo-1483393458019-411bc6bd104e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$25",
    category: "Local",
    distance: "1.8 miles away"
  },
  {
    id: "nearme-theater", // Unique ID
    title: "Community Theater Show",
    date: "Jun 25, 2025",
    location: "Village Playhouse, Queens",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$20",
    category: "Local",
    distance: "2.3 miles away"
  },
  {
    id: "nearme-sports", // Unique ID
    title: "Local Sports Tournament",
    date: "Jul 8, 2025",
    location: "City Sports Center, Bronx",
    image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$5",
    category: "Local",
    distance: "3.1 miles away"
  },
  {
    id: "nearme-market", // Unique ID
    title: "Weekend Farmer's Market",
    date: "Every Saturday",
    location: "Union Square, Manhattan",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Free",
    category: "Local",
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

export default NearMe;
