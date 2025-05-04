
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Ticket, TheaterIcon, PartyPopper, Laugh, Users, MapPin } from "lucide-react";
import { Link } from 'react-router-dom';

const categories = [
  {
    id: "concerts",
    name: "Concerts",
    icon: <Music className="h-6 w-6 text-pink-500" />,
    link: "/concerts",
    color: "from-pink-500 to-purple-500"
  },
  {
    id: "sports",
    name: "Sports",
    icon: <Ticket className="h-6 w-6 text-blue-500" />,
    link: "/sports",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "theater",
    name: "Theater",
    icon: <TheaterIcon className="h-6 w-6 text-yellow-500" />,
    link: "/theater",
    color: "from-yellow-500 to-amber-500"
  },
  {
    id: "festivals",
    name: "Festivals",
    icon: <PartyPopper className="h-6 w-6 text-purple-500" />,
    link: "/festivals",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "comedy",
    name: "Comedy",
    icon: <Laugh className="h-6 w-6 text-green-500" />,
    link: "/comedy",
    color: "from-green-500 to-teal-500"
  },
  {
    id: "family",
    name: "Family",
    icon: <Users className="h-6 w-6 text-indigo-500" />,
    link: "/family",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: "near-me",
    name: "Near Me",
    icon: <MapPin className="h-6 w-6 text-teal-500" />,
    link: "/near-me",
    color: "from-teal-500 to-green-500"
  }
];

const PopularCategories = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Browse Popular Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {categories.map((category) => (
            <Link to={category.link} key={category.id} className="block">
              <Card className="h-full hover:shadow-md transition-shadow cursor-pointer overflow-hidden">
                <div className={`bg-gradient-to-br ${category.color} p-6 flex flex-col items-center justify-center text-white h-full`}>
                  <div className="mb-2">{category.icon}</div>
                  <span className="font-medium text-sm">{category.name}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild className="bg-ticket-blue hover:bg-blue-700">
            <Link to="/concerts">Explore All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
