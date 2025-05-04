
import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import EventCard from './EventCard';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

// English event data
const upcomingEventsEn = [
  {
    id: "u1",
    title: "Coldplay - Music of the Spheres World Tour",
    date: "Aug 15, 2025",
    location: "Wembley Stadium, London",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts"
  },
  {
    id: "u2",
    title: "UEFA Champions League Final",
    date: "May 31, 2025",
    location: "Allianz Arena, Munich",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports"
  },
  {
    id: "u3",
    title: "Kevin Hart - Comedy Tour",
    date: "Sep 3, 2025",
    location: "Madison Square Garden, New York",
    image: "/lovable-uploads/ce21b6df-d3ae-4cba-9271-fc0c96450673.png",
    category: "Comedy"
  },
  {
    id: "u4",
    title: "Cirque du Soleil - Alegría",
    date: "Jul 25-30, 2025",
    location: "Royal Albert Hall, London",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater"
  },
  {
    id: "u5",
    title: "Imagine Dragons World Tour",
    date: "Oct 5, 2025",
    location: "T-Mobile Arena, Las Vegas",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts"
  },
  {
    id: "u6",
    title: "Wimbledon Tennis Championships",
    date: "Jun 28 - Jul 11, 2025",
    location: "All England Club, London",
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports"
  },
  {
    id: "u7",
    title: "The Lion King - Broadway",
    date: "Sep 10-20, 2025",
    location: "Minskoff Theatre, New York",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater"
  },
  {
    id: "u8",
    title: "Comic-Con International",
    date: "Jul 24-27, 2025",
    location: "San Diego Convention Center",
    image: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Festivals"
  }
];

// Arabic translations for events
const upcomingEventsAr = [
  {
    id: "u1",
    title: "كولدبلاي - جولة كرة الموسيقى العالمية",
    date: "15 أغسطس, 2025",
    location: "ملعب ويمبلي، لندن",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "حفلات"
  },
  {
    id: "u2",
    title: "نهائي دوري أبطال أوروبا",
    date: "31 مايو, 2025",
    location: "أليانز أرينا، ميونخ",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "رياضة"
  },
  {
    id: "u3",
    title: "كيفن هارت - جولة كوميدية",
    date: "3 سبتمبر, 2025",
    location: "ماديسون سكوير غاردن، نيويورك",
    image: "/lovable-uploads/ce21b6df-d3ae-4cba-9271-fc0c96450673.png",
    category: "كوميديا"
  },
  {
    id: "u4",
    title: "سيرك دو سوليه - أليغريا",
    date: "25-30 يوليو, 2025",
    location: "رويال ألبرت هول، لندن",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "مسرح"
  },
  {
    id: "u5",
    title: "إيماجين دراغونز جولة عالمية",
    date: "5 أكتوبر, 2025",
    location: "تي-موبايل أرينا، لاس فيغاس",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "حفلات"
  },
  {
    id: "u6",
    title: "بطولات ويمبلدون للتنس",
    date: "28 يونيو - 11 يوليو, 2025",
    location: "أول إنجلاند كلوب، لندن",
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "رياضة"
  },
  {
    id: "u7",
    title: "الملك الأسد - مسرحية برودواي",
    date: "10-20 سبتمبر, 2025",
    location: "مسرح مينسكوف، نيويورك",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "مسرح"
  },
  {
    id: "u8",
    title: "كوميك كون الدولية",
    date: "24-27 يوليو, 2025",
    location: "مركز سان دييغو للمؤتمرات",
    image: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "مهرجانات"
  }
];

const UpcomingEvents = () => {
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  
  // Select event data based on language
  const events = language === 'ar' ? upcomingEventsAr : upcomingEventsEn;
  
  const translations = {
    en: {
      upcomingEvents: "Upcoming Events",
      viewAll: "View all"
    },
    ar: {
      upcomingEvents: "الفعاليات القادمة",
      viewAll: "عرض الكل"
    }
  };
  
  const t = translations[language];
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">{t.upcomingEvents}</h2>
          <Button variant="link" className="text-ticket-blue flex items-center" asChild>
            <Link to="/concerts">
              {t.viewAll} {!isRTL && <ArrowRight size={16} className="ml-1" />}
              {isRTL && <ArrowRight size={16} className="mr-1 rotate-180" />}
            </Link>
          </Button>
        </div>
        <div className="overflow-x-auto pb-4">
          <div className={`grid grid-flow-col auto-cols-max gap-6 ${isRTL ? 'rtl' : 'ltr'}`} style={{ minWidth: "100%", paddingLeft: "1px" }}>
            {events.map((event) => (
              <div style={{ width: "280px" }} key={event.id}>
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
