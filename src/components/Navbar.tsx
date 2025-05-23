
import React, { useState, useContext, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Menu, X, Earth, Heart, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import Auth from '@/components/Auth';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { LanguageContext } from "../contexts/LanguageContext";
import Cart from './Cart';
import Wishlist from './Wishlist';
import { useSearch } from "@/contexts/SearchContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery, performSearch } = useSearch();
  const isRTL = language === 'ar';

  const toggleLanguage = (lang: 'en' | 'ar') => {
    setLanguage(lang);
    toast({
      title: lang === 'en' ? 'Language Changed' : 'تم تغيير اللغة',
      description: lang === 'en' ? 'English is now selected.' : 'تم اختيار اللغة العربية.',
      duration: 3000
    });
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch(searchQuery);
      closeMobileMenu();
    }
  };

  // Update document direction based on language
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // When mobile menu is open, prevent body scrolling
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Translations based on the current language
  const translations = {
    en: {
      concerts: "Concerts",
      sports: "Sports",
      theater: "Theater",
      festivals: "Festivals",
      comedy: "Comedy",
      family: "Family",
      nearMe: "Near Me",
      contact: "Contact",
      support: "Support",
      myAccount: "My Account",
      search: "Search for events, artists, teams...",
      close: "Close Menu",
      wishlist: "Wishlist",
      cart: "Cart"
    },
    ar: {
      concerts: "حفلات",
      sports: "رياضة",
      theater: "مسرح",
      festivals: "مهرجانات",
      comedy: "كوميديا",
      family: "للعائلة",
      nearMe: "بالقرب مني",
      contact: "اتصل بنا",
      support: "الدعم",
      myAccount: "حسابي",
      search: "ابحث عن الفعاليات والفنانين والفرق...",
      close: "أغلق القائمة",
      wishlist: "قائمة الأمنيات",
      cart: "عربة التسوق"
    }
  };

  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/ce21b6df-d3ae-4cba-9271-fc0c96450673.png" 
                  alt="MarketIX Logo" 
                  className="h-full w-full object-cover" 
                />
              </div>
              <span className="text-xl font-bold ml-2">MarketIX</span>
            </Link>
          </div>
          
          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative w-full">
                <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 text-gray-400`} size={18} />
                <Input 
                  type="text" 
                  placeholder={t.search}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-2 w-full rounded-full border border-gray-300 focus:border-ticket-blue focus:ring-1 focus:ring-ticket-blue`}
                />
              </div>
            </form>
          </div>
          
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/concerts" className="header-link text-sm font-medium">{t.concerts}</Link>
            <Link to="/sports" className="header-link text-sm font-medium">{t.sports}</Link>
            <Link to="/theater" className="header-link text-sm font-medium">{t.theater}</Link>
            <Link to="/festivals" className="header-link text-sm font-medium">{t.festivals}</Link>
            <Link to="/comedy" className="header-link text-sm font-medium">{t.comedy}</Link>
            <Link to="/contact" className="header-link text-sm font-medium">{t.contact}</Link>
            
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
            
            {/* Wishlist */}
            <Wishlist />
            
            {/* Cart */}
            <Cart />
            
            {/* User Profile */}
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
        "fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out flex flex-col",
        isMobileMenuOpen ? "translate-x-0" : isRTL ? "translate-x-full" : "-translate-x-full"
      )}>
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-semibold">Menu</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-gray-500" 
            onClick={closeMobileMenu}
          >
            <X size={24} />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative">
              <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 text-gray-400`} size={18} />
              <Input 
                type="text" 
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-2 w-full rounded-full border border-gray-300`}
              />
            </div>
          </form>

          <div className="space-y-3">
            <Link 
              to="/concerts" 
              className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200"
              onClick={closeMobileMenu}
            >{t.concerts}</Link>
            <Link 
              to="/sports" 
              className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200"
              onClick={closeMobileMenu}
            >{t.sports}</Link>
            <Link 
              to="/theater" 
              className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200"
              onClick={closeMobileMenu}
            >{t.theater}</Link>
            <Link 
              to="/festivals" 
              className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200"
              onClick={closeMobileMenu}
            >{t.festivals}</Link>
            <Link 
              to="/comedy" 
              className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200"
              onClick={closeMobileMenu}
            >{t.comedy}</Link>
            <Link 
              to="/family" 
              className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200"
              onClick={closeMobileMenu}
            >{t.family}</Link>
            <Link 
              to="/near-me" 
              className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200"
              onClick={closeMobileMenu}
            >{t.nearMe}</Link>
            <Link 
              to="/contact" 
              className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200"
              onClick={closeMobileMenu}
            >{t.contact}</Link>
            <Link 
              to="/support" 
              className="block py-2 text-lg font-medium text-gray-900 border-b border-gray-200"
              onClick={closeMobileMenu}
            >{t.support}</Link>

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
                  ع
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile bottom navigation bar */}
        <div className="grid grid-cols-3 border-t bg-white py-2">
          {/* Mobile Wishlist */}
          <button 
            className="flex flex-col items-center justify-center"
            onClick={() => {
              const wishlistTriggerButton = document.querySelector('[data-wishlist-trigger="true"]');
              if (wishlistTriggerButton && wishlistTriggerButton instanceof HTMLElement) {
                wishlistTriggerButton.click();
              }
              closeMobileMenu();
            }}
          >
            <Heart size={24} className="mb-1" />
            <span className="text-xs">{t.wishlist}</span>
          </button>

          {/* Mobile Cart */}
          <button 
            className="flex flex-col items-center justify-center"
            onClick={() => {
              const cartTriggerButton = document.querySelector('[data-cart-trigger="true"]');
              if (cartTriggerButton && cartTriggerButton instanceof HTMLElement) {
                cartTriggerButton.click();
              }
              closeMobileMenu();
            }}
          >
            <ShoppingCart size={24} className="mb-1" />
            <span className="text-xs">{t.cart}</span>
          </button>

          {/* Mobile User Profile */}
          <button 
            className="flex flex-col items-center justify-center"
            onClick={() => {
              setIsAuthDialogOpen(true);
              closeMobileMenu();
            }}
          >
            <User size={24} className="mb-1" />
            <span className="text-xs">{t.myAccount}</span>
          </button>
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
