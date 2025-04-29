
import React from 'react';
import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPin } from "lucide-react";

const categories = [
  { name: "All Events", icon: CalendarIcon },
  { name: "Concerts", icon: null },
  { name: "Sports", icon: null },
  { name: "Theater", icon: null },
  { name: "Comedy", icon: null },
  { name: "Festivals", icon: null },
  { name: "Family", icon: null },
  { name: "Near Me", icon: MapPin },
];

const CategoryNav = () => {
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4 py-2">
        <div className="overflow-x-auto">
          <div className="flex items-center space-x-1 md:space-x-2 py-2 min-w-max">
            {categories.map((category) => (
              <Button 
                key={category.name}
                variant="ghost" 
                size="sm"
                className="category-button whitespace-nowrap rounded-full px-4 text-sm font-medium"
              >
                {category.icon && <category.icon className="mr-1 h-4 w-4" />}
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
