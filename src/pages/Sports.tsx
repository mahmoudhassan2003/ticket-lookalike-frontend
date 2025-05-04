
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryNav from '../components/CategoryNav';
import { Trophy, Calendar } from "lucide-react";
import EventCard from '../components/EventCard';

const sportsEvents = [
  {
    id: "s1", // ID matches EventDetail.tsx
    title: "Premier League: Arsenal vs. Manchester United",
    date: "Aug 12, 2025",
    location: "Emirates Stadium, London",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports"
  },
  {
    id: "sports-nba", // Unique ID
    title: "NBA Finals Game 1",
    date: "Jun 4, 2025",
    location: "Madison Square Garden, New York",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports"
  },
  {
    id: "sports-wimbledon", // Unique ID
    title: "2025 Wimbledon Men's Final",
    date: "Jul 16, 2025",
    location: "All England Club, London",
    image: "https://images.unsplash.com/photo-1623068481021-099cc81cc8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports"
  },
  {
    id: "sports-ucl", // Unique ID
    title: "UEFA Champions League Final",
    date: "May 31, 2025",
    location: "Wembley Stadium, London",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports"
  },
  {
    id: "sports-f1", // Unique ID
    title: "Formula 1 Monaco Grand Prix",
    date: "May 25, 2025",
    location: "Circuit de Monaco, Monte Carlo",
    image: "https://images.unsplash.com/photo-1541439460834-4ab9a3dd8e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports"
  },
  {
    id: "sports-nfl", // Unique ID
    title: "NFL International Series",
    date: "Oct 19, 2025",
    location: "Tottenham Hotspur Stadium, London",
    image: "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports"
  }
];

const Sports = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CategoryNav />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ticket-blue to-green-600 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Trophy size={36} className="mr-2" />
              <h1 className="text-3xl md:text-4xl font-bold">Sports Events</h1>
            </div>
            <p className="text-lg max-w-2xl mx-auto">
              Experience the excitement and passion of live sports events from around the world.
            </p>
          </div>
        </section>

        {/* Sports Events List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Upcoming Sports Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sportsEvents.map((event) => (
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

export default Sports;
