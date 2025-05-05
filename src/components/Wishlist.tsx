
import React, { useState, useContext } from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Heart, X, Calendar, MapPin } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { LanguageContext } from "@/contexts/LanguageContext";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'ar';

  const translations = {
    en: {
      wishlist: "Wishlist",
      yourWishlist: "Your Wishlist",
      emptyWishlist: "Your wishlist is empty",
      viewDetails: "View Details",
      clearAll: "Clear All",
      browse: "Browse Events"
    },
    ar: {
      wishlist: "قائمة الأمنيات",
      yourWishlist: "قائمة الأمنيات الخاصة بك",
      emptyWishlist: "قائمة الأمنيات فارغة",
      viewDetails: "عرض التفاصيل",
      clearAll: "حذف الكل",
      browse: "تصفح الفعاليات"
    }
  };

  const t = translations[language];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <div className="relative">
          <Button variant="ghost" size="icon" data-wishlist-trigger="true">
            <Heart size={20} />
          </Button>
          {wishlistItems.length > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-ticket-blue text-white">
              {wishlistItems.length}
            </Badge>
          )}
        </div>
      </SheetTrigger>
      <SheetContent className={`w-full md:max-w-md ${isRTL ? 'rtl' : ''}`} side={isRTL ? "right" : "right"}>
        <SheetHeader>
          <div className="flex justify-between items-center">
            <SheetTitle className="text-xl font-bold">{t.yourWishlist}</SheetTitle>
            {wishlistItems.length > 0 && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={clearWishlist}
              >
                {t.clearAll}
              </Button>
            )}
          </div>
        </SheetHeader>
        
        <div className="mt-6 flex flex-col h-[calc(100vh-180px)]">
          {wishlistItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <Heart className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-gray-500">{t.emptyWishlist}</p>
              <SheetClose asChild>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  asChild
                >
                  <Link to="/">{t.browse}</Link>
                </Button>
              </SheetClose>
            </div>
          ) : (
            <div className="flex-grow overflow-auto space-y-4">
              {wishlistItems.map((item) => (
                <div key={item.id} className="flex border-b pb-4">
                  <div className="h-24 w-24 rounded overflow-hidden mr-3">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-1 text-xs">
                      {item.category}
                    </Badge>
                    <h3 className="font-medium">{item.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <Calendar size={14} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <MapPin size={14} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-ticket-blue font-medium">From ${item.price}</span>
                      <SheetClose asChild>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild 
                          className="text-xs"
                        >
                          <Link to={`/event/${item.id}`}>{t.viewDetails}</Link>
                        </Button>
                      </SheetClose>
                    </div>
                  </div>
                  <button 
                    className="text-gray-500 hover:text-red-500 ml-2 h-fit"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Wishlist;
