
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const FAQ = () => {
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  
  const translations = {
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about our services",
      searchPlaceholder: "Search for questions",
      searchButton: "Search",
      categories: {
        tickets: "Tickets",
        account: "Account & Registration",
        payment: "Payment & Pricing",
        delivery: "Delivery & Mobile Tickets",
        events: "Events & Venues",
        other: "Other Questions"
      },
      questions: {
        tickets: [
          {
            question: "How do I transfer tickets to someone else?",
            answer: "You can transfer tickets by logging into your account, navigating to 'My Tickets', selecting the tickets you want to transfer, and entering the recipient's email address. They'll receive an email with instructions to claim their tickets."
          },
          {
            question: "Can I get a refund if I can't attend an event?",
            answer: "All ticket sales are final. However, if an event is cancelled, you will automatically receive a refund. For postponed events, tickets are typically valid for the new date, but refund policies may vary by event organizer."
          },
          {
            question: "Are tickets transferable between devices?",
            answer: "Yes! Your tickets are tied to your MarketIX account, so you can access them from any device by simply logging into your account."
          }
        ],
        account: [
          {
            question: "How do I create an account?",
            answer: "Click the 'Sign In' button in the top right corner of the page and select 'Create Account'. Fill in the required information, verify your email address, and you're ready to go!"
          },
          {
            question: "I forgot my password. How can I reset it?",
            answer: "Click 'Sign In', then select 'Forgot Password'. Enter the email address associated with your account, and we'll send you a link to reset your password."
          }
        ],
        payment: [
          {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit and debit cards including Visa, MasterCard, American Express, and Discover. We also support PayPal and Apple Pay on compatible devices."
          },
          {
            question: "Why is there a service fee on my order?",
            answer: "Service fees cover the costs of operating our ticketing platform, providing customer support, and developing technology to enhance your ticket buying experience."
          }
        ]
      },
      needMoreHelp: "Need More Help?",
      contactSupport: "Contact Support"
    },
    ar: {
      title: "الأسئلة المتكررة",
      subtitle: "ابحث عن إجابات للأسئلة الشائعة حول خدماتنا",
      searchPlaceholder: "ابحث عن الأسئلة",
      searchButton: "بحث",
      categories: {
        tickets: "التذاكر",
        account: "الحساب والتسجيل",
        payment: "الدفع والتسعير",
        delivery: "التسليم والتذاكر المحمولة",
        events: "الفعاليات والأماكن",
        other: "أسئلة أخرى"
      },
      questions: {
        tickets: [
          {
            question: "كيف أنقل التذاكر لشخص آخر؟",
            answer: "يمكنك نقل التذاكر عن طريق تسجيل الدخول إلى حسابك، والانتقال إلى 'تذاكري'، واختيار التذاكر التي تريد نقلها، وإدخال عنوان البريد الإلكتروني للمستلم. سيتلقون رسالة بريد إلكتروني تحتوي على تعليمات للمطالبة بتذاكرهم."
          },
          {
            question: "هل يمكنني الحصول على استرداد إذا لم أتمكن من حضور فعالية؟",
            answer: "جميع مبيعات التذاكر نهائية. ومع ذلك، إذا تم إلغاء فعالية، ستتلقى استردادًا تلقائيًا. بالنسبة للفعاليات المؤجلة، تكون التذاكر صالحة عادةً للتاريخ الجديد، ولكن قد تختلف سياسات الاسترداد حسب منظم الفعالية."
          },
          {
            question: "هل يمكن نقل التذاكر بين الأجهزة؟",
            answer: "نعم! تذاكرك مرتبطة بحساب MarketIX الخاص بك، لذلك يمكنك الوصول إليها من أي جهاز ببساطة عن طريق تسجيل الدخول إلى حسابك."
          }
        ],
        account: [
          {
            question: "كيف أنشئ حسابًا؟",
            answer: "انقر على زر 'تسجيل الدخول' في الزاوية اليمنى العليا من الصفحة واختر 'إنشاء حساب'. املأ المعلومات المطلوبة، وتحقق من عنوان بريدك الإلكتروني، وأنت جاهز للانطلاق!"
          },
          {
            question: "لقد نسيت كلمة المرور. كيف يمكنني إعادة تعيينها؟",
            answer: "انقر على 'تسجيل الدخول'، ثم اختر 'نسيت كلمة المرور'. أدخل عنوان البريد الإلكتروني المرتبط بحسابك، وسنرسل لك رابطًا لإعادة تعيين كلمة المرور."
          }
        ],
        payment: [
          {
            question: "ما هي طرق الدفع التي تقبلونها؟",
            answer: "نقبل جميع بطاقات الائتمان والخصم الرئيسية بما في ذلك Visa وMasterCard وAmerican Express وDiscover. كما ندعم PayPal وApple Pay على الأجهزة المتوافقة."
          },
          {
            question: "لماذا توجد رسوم خدمة على طلبي؟",
            answer: "تغطي رسوم الخدمة تكاليف تشغيل منصة التذاكر لدينا، وتوفير دعم العملاء، وتطوير التكنولوجيا لتعزيز تجربة شراء التذاكر الخاصة بك."
          }
        ]
      },
      needMoreHelp: "هل تحتاج إلى مزيد من المساعدة؟",
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
            <p className="text-gray-600 text-center mb-8">{t.subtitle}</p>
            
            {/* Search */}
            <div className="mb-10">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder={t.searchPlaceholder} 
                  className={`pl-10 ${isRTL ? 'text-right' : 'text-left'}`}
                />
              </div>
            </div>
            
            {/* FAQ Categories - Tickets */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-6">{t.categories.tickets}</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {t.questions.tickets.map((item, index) => (
                  <AccordionItem value={`tickets-${index}`} key={index}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            {/* FAQ Categories - Account */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-6">{t.categories.account}</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {t.questions.account.map((item, index) => (
                  <AccordionItem value={`account-${index}`} key={index}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            {/* FAQ Categories - Payment */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-6">{t.categories.payment}</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {t.questions.payment.map((item, index) => (
                  <AccordionItem value={`payment-${index}`} key={index}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            {/* Contact Support */}
            <div className="text-center py-8 px-4 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t.needMoreHelp}</h3>
              <Button asChild className="bg-ticket-blue hover:bg-blue-700">
                <a href="/contact">{t.contactSupport}</a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
