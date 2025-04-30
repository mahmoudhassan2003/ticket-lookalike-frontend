
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";
import { Truck, Calendar, Clock, AlertCircle } from "lucide-react";

const Shipping = () => {
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  
  const translations = {
    en: {
      title: "Shipping & Delivery",
      subtitle: "Information about our shipping and delivery policies",
      digitalTickets: "Digital Tickets",
      digitalTicketsDesc: "Most tickets purchased on MarketIX are delivered as digital tickets. These are available immediately after purchase and can be accessed in your account or via the confirmation email.",
      physicalTickets: "Physical Tickets",
      physicalTicketsDesc: "For certain events, physical tickets may be issued. These will be shipped via tracked courier service.",
      deliveryTimes: "Delivery Times",
      deliveryTimesDesc: "Delivery times for physical tickets may vary depending on your location:",
      domesticShipping: "Domestic Shipping",
      domesticShippingDesc: "Standard: 3-5 business days\nExpress: 1-2 business days",
      internationalShipping: "International Shipping",
      internationalShippingDesc: "Standard: 7-14 business days\nExpress: 3-5 business days",
      trackingInfo: "Tracking Information",
      trackingInfoDesc: "Once your tickets are shipped, you'll receive a confirmation email with tracking information.",
      questions: "Questions?",
      questionsDesc: "If you have any questions about your order, please contact our customer support team.",
      contactSupport: "Contact Support"
    },
    ar: {
      title: "الشحن والتوصيل",
      subtitle: "معلومات حول سياسات الشحن والتوصيل لدينا",
      digitalTickets: "التذاكر الرقمية",
      digitalTicketsDesc: "معظم التذاكر التي يتم شراؤها على MarketIX يتم تسليمها كتذاكر رقمية. وهي متاحة فورا بعد الشراء ويمكن الوصول إليها في حسابك أو عبر بريد التأكيد الإلكتروني.",
      physicalTickets: "التذاكر المادية",
      physicalTicketsDesc: "بالنسبة لبعض الأحداث، قد يتم إصدار تذاكر مادية. سيتم شحن هذه عبر خدمة البريد السريع المتتبعة.",
      deliveryTimes: "أوقات التسليم",
      deliveryTimesDesc: "قد تختلف أوقات التسليم للتذاكر المادية حسب موقعك:",
      domesticShipping: "الشحن المحلي",
      domesticShippingDesc: "العادي: 3-5 أيام عمل\nالسريع: 1-2 أيام عمل",
      internationalShipping: "الشحن الدولي",
      internationalShippingDesc: "العادي: 7-14 يوم عمل\nالسريع: 3-5 أيام عمل",
      trackingInfo: "معلومات التتبع",
      trackingInfoDesc: "بمجرد شحن تذاكرك، ستتلقى رسالة بريد إلكتروني للتأكيد تحتوي على معلومات التتبع.",
      questions: "أسئلة؟",
      questionsDesc: "إذا كان لديك أي أسئلة حول طلبك، يرجى الاتصال بفريق دعم العملاء لدينا.",
      contactSupport: "اتصل بالدعم"
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen flex flex-col" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-2">{t.title}</h1>
            <p className="text-gray-600 text-center mb-12">{t.subtitle}</p>
            
            <div className="space-y-12">
              {/* Digital Tickets */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-ticket-blue">
                    <Calendar size={28} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">{t.digitalTickets}</h2>
                  <p className="text-gray-600">{t.digitalTicketsDesc}</p>
                </div>
              </div>
              
              {/* Physical Tickets */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-ticket-blue">
                    <Truck size={28} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">{t.physicalTickets}</h2>
                  <p className="text-gray-600">{t.physicalTicketsDesc}</p>
                </div>
              </div>
              
              {/* Delivery Times */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-ticket-blue">
                    <Clock size={28} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">{t.deliveryTimes}</h2>
                  <p className="text-gray-600">{t.deliveryTimesDesc}</p>
                  
                  <div className="mt-6 space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">{t.domesticShipping}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{t.domesticShippingDesc}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">{t.internationalShipping}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{t.internationalShippingDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tracking Information */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-ticket-blue">
                    <AlertCircle size={28} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">{t.trackingInfo}</h2>
                  <p className="text-gray-600">{t.trackingInfoDesc}</p>
                  
                  <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-medium mb-2">{t.questions}</h3>
                    <p className="text-gray-600 mb-4">{t.questionsDesc}</p>
                    <a 
                      href="/contact" 
                      className="inline-flex items-center px-4 py-2 bg-ticket-blue text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      {t.contactSupport}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shipping;
