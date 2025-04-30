
import React, { useContext } from 'react';
import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPin, Music, Trophy, Theater as TheaterIcon, Smile, Flag, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";

const CategoryNav = () => {
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  
  const categories = [
    { name: language === 'ar' ? "كل الفعاليات" : "All Events", icon: CalendarIcon, path: "/" },
    { name: language === 'ar' ? "حفلات" : "Concerts", icon: Music, path: "/concerts" },
    { name: language === 'ar' ? "رياضة" : "Sports", icon: Trophy, path: "/sports" },
    { name: language === 'ar' ? "مسرح" : "Theater", icon: TheaterIcon, path: "/theater" },
    { name: language === 'ar' ? "كوميديا" : "Comedy", icon: Smile, path: "/comedy" },
    { name: language === 'ar' ? "مهرجانات" : "Festivals", icon: Flag, path: "/festivals" },
    { name: language === 'ar' ? "للعائلة" : "Family", icon: Users, path: "/family" },
    { name: language === 'ar' ? "بالقرب مني" : "Near Me", icon: MapPin, path: "/near-me" },
  ];

  return (
    <div className="bg-ticket-silver/10 border-b border-ticket-silver/20" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 py-2">
        <div className="overflow-x-auto">
          <div className="flex items-center space-x-1 md:space-x-2 py-2 min-w-max">
            {categories.map((category) => (
              <Button 
                key={category.name}
                variant="ghost" 
                size="sm"
                asChild
                className="category-button whitespace-nowrap rounded-full px-4 text-sm font-medium text-ticket-blue hover:bg-ticket-blue hover:text-white"
              >
                <Link to={category.path} className="flex items-center">
                  {category.icon && <category.icon className={`h-4 w-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />}
                  {category.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
