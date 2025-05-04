
import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import EventCard from './EventCard';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

// English event data with updated IDs that match EventDetail.tsx
const upcomingEventsEn = [
  {
    id: "c1",  // Changed from u1 to c1 to match EventDetail.tsx
    title: "Taylor Swift - The Eras Tour",
    date: "Jul 15, 2025",
    location: "Wembley Stadium, London",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts"
  },
  {
    id: "s1",  // Changed from u2 to s1 to match EventDetail.tsx
    title: "NBA Finals 2025 - Home Game 1",
    date: "May 29, 2025",
    location: "TD Garden, Boston",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports"
  },
  {
    id: "c2", // Changed from u3 to c2 to match EventDetail.tsx
    title: "Kevin Hart - Comedy Tour",
    date: "Sep 3, 2025",
    location: "Madison Square Garden, New York",
    image: "/lovable-uploads/ce21b6df-d3ae-4cba-9271-fc0c96450673.png",
    category: "Comedy"
  },
  {
    id: "t1", // Changed from u4 to t1 to match EventDetail.tsx
    title: "Hamilton - The Musical",
    date: "Jul 5-10, 2025",
    location: "Richard Rodgers Theatre, New York",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater"
  },
  {
    id: "c1", // Changed from u5 to c1 (duplicate to use existing event)
    title: "Taylor Swift - The Eras Tour",
    date: "Jun 12, 2025",
    location: "SoFi Stadium, Los Angeles",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts"
  },
  {
    id: "s1", // Changed from u6 to s1 (duplicate to use existing event)
    title: "NBA Finals 2025 - Home Game 1",
    date: "May 29, 2025",
    location: "TD Garden, Boston",
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports"
  },
  {
    id: "t1", // Changed from u7 to t1 (duplicate to use existing event)
    title: "Hamilton - The Musical",
    date: "Jul 5, 2025",
    location: "Richard Rodgers Theatre, New York",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater"
  },
  {
    id: "f1", // Changed from u8 to f1 to match EventDetail.tsx
    title: "Coachella Valley Music and Arts Festival",
    date: "Apr 10-19, 2025",
    location: "Empire Polo Club, Indio",
    image: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Festivals"
  }
];

// Arabic translations for events - with updated IDs to match
const upcomingEventsAr = [
  {
    id: "c1", // Changed ID to match EventDetail.tsx
    title: "كولدبلاي - جولة كرة الموسيقى العالمية",
    date: "15 أغسطس, 2025",
    location: "ملعب ويمبلي، لندن",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "حفلات"
  },
  {
    id: "s1", // Changed ID to match EventDetail.tsx
    title: "نهائي دوري أبطال أوروبا",
    date: "31 مايو, 2025",
    location: "أليانز أرينا، ميونخ",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "رياضة"
  },
  {
    id: "c2", // Changed ID to match EventDetail.tsx
    title: "كيفن هارت - جولة كوميدية",
    date: "3 سبتمبر, 2025",
    location: "ماديسون سكوير غاردن، نيويورك",
    image: "/lovable-uploads/ce21b6df-d3ae-4cba-9271-fc0c96450673.png",
    category: "كوميديا"
  },
  {
    id: "t1", // Changed ID to match EventDetail.tsx
    title: "سيرك دو سوليه - أليغريا",
    date: "25-30 يوليو, 2025",
    location: "رويال ألبرت هول، لندن",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "مسرح"
  },
  {
    id: "c1", // Changed ID to match EventDetail.tsx
    title: "إيماجين دراغونز جولة عالمية",
    date: "5 أكتوبر, 2025",
    location: "تي-موبايل أرينا، لاس فيغاس",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "حفلات"
  },
  {
    id: "s1", // Changed ID to match EventDetail.tsx
    title: "بطولات ويمبلدون للتنس",
    date: "28 يونيو - 11 يوليو, 2025",
    location: "أول إنجلاند كلوب، لندن",
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "رياضة"
  },
  {
    id: "t1", // Changed ID to match EventDetail.tsx
    title: "الملك الأسد - مسرحية برودواي",
    date: "10-20 سبتمبر, 2025",
    location: "مسرح مينسكوف، نيويورك",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "مسرح"
  },
  {
    id: "f1", // Changed ID to match EventDetail.tsx
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
