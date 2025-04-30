
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { LanguageContext } from "../contexts/LanguageContext";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { results = [], query = "" } = location.state || {};
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  
  const translations = {
    en: {
      searchResults: "Search Results",
      resultsFor: "Results for",
      noResults: "No results found for",
      goBack: "Back to Home"
    },
    ar: {
      searchResults: "نتائج البحث",
      resultsFor: "نتائج البحث عن",
      noResults: "لم يتم العثور على نتائج لـ",
      goBack: "العودة إلى الصفحة الرئيسية"
    }
  };
  
  const t = translations[language];
  
  return (
    <div className="min-h-screen flex flex-col" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate(-1)} 
            className="mr-4"
          >
            <ArrowLeft size={16} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
            {t.goBack}
          </Button>
          <h1 className="text-2xl font-bold">{t.searchResults}</h1>
        </div>
        
        <div className="mb-6">
          <h2 className="text-lg text-gray-600">
            {results.length > 0 
              ? `${t.resultsFor} "${query}" (${results.length})`
              : `${t.noResults} "${query}"`
            }
          </h2>
        </div>
        
        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                date={event.date}
                location={event.location}
                image={event.image}
                category={event.category}
                fromText={language === 'ar' ? "من" : "From"}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <img
              src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="No results"
              className="w-64 h-64 object-cover rounded-full mb-6 opacity-50"
            />
            <p className="text-gray-500 text-center max-w-md">
              {language === 'ar' 
                ? "لم نتمكن من العثور على أي نتائج تطابق بحثك. يرجى تجربة كلمات رئيسية مختلفة أو تصفح الفئات."
                : "We couldn't find any results matching your search. Try different keywords or browse categories."
              }
            </p>
            <Button 
              className="mt-6" 
              onClick={() => navigate("/")}
            >
              {language === 'ar' ? "العودة إلى الصفحة الرئيسية" : "Return to Home Page"}
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SearchResults;
