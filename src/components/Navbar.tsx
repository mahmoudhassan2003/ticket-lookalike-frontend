
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Menu, X, Earth } from "lucide-react";
import { cn } from "@/lib/utils";
import Auth from '@/components/Auth';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const toggleLanguage = (lang: 'en' | 'ar') => {
    setLanguage(lang);
    // In a real app, this would trigger language change throughout the application
  };

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
            <a href="/contact" className="header-link text-sm font-medium">Contact</a>
            <a href="/support" className="header-link text-sm font-medium">Support</a>
            
            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="header-link">
                  <Earth size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => toggleLanguage('en')} className={language === 'en' ? 'bg-muted' : ''}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => toggleLanguage('ar')} className={language === 'ar' ? 'bg-muted' : ''}>
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="header-link"
              onClick={() => setIsAuthDialogOpen(true)}
            >
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
            <a href="/contact" className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200">Contact</a>
            <a href="/support" className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200">Support</a>
            <div className="flex justify-between items-center py-2 text-lg font-medium text-gray-900 border-b border-gray-200">
              <span>Language</span>
              <div className="flex space-x-3">
                <button 
                  onClick={() => toggleLanguage('en')}
                  className={`px-2 py-1 rounded ${language === 'en' ? 'bg-ticket-blue text-white' : ''}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => toggleLanguage('ar')}
                  className={`px-2 py-1 rounded ${language === 'ar' ? 'bg-ticket-blue text-white' : ''}`}
                >
                  AR
                </button>
              </div>
            </div>
            <a 
              href="#" 
              className="flex items-center py-2 text-lg font-medium text-gray-900 border-b border-gray-200"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                setIsAuthDialogOpen(true);
              }}
            >
              <User size={20} className="mr-2" /> My Account
            </a>
          </div>
        </div>
      </div>

      {/* Auth Dialog */}
      <Auth 
        isOpen={isAuthDialogOpen}
        onClose={() => setIsAuthDialogOpen(false)}
      />
    </header>
  );
};

export default Navbar;
