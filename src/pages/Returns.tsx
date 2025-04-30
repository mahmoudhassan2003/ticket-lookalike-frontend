
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";
import { RefreshCw, AlertTriangle, Ban, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Returns = () => {
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  
  const translations = {
    en: {
      title: "Returns & Exchanges",
      subtitle: "Our policy for ticket returns and exchanges",
      generalPolicy: "General Policy",
      generalPolicyDesc: "All ticket sales are final. Due to the nature of live events, we generally do not offer refunds or exchanges once tickets have been purchased.",
      exceptions: "Exceptions",
      exceptionsDesc: "There are a few situations where refunds or exchanges may be available:",
      cancelledEvents: "Cancelled Events",
      cancelledEventsDesc: "If an event is cancelled by the organizer, you will automatically receive a full refund to your original payment method.",
      postponedEvents: "Postponed Events",
      postponedEventsDesc: "If an event is postponed, your tickets will usually be valid for the new date. If you cannot attend the new date, you may be eligible for a refund, depending on the organizer's policy.",
      rescheduledEvents: "Rescheduled Events",
      rescheduledEventsDesc: "Similar to postponed events, tickets are typically valid for the rescheduled date. Refund eligibility depends on the specific event's policy.",
      howToRequest: "How to Request a Refund",
      howToRequestDesc: "If your event qualifies for a refund based on the above exceptions:",
      step1: "Contact our customer support team within 7 days of the cancellation/postponement announcement",
      step2: "Provide your order number and the reason for your refund request",
      step3: "Our team will review your request and process eligible refunds within 10-14 business days",
      questions: "Have Questions?",
      questionsDesc: "If you have specific questions about your order or need assistance with a return or exchange request, please contact our customer support team.",
      contactSupport: "Contact Support",
      faqLink: "Visit our FAQ page"
    },
    ar: {
      title: "الإرجاع والاستبدال",
      subtitle: "سياستنا لإرجاع واستبدال التذاكر",
      generalPolicy: "السياسة العامة",
      generalPolicyDesc: "جميع مبيعات التذاكر نهائية. نظرًا لطبيعة الفعاليات المباشرة، نحن عمومًا لا نقدم استردادًا أو استبدالًا بمجرد شراء التذاكر.",
      exceptions: "الاستثناءات",
      exceptionsDesc: "هناك بعض الحالات التي قد تتوفر فيها عمليات الاسترداد أو الاستبدال:",
      cancelledEvents: "الفعاليات الملغاة",
      cancelledEventsDesc: "إذا تم إلغاء فعالية من قبل المنظم، ستتلقى تلقائيًا استردادًا كاملاً إلى طريقة الدفع الأصلية الخاصة بك.",
      postponedEvents: "الفعاليات المؤجلة",
      postponedEventsDesc: "إذا تم تأجيل فعالية، عادةً ما تكون تذاكرك صالحة للتاريخ الجديد. إذا كنت لا تستطيع حضور التاريخ الجديد، فقد تكون مؤهلاً للحصول على استرداد، اعتمادًا على سياسة المنظم.",
      rescheduledEvents: "الفعاليات المعاد جدولتها",
      rescheduledEventsDesc: "على غرار الفعاليات المؤجلة، تكون التذاكر عمومًا صالحة للتاريخ المعاد جدولته. تعتمد أهلية الاسترداد على سياسة الفعالية المحددة.",
      howToRequest: "كيفية طلب استرداد",
      howToRequestDesc: "إذا كانت فعاليتك مؤهلة للاسترداد بناءً على الاستثناءات المذكورة أعلاه:",
      step1: "اتصل بفريق دعم العملاء لدينا في غضون 7 أيام من إعلان الإلغاء/التأجيل",
      step2: "قدم رقم طلبك وسبب طلب الاسترداد الخاص بك",
      step3: "سيراجع فريقنا طلبك ويعالج عمليات الاسترداد المؤهلة في غضون 10-14 يوم عمل",
      questions: "هل لديك أسئلة؟",
      questionsDesc: "إذا كانت لديك أسئلة محددة حول طلبك أو تحتاج إلى مساعدة في طلب الإرجاع أو الاستبدال، يرجى الاتصال بفريق دعم العملاء لدينا.",
      contactSupport: "اتصل بالدعم",
      faqLink: "زيارة صفحة الأسئلة المتكررة"
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
            
            {/* General Policy */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-10">
              <div className="flex items-start">
                <div className="mr-4">
                  <Ban className="w-12 h-12 text-red-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">{t.generalPolicy}</h2>
                  <p className="text-gray-600">{t.generalPolicyDesc}</p>
                </div>
              </div>
            </div>
            
            {/* Exceptions */}
            <h2 className="text-2xl font-semibold mb-6">{t.exceptions}</h2>
            <p className="text-gray-600 mb-8">{t.exceptionsDesc}</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <RefreshCw className="w-10 h-10 text-ticket-blue" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{t.cancelledEvents}</h3>
                  <p className="text-gray-600 text-sm">{t.cancelledEventsDesc}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <AlertTriangle className="w-10 h-10 text-amber-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{t.postponedEvents}</h3>
                  <p className="text-gray-600 text-sm">{t.postponedEventsDesc}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <AlertTriangle className="w-10 h-10 text-amber-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{t.rescheduledEvents}</h3>
                  <p className="text-gray-600 text-sm">{t.rescheduledEventsDesc}</p>
                </CardContent>
              </Card>
            </div>
            
            {/* How to Request a Refund */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{t.howToRequest}</h2>
              <p className="text-gray-600 mb-8">{t.howToRequestDesc}</p>
              
              <ol className="list-decimal list-inside space-y-4 pl-4">
                <li className="text-gray-700">{t.step1}</li>
                <li className="text-gray-700">{t.step2}</li>
                <li className="text-gray-700">{t.step3}</li>
              </ol>
            </div>
            
            {/* Questions */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center">
                  <HelpCircle className="w-8 h-8 text-ticket-blue mr-3" />
                  <div>
                    <h3 className="text-lg font-medium">{t.questions}</h3>
                    <p className="text-gray-600 text-sm">{t.questionsDesc}</p>
                  </div>
                </div>
                <div className="space-y-2 md:space-y-0 md:space-x-2 flex flex-col md:flex-row">
                  <Button asChild variant="default" className="bg-ticket-blue hover:bg-blue-700">
                    <Link to="/contact">
                      {t.contactSupport}
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/faq">
                      {t.faqLink}
                    </Link>
                  </Button>
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

export default Returns;
