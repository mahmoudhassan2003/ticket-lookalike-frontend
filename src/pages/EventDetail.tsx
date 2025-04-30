
import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ArrowLeft, Share2, Heart, CreditCard, Ticket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { LanguageContext } from "../contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const allEvents = [
  // Concerts
  {
    id: "c1",
    title: "Taylor Swift - The Eras Tour",
    description: "Experience Taylor Swift's record-breaking Eras Tour featuring music from throughout her career, stunning visuals, and unforgettable performances.",
    date: "Jul 15, 2025",
    time: "7:00 PM",
    location: "Wembley Stadium, London",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts",
    minPrice: 95,
    maxPrice: 350,
    ticketLevels: [
      { name: "VIP Package", price: 350, available: 123 },
      { name: "Premium Seats", price: 195, available: 568 },
      { name: "Standard Admission", price: 95, available: 1243 }
    ]
  },
  // Sports
  {
    id: "s1",
    title: "Premier League: Arsenal vs. Manchester United",
    description: "Watch two Premier League giants face off in this highly anticipated match that's sure to deliver excitement and world-class football.",
    date: "Aug 12, 2025",
    time: "3:00 PM",
    location: "Emirates Stadium, London",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports",
    minPrice: 75,
    maxPrice: 250,
    ticketLevels: [
      { name: "Premium Box", price: 250, available: 95 },
      { name: "Club Level", price: 150, available: 320 },
      { name: "General Admission", price: 75, available: 876 }
    ]
  },
  // Theater
  {
    id: "t1",
    title: "Hamilton",
    description: "The revolutionary musical that has taken the world by storm, telling the story of American founding father Alexander Hamilton with a blend of hip-hop, jazz, R&B, and Broadway style.",
    date: "Jun 15-30, 2025",
    time: "7:30 PM",
    location: "Victoria Palace Theatre, London",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater",
    minPrice: 55,
    maxPrice: 195,
    ticketLevels: [
      { name: "Premium Orchestra", price: 195, available: 110 },
      { name: "Orchestra", price: 125, available: 320 },
      { name: "Mezzanine", price: 55, available: 520 }
    ]
  },
  // Comedy
  {
    id: "c1",
    title: "Kevin Hart - Comedy Tour",
    description: "Join Kevin Hart for a night of laughter as he brings his signature comedy style to the stage with all-new material and hilarious insights.",
    date: "Sep 3, 2025",
    time: "8:00 PM",
    location: "Madison Square Garden, New York",
    image: "/lovable-uploads/ce21b6df-d3ae-4cba-9271-fc0c96450673.png",
    category: "Comedy",
    minPrice: 85,
    maxPrice: 200,
    ticketLevels: [
      { name: "VIP Meet & Greet", price: 200, available: 75 },
      { name: "Premium Seats", price: 150, available: 245 },
      { name: "Standard Admission", price: 85, available: 890 }
    ]
  },
  // Festivals
  {
    id: "f1",
    title: "Glastonbury Festival 2025",
    description: "The legendary music and performing arts festival returns with a stellar lineup of artists across multiple stages, offering an unforgettable experience for music lovers.",
    date: "Jun 25-29, 2025",
    time: "All Day",
    location: "Worthy Farm, Somerset, UK",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Festivals",
    minPrice: 120,
    maxPrice: 350,
    ticketLevels: [
      { name: "VIP Weekend Pass", price: 350, available: 250 },
      { name: "Weekend Pass + Camping", price: 220, available: 5000 },
      { name: "Weekend Pass", price: 120, available: 8000 }
    ]
  },
  // Family
  {
    id: "f1",
    title: "Disney on Ice",
    description: "A magical experience for the whole family featuring beloved Disney characters performing amazing ice skating routines to your favorite Disney songs.",
    date: "Dec 10-15, 2025",
    time: "Various Times",
    location: "Barclays Center, New York",
    image: "https://images.unsplash.com/photo-1580974852861-c381510bc98a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Family",
    minPrice: 45,
    maxPrice: 125,
    ticketLevels: [
      { name: "VIP Rinkside", price: 125, available: 150 },
      { name: "Lower Bowl", price: 85, available: 620 },
      { name: "Upper Bowl", price: 45, available: 1300 }
    ]
  },
  // Near Me
  {
    id: "n1",
    title: "Local Food Festival",
    description: "Experience the best local cuisine and beverages, with food trucks, chef demonstrations, tastings, and live music in a festive atmosphere.",
    date: "Jun 5, 2025",
    time: "11:00 AM - 8:00 PM",
    location: "Central Park, New York",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Local",
    minPrice: 15,
    maxPrice: 45,
    ticketLevels: [
      { name: "VIP Experience", price: 45, available: 100 },
      { name: "Early Access Pass", price: 25, available: 300 },
      { name: "General Admission", price: 15, available: 1000 }
    ]
  }
];

const EventDetail = () => {
  const { eventId } = useParams();
  const { toast } = useToast();
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  const [quantity, setQuantity] = useState(1);
  const [selectedTicketType, setSelectedTicketType] = useState(0);

  // Find the event by ID
  const event = allEvents.find(e => e.id === eventId) || allEvents[0];
  
  const translations = {
    en: {
      bookTickets: "Book Tickets",
      ticketsAvailable: "Tickets Available",
      date: "Date",
      time: "Time",
      venue: "Venue",
      backToEvents: "Back to Events",
      shareEvent: "Share Event",
      addToWishlist: "Add to Wishlist",
      selectTickets: "Select Tickets",
      quantity: "Quantity",
      totalPrice: "Total Price",
      proceedToCheckout: "Proceed to Checkout",
      categoryLabel: "Event Type",
      ticketsAdded: "Tickets added to cart!",
      ticketsAddedDesc: "You can proceed to checkout now.",
    },
    ar: {
      bookTickets: "حجز التذاكر",
      ticketsAvailable: "التذاكر المتاحة",
      date: "التاريخ",
      time: "الوقت",
      venue: "المكان",
      backToEvents: "العودة إلى الفعاليات",
      shareEvent: "مشاركة الحدث",
      addToWishlist: "أضف إلى المفضلة",
      selectTickets: "اختر التذاكر",
      quantity: "الكمية",
      totalPrice: "السعر الإجمالي",
      proceedToCheckout: "الانتقال إلى الدفع",
      categoryLabel: "نوع الحدث",
      ticketsAdded: "تمت إضافة التذاكر إلى سلة التسوق!",
      ticketsAddedDesc: "يمكنك المتابعة إلى الدفع الآن.",
    }
  };
  
  const t = translations[language];
  
  const handleBooking = () => {
    toast({
      title: t.ticketsAdded,
      description: t.ticketsAddedDesc,
      duration: 5000,
    });
  };
  
  const calculateTotal = () => {
    return (event.ticketLevels[selectedTicketType].price * quantity).toFixed(2);
  };
  
  return (
    <div className="min-h-screen flex flex-col" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
            <div className="container mx-auto px-4 pb-8">
              <Badge className="mb-2 bg-ticket-blue text-white">{event.category}</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{event.title}</h1>
              <div className="flex flex-wrap gap-4 text-white">
                <div className="flex items-center">
                  <Calendar size={18} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={18} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={18} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Event Details */}
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-2 mb-4">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/" className="flex items-center">
                    <ArrowLeft size={16} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                    {t.backToEvents}
                  </Link>
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 size={16} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                  {t.shareEvent}
                </Button>
                <Button variant="outline" size="sm">
                  <Heart size={16} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                  {t.addToWishlist}
                </Button>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">{language === 'ar' ? 'وصف الحدث' : 'Event Description'}</h2>
              <p className="text-gray-700 mb-6">{event.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">{t.date}</h3>
                  <p className="font-medium">{event.date}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">{t.time}</h3>
                  <p className="font-medium">{event.time}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">{t.venue}</h3>
                  <p className="font-medium">{event.location}</p>
                </div>
              </div>
            </div>
            
            {/* Booking Section */}
            <div className="w-full md:w-1/3">
              <div className="border rounded-lg p-6 sticky top-4">
                <h2 className="text-xl font-bold mb-4">{t.bookTickets}</h2>
                
                <div className="mb-4">
                  <Label htmlFor="ticketType">{t.selectTickets}</Label>
                  <div className="mt-2 space-y-2">
                    {event.ticketLevels.map((ticket, index) => (
                      <div 
                        key={index} 
                        className={`border rounded-md p-3 cursor-pointer transition-colors ${selectedTicketType === index ? 'border-ticket-blue bg-blue-50' : ''}`}
                        onClick={() => setSelectedTicketType(index)}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">{ticket.name}</span>
                          <span className="text-ticket-blue font-bold">${ticket.price}</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {ticket.available} {t.ticketsAvailable}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="quantity">{t.quantity}</Label>
                  <div className="flex items-center mt-1">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </Button>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      max="10"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      className="w-16 mx-2 text-center"
                    />
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={quantity >= 10}
                    >
                      +
                    </Button>
                  </div>
                </div>
                
                <div className="border-t pt-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span>{t.totalPrice}:</span>
                    <span className="font-bold">${calculateTotal()}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-ticket-blue hover:bg-blue-700" 
                  size="lg"
                  onClick={handleBooking}
                >
                  <Ticket size={18} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t.proceedToCheckout}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetail;
