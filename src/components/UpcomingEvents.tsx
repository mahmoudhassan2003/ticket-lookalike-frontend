
import React, { useContext } from 'react';
import EventCard from './EventCard';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { LanguageContext } from "../contexts/LanguageContext";
import { Link } from 'react-router-dom';

// Event data with high-quality images
const upcomingEvents = [
  {
    id: "u1",
    title: "Coldplay - Music of the Spheres World Tour",
    date: "Aug 15, 2025",
    location: "Wembley Stadium, London",
    image: "https://images.unsplash.com/photo-1470020618177-f49a96241ae7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts"
  },
  {
    id: "u2",
    title: "UEFA Champions League Final",
    date: "May 31, 2025",
    location: "Allianz Arena, Munich",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports"
  },
  {
    id: "u3",
    title: "Kevin Hart - Comedy Tour",
    date: "Sep 3, 2025",
    location: "Madison Square Garden, New York",
    image: "https://images.unsplash.com/photo-1606982763583-11636a6c8382?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Comedy"
  },
  {
    id: "u4",
    title: "Cirque du Soleil - Alegría",
    date: "Jul 25-30, 2025",
    location: "Royal Albert Hall, London",
    image: "https://images.unsplash.com/photo-1551142915-8d5bca85a0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater"
  },
  {
    id: "u5",
    title: "Imagine Dragons World Tour",
    date: "Oct 5, 2025",
    location: "T-Mobile Arena, Las Vegas",
    image: "https://images.unsplash.com/photo-1564585222527-c2777a5bc6cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts"
  },
  {
    id: "u6",
    title: "Wimbledon Tennis Championships",
    date: "Jun 28 - Jul 11, 2025",
    location: "All England Club, London",
    image: "https://images.unsplash.com/photo-1565051756237-e85fb8cac7ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports"
  },
  {
    id: "u7",
    title: "The Lion King - Broadway Musical",
    date: "Sep 10-20, 2025",
    location: "Minskoff Theatre, New York",
    image: "https://images.unsplash.com/photo-1583004231608-3109948a3fd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater"
  },
  {
    id: "u8",
    title: "Comic Con International",
    date: "Jul 24-27, 2025",
    location: "San Diego Convention Center",
    image: "https://images.unsplash.com/photo-1612036782180-6f0822045d55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Festivals"
  }
];

// Arabic translations for events
const upcomingEventsAr = [
  {
    id: "5",
    title: "كولدبلاي - جولة كرة الموسيقى العالمية",
    date: "15 أغسطس, 2025",
    location: "ملعب ويمبلي، لندن",
    image: "https://images.unsplash.com/photo-1470020618177-f49a96241ae7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "حفلات"
  },
  {
    id: "6",
    title: "نهائي دوري أبطال أوروبا",
    date: "31 مايو, 2025",
    location: "أليانز أرينا، ميونخ",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "رياضة"
  },
  {
    id: "7",
    title: "كيفن هارت - جولة كوميدية",
    date: "3 سبتمبر, 2025",
    location: "ماديسون سكوير غاردن، نيويورك",
    image: "https://images.unsplash.com/photo-1606982763583-11636a6c8382?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "كوميديا"
  },
  {
    id: "8",
    title: "سيرك دو سوليه - أليغريا",
    date: "25-30 يوليو, 2025",
    location: "رويال ألبرت هول، لندن",
    image: "https://images.unsplash.com/photo-1551142915-8d5bca85a0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "مسرح"
  },
  {
    id: "9",
    title: "إيماجين دراغونز جولة عالمية",
    date: "5 أكتوبر, 2025",
    location: "تي-موبايل أرينا، لاس فيغاس",
    image: "https://images.unsplash.com/photo-1564585222527-c2777a5bc6cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "حفلات"
  },
  {
    id: "10",
    title: "بطولات ويمبلدون للتنس",
    date: "28 يونيو - 11 يوليو, 2025",
    location: "أول إنجلاند كلوب، لندن",
    image: "https://images.unsplash.com/photo-1565051756237-e85fb8cac7ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "رياضة"
  },
  {
    id: "11",
    title: "الملك الأسد - مسرحية برودواي",
    date: "10-20 سبتمبر, 2025",
    location: "مسرح مينسكوف، نيويورك",
    image: "https://images.unsplash.com/photo-1583004231608-3109948a3fd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "مسرح"
  },
  {
    id: "12",
    title: "كوميك كون الدولية",
    date: "24-27 يوليو, 2025",
    location: "مركز سان دييغو للمؤتمرات",
    image: "https://images.unsplash.com/photo-1612036782180-6f0822045d55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "مهرجانات"
  }
];

const UpcomingEvents = () => {
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  const events = language === 'ar' ? upcomingEventsAr : upcomingEvents;
  
  const translations = {
    en: {
      upcomingEvents: "Upcoming Events",
      viewAll: "View all",
      from: "From",
    },
    ar: {
      upcomingEvents: "الفعاليات القادمة",
      viewAll: "عرض الكل",
      from: "من",
    }
  };
  
  const t = translations[language];
  
  return (
    <section className="py-12 bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">{t.upcomingEvents}</h2>
          <Button variant="link" className="text-ticket-blue flex items-center" asChild>
            <Link to="/">
              {t.viewAll} {!isRTL && <ArrowRight size={16} className="ml-1" />}
              {isRTL && <ArrowRight size={16} className="mr-1 rotate-180" />}
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <EventCard 
              key={event.id} 
              {...event} 
              fromText={t.from}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
