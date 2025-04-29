
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
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const { toast } = useToast();

  const toggleLanguage = (lang: 'en' | 'ar') => {
    setLanguage(lang);
    toast({
      title: lang === 'en' ? 'Language Changed' : 'تم تغيير اللغة',
      description: lang === 'en' ? 'English is now selected.' : 'تم اختيار اللغة العربية.',
      duration: 3000
    });
    // In a real app, this would trigger language change throughout the application
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-ticket-blue">Ticket<span className="text-ticket-darkOrange">Marché</span></span>
            </Link>
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
            <Link to="/concerts" className="header-link text-sm font-medium">Concerts</Link>
            <Link to="/sports" className="header-link text-sm font-medium">Sports</Link>
            <Link to="/theater" className="header-link text-sm font-medium">Theater</Link>
            <Link to="/festivals" className="header-link text-sm font-medium">Festivals</Link>
            <Link to="/contact" className="header-link text-sm font-medium">Contact</Link>
            <Link to="/support" className="header-link text-sm font-medium">Support</Link>
            
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
                  {language === 'ar' ? 'العربية' : 'العربية'}
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
            <Link to="/concerts" className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200">Concerts</Link>
            <Link to="/sports" className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200">Sports</Link>
            <Link to="/theater" className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200">Theater</Link>
            <Link to="/festivals" className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200">Festivals</Link>
            <Link to="/contact" className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200">Contact</Link>
            <Link to="/support" className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200">Support</Link>
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
                  {language === 'ar' ? 'ع' : 'ع'}
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
