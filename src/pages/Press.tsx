
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";

const Press = () => {
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  
  const translations = {
    en: {
      title: "Press & Media",
      subtitle: "Latest News and Announcements from MarketIX",
      pressReleases: "Press Releases",
      mediaKitTitle: "Media Kit",
      mediaKitDesc: "Access logos, brand guidelines, and other assets for media use.",
      contactTitle: "Press Contact",
      contactDesc: "For press inquiries, please contact:",
      contactEmail: "press@marketix.com",
      contactPhone: "+1 (555) 234-5678"
    },
    ar: {
      title: "الصحافة والإعلام",
      subtitle: "أحدث الأخبار والإعلانات من MarketIX",
      pressReleases: "البيانات الصحفية",
      mediaKitTitle: "المجموعة الإعلامية",
      mediaKitDesc: "الوصول إلى الشعارات، إرشادات العلامة التجارية، وغيرها من الأصول للاستخدام الإعلامي.",
      contactTitle: "الاتصال الصحفي",
      contactDesc: "للاستفسارات الصحفية، يرجى الاتصال بـ:",
      contactEmail: "press@marketix.com",
      contactPhone: "+1 (555) 234-5678"
    }
  };

  const pressReleases = [
    {
      id: 1,
      title: {
        en: "MarketIX Announces Partnership with Major League Sports",
        ar: "MarketIX تعلن عن شراكة مع دوري الرياضات الكبرى"
      },
      date: "April 15, 2025",
      category: { en: "Partnership", ar: "شراكة" },
      summary: {
        en: "MarketIX has signed a multi-year agreement to become the official ticketing partner for all Major League Sports events, offering fans exclusive ticket access and promotions.",
        ar: "وقعت MarketIX اتفاقية متعددة السنوات لتصبح شريك التذاكر الرسمي لجميع أحداث دوري الرياضات الكبرى، مما يوفر للمشجعين وصولًا حصريًا للتذاكر وعروضًا ترويجية."
      }
    },
    {
      id: 2,
      title: {
        en: "MarketIX Expands into European Market",
        ar: "MarketIX تتوسع في السوق الأوروبية"
      },
      date: "March 22, 2025",
      category: { en: "Expansion", ar: "توسع" },
      summary: {
        en: "Following its success in North America, MarketIX is excited to announce its expansion into the European market, starting with operations in the UK, France, and Germany.",
        ar: "بعد نجاحها في أمريكا الشمالية، تتشرف MarketIX بالإعلان عن توسعها في السوق الأوروبية، بدءًا من العمليات في المملكة المتحدة وفرنسا وألمانيا."
      }
    },
    {
      id: 3,
      title: {
        en: "MarketIX Introduces New Mobile App Features",
        ar: "MarketIX تقدم ميزات جديدة لتطبيق الهاتف المحمول"
      },
      date: "February 10, 2025",
      category: { en: "Product", ar: "منتج" },
      summary: {
        en: "MarketIX's latest mobile app update includes enhanced user experience, virtual ticket delivery, and personalized event recommendations.",
        ar: "يتضمن أحدث تحديث لتطبيق MarketIX للهاتف المحمول تجربة مستخدم محسنة، وتسليم التذاكر الافتراضي، وتوصيات الأحداث المخصصة."
      }
    }
  ];

  const t = translations[language];

  return (
    <div className="min-h-screen flex flex-col" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-700 to-ticket-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl max-w-2xl mx-auto">{t.subtitle}</p>
          </div>
        </section>

        {/* Press Releases Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">{t.pressReleases}</h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {pressReleases.map((release) => (
                <Card key={release.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2 flex-wrap">
                      <Badge className="mb-2">{release.category[language]}</Badge>
                      <span className="text-sm text-gray-500">{release.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-ticket-blue mb-2">
                      {release.title[language]}
                    </h3>
                    <p className="text-gray-600">
                      {release.summary[language]}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{t.mediaKitTitle}</h2>
              <p className="text-lg text-gray-600 mb-6">{t.mediaKitDesc}</p>
              
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <div className="aspect-square bg-gray-200 rounded flex items-center justify-center">
                      <div className="text-gray-500 text-sm">Logo</div>
                    </div>
                    <div className="aspect-square bg-gray-200 rounded flex items-center justify-center">
                      <div className="text-gray-500 text-sm">Logo Dark</div>
                    </div>
                    <div className="aspect-square bg-gray-200 rounded flex items-center justify-center">
                      <div className="text-gray-500 text-sm">Icon</div>
                    </div>
                    <div className="aspect-square bg-gray-200 rounded flex items-center justify-center">
                      <div className="text-gray-500 text-sm">Brand Colors</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.contactTitle}</h2>
              <p className="text-lg text-gray-600 mb-2">{t.contactDesc}</p>
              <p className="text-ticket-blue font-medium">{t.contactEmail}</p>
              <p className="text-gray-600">{t.contactPhone}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Press;
