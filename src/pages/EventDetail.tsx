
import React, { useState, useContext, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ArrowLeft, Share2, Heart, Ticket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { LanguageContext } from "../contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

const allEvents = [
  // Concerts
  {
    id: "c1",
    title: "Taylor Swift - The Eras Tour",
    description: "Experience Taylor Swift's record-breaking Eras Tour featuring music from throughout her career, stunning visuals, and unforgettable performances. This highly anticipated show celebrates the different musical eras of Taylor's career with an elaborate production featuring dazzling costumes, state-of-the-art staging, and all her greatest hits. Don't miss this once-in-a-lifetime opportunity to see one of the most influential artists of our generation live in concert.",
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
    description: "Watch two Premier League giants face off in this highly anticipated match that's sure to deliver excitement and world-class football. This historic rivalry will feature some of the sport's biggest stars competing at the highest level. The electric atmosphere at Emirates Stadium for this matchup is legendary, with fans creating an unforgettable environment. Be part of one of football's greatest rivalries and witness the skill, passion and drama of Premier League football at its absolute best.",
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
    description: "The revolutionary musical that has taken the world by storm, telling the story of American founding father Alexander Hamilton with a blend of hip-hop, jazz, R&B, and Broadway style. Lin-Manuel Miranda's groundbreaking musical has transformed theater as we know it, earning record-setting Tony Awards, a Pulitzer Prize, and global acclaim. With its innovative blend of musical styles and diverse casting, this production brings American history to vivid life through its unforgettable score and powerful storytelling. Experience the phenomenon that continues to captivate audiences worldwide.",
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
    id: "c2",
    title: "Kevin Hart - Comedy Tour",
    description: "Join Kevin Hart for a night of laughter as he brings his signature comedy style to the stage with all-new material and hilarious insights. One of the world's most successful comedians returns with his newest tour, delivering his trademark high-energy performance and relatable observational humor. Hart's infectious energy and masterful storytelling create an evening of non-stop entertainment that will have you laughing from start to finish. Experience firsthand why Kevin Hart has become a global comedy phenomenon in this exclusive live show.",
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
  // Add Dave Chappelle event
  {
    id: "comedy-dave",
    title: "Dave Chappelle Live",
    description: "Legendary comedian Dave Chappelle returns to the stage with his unfiltered and thought-provoking comedy. Known for his sharp wit and societal observations, Chappelle continues to push boundaries and challenge audiences with his unique perspective. His masterful storytelling and incisive commentary have earned him critical acclaim and a devoted following worldwide. This exclusive performance showcases why Dave Chappelle remains one of the most important and influential voices in comedy today.",
    date: "Oct 15, 2025",
    time: "8:00 PM",
    location: "The O2, London",
    image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Comedy",
    minPrice: 95,
    maxPrice: 250,
    ticketLevels: [
      { name: "VIP Experience", price: 250, available: 85 },
      { name: "Premium Seating", price: 175, available: 245 },
      { name: "Standard Admission", price: 95, available: 780 }
    ]
  },
  // Add remaining comedy events
  {
    id: "comedy-trevor",
    title: "Trevor Noah World Tour",
    description: "Former Daily Show host Trevor Noah brings his globally successful tour to audiences with fresh, hilarious material that showcases his unique worldview and storytelling abilities. Combining his signature charm, intelligence, and cross-cultural observations, Noah offers insightful commentary on current events and personal experiences that resonates with diverse audiences. His ability to find humor in complex social issues while maintaining thoughtful perspective has established him as one of comedy's most respected voices.",
    date: "Nov 8, 2025",
    time: "7:30 PM",
    location: "Sydney Opera House, Australia",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Comedy",
    minPrice: 75,
    maxPrice: 180,
    ticketLevels: [
      { name: "VIP Package", price: 180, available: 100 },
      { name: "Premium Seats", price: 130, available: 250 },
      { name: "Standard Admission", price: 75, available: 650 }
    ]
  },
  {
    id: "comedy-mulaney",
    title: "John Mulaney - From Scratch",
    description: "Emmy Award-winning writer and comedian John Mulaney delivers his newest stand-up show with the precision and polish that have made him one of comedy's most celebrated performers. Combining impeccable timing, brilliant storytelling, and his distinctively stylized delivery, Mulaney presents an all-new collection of observations and personal stories. His meticulously crafted material and charming stage presence create an evening of sophisticated comedy that showcases his evolution as both a writer and performer.",
    date: "Dec 1, 2025",
    time: "8:00 PM",
    location: "Radio City Music Hall, New York",
    image: "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Comedy",
    minPrice: 80,
    maxPrice: 195,
    ticketLevels: [
      { name: "VIP Experience", price: 195, available: 120 },
      { name: "Premium Orchestra", price: 125, available: 340 },
      { name: "Standard Admission", price: 80, available: 780 }
    ]
  },
  {
    id: "comedy-gervais",
    title: "Ricky Gervais: SuperNature",
    description: "Ricky Gervais returns with his characteristically provocative and uncompromising stand-up show that tackles taboo subjects with his trademark irreverent humor. Never one to shy away from controversial topics, Gervais delivers razor-sharp observations on modern society with his distinctively acerbic wit. This unapologetically honest performance tackles everything from human nature to celebrity culture and political correctness, showcasing Gervais's skill at crafting comedy that pushes boundaries while revealing deeper truths about contemporary life.",
    date: "Jan 20, 2026",
    time: "7:30 PM",
    location: "Royal Albert Hall, London",
    image: "https://images.unsplash.com/photo-1523251343397-9225e4cb6319?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Comedy",
    minPrice: 90,
    maxPrice: 220,
    ticketLevels: [
      { name: "VIP Meet & Greet", price: 220, available: 85 },
      { name: "Premium Circle", price: 155, available: 270 },
      { name: "Standard Admission", price: 90, available: 730 }
    ]
  },
  {
    id: "comedy-schumer",
    title: "Amy Schumer Live",
    description: "Award-winning comedian, actress, and writer Amy Schumer brings her bold and unapologetic comedic style to the stage in this highly anticipated live show. Known for her candid approach to topics ranging from sex and relationships to body image and motherhood, Schumer delivers brutally honest and hilariously relatable material drawn from her own life experiences. Her fearless comedy and feminist perspective have established her as one of the most influential voices in contemporary comedy, earning her a devoted following across multiple entertainment platforms.",
    date: "Feb 14, 2026",
    time: "8:00 PM",
    location: "Hollywood Bowl, Los Angeles",
    image: "https://images.unsplash.com/photo-1508252592163-5d3c3c559269?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Comedy",
    minPrice: 70,
    maxPrice: 175,
    ticketLevels: [
      { name: "VIP Package", price: 175, available: 110 },
      { name: "Premium Seats", price: 125, available: 320 },
      { name: "Standard Admission", price: 70, available: 900 }
    ]
  },
  // Festivals
  {
    id: "f1",
    title: "Glastonbury Festival 2025",
    description: "The legendary music and performing arts festival returns with a stellar lineup of artists across multiple stages, offering an unforgettable experience for music lovers. For five days, Worthy Farm transforms into a magical city of music, art, and culture featuring hundreds of performances across dozens of stages. From headline acts on the Pyramid Stage to emerging artists and immersive experiences throughout the vast festival grounds, Glastonbury offers something for everyone. Join over 200,000 festival-goers for this iconic British institution that continues to define festival culture worldwide.",
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
    id: "f2",
    title: "Disney on Ice",
    description: "A magical experience for the whole family featuring beloved Disney characters performing amazing ice skating routines to your favorite Disney songs. Watch in wonder as your favorite Disney stories come to life through world-class ice skating, elaborate costumes, and stunning special effects. Characters from Frozen, Moana, The Lion King, and more will dazzle audiences with spectacular choreography and heartwarming performances. This enchanting production creates lasting memories for Disney fans of all ages, combining the athleticism of professional skating with the magic of classic Disney storytelling.",
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
    description: "Experience the best local cuisine and beverages, with food trucks, chef demonstrations, tastings, and live music in a festive atmosphere. This celebration of culinary culture brings together the region's top restaurants, food artisans, breweries, and wineries for an immersive gastronomic experience. Enjoy cooking demonstrations from renowned chefs, participate in interactive workshops, and savor unlimited samples from over 50 different vendors. With live music performances throughout the day and activities for all ages, this food festival offers a delicious day out for foodies and families alike.",
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
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isRTL = language === 'ar';
  const [quantity, setQuantity] = useState(1);
  const [selectedTicketType, setSelectedTicketType] = useState(0);

  // Find the event by ID
  const event = allEvents.find(e => e.id === eventId);
  
  // If event doesn't exist, redirect to 404
  useEffect(() => {
    if (!event && eventId) {
      navigate('/not-found');
    }
  }, [event, eventId, navigate]);
  
  // Return early if no event found
  if (!event) {
    return null;
  }
  
  const eventInWishlist = isInWishlist(event.id);
  
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
      removeFromWishlist: "Remove from Wishlist",
      selectTickets: "Select Tickets",
      quantity: "Quantity",
      totalPrice: "Total Price",
      proceedToCheckout: "Add to Cart",
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
      removeFromWishlist: "إزالة من المفضلة",
      selectTickets: "اختر التذاكر",
      quantity: "الكمية",
      totalPrice: "السعر الإجمالي",
      proceedToCheckout: "أضف إلى العربة",
      categoryLabel: "نوع الحدث",
      ticketsAdded: "تمت إضافة التذاكر إلى سلة التسوق!",
      ticketsAddedDesc: "يمكنك المتابعة إلى الدفع الآن.",
    }
  };
  
  const t = translations[language];
  
  const handleBooking = () => {
    addToCart({
      id: event.id,
      title: event.title,
      quantity: quantity,
      price: event.ticketLevels[selectedTicketType].price,
      ticketType: event.ticketLevels[selectedTicketType].name,
      image: event.image,
      date: event.date
    });
    
    toast({
      title: t.ticketsAdded,
      description: t.ticketsAddedDesc,
    });
  };
  
  const calculateTotal = () => {
    return (event.ticketLevels[selectedTicketType].price * quantity).toFixed(2);
  };

  const toggleWishlist = () => {
    if (eventInWishlist) {
      removeFromWishlist(event.id);
    } else {
      addToWishlist({
        id: event.id,
        title: event.title,
        image: event.image,
        date: event.date,
        location: event.location,
        category: event.category,
        price: event.minPrice
      });
    }
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
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={toggleWishlist}
                  className={eventInWishlist ? "bg-rose-50 text-rose-500 border-rose-200" : ""}
                >
                  <Heart 
                    size={16} 
                    className={`${isRTL ? 'ml-1' : 'mr-1'} ${eventInWishlist ? "fill-rose-500" : ""}`} 
                  />
                  {eventInWishlist ? t.removeFromWishlist : t.addToWishlist}
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
