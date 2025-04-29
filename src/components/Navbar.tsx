
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-ticket-blue">Ticket<span className="text-ticket-darkOrange">Marché</span></span>
            </a>
          </div>
          
          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                type="text" 
                placeholder="Search for events, artists, teams..." 
                className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:border-ticket-blue focus:ring-1 focus:ring-ticket-blue"
              />
            </div>
          </div>
          
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="header-link text-sm font-medium">Concerts</a>
            <a href="#" className="header-link text-sm font-medium">Sports</a>
            <a href="#" className="header-link text-sm font-medium">Theater</a>
            <a href="#" className="header-link text-sm font-medium">Festivals</a>
            <Button variant="ghost" size="icon" className="header-link">
              <User size={20} />
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 pt-16 px-4 md:hidden transition-transform duration-300 ease-in-out",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="py-4 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              type="text" 
              placeholder="Search for events..." 
              className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300"
            />
          </div>
          <div className="space-y-3 pt-4">
            <a href="#" className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200">Concerts</a>
            <a href="#" className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200">Sports</a>
            <a href="#" className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200">Theater</a>
            <a href="#" className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200">Festivals</a>
            <a href="#" className="flex items-center py-2 text-lg font-medium text-gray-900 border-b border-gray-200">
              <User size={20} className="mr-2" /> My Account
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
