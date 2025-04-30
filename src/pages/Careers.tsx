
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";

const Careers = () => {
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  
  const translations = {
    en: {
      title: "Join Our Team",
      subtitle: "Build Your Career at MarketIX",
      why: "Why MarketIX?",
      benefits: "Benefits & Perks",
      openings: "Current Openings",
      noOpenings: "No open positions at the moment. Check back soon!",
      apply: "Apply Now",
      benefitsList: [
        {
          title: "Flexible Working",
          description: "Remote-first culture with flexible hours"
        },
        {
          title: "Competitive Salary",
          description: "Above industry standard compensation"
        },
        {
          title: "Health Benefits",
          description: "Comprehensive health, dental, and vision coverage"
        },
        {
          title: "Professional Development",
          description: "Learning stipend and growth opportunities"
        },
        {
          title: "Event Access",
          description: "Free tickets to select events"
        },
        {
          title: "Team Activities",
          description: "Regular team retreats and social events"
        }
      ],
      jobsList: [
        {
          title: "Frontend Developer",
          location: "Remote",
          type: "Full-time",
          description: "Join our engineering team to build and enhance our customer-facing applications using React and modern frontend technologies."
        },
        {
          title: "Customer Support Specialist",
          location: "New York",
          type: "Full-time",
          description: "Help our customers have the best experience purchasing and using tickets through our platform."
        },
        {
          title: "Digital Marketing Manager",
          location: "Remote",
          type: "Full-time",
          description: "Lead our digital marketing efforts to attract more customers and grow our brand presence."
        }
      ]
    },
    ar: {
      title: "انضم إلى فريقنا",
      subtitle: "ابنِ حياتك المهنية في MarketIX",
      why: "لماذا MarketIX؟",
      benefits: "المزايا والمكافآت",
      openings: "الوظائف المتاحة حاليًا",
      noOpenings: "لا توجد وظائف شاغرة في الوقت الحالي. تحقق مرة أخرى قريبًا!",
      apply: "تقدم الآن",
      benefitsList: [
        {
          title: "عمل مرن",
          description: "ثقافة العمل عن بعد مع ساعات مرنة"
        },
        {
          title: "راتب تنافسي",
          description: "تعويض أعلى من معايير الصناعة"
        },
        {
          title: "مزايا صحية",
          description: "تغطية صحية شاملة، أسنان، ورؤية"
        },
        {
          title: "التطوير المهني",
          description: "مخصصات للتعلم وفرص للنمو"
        },
        {
          title: "الوصول للفعاليات",
          description: "تذاكر مجانية لفعاليات مختارة"
        },
        {
          title: "أنشطة الفريق",
          description: "رحلات منتظمة للفريق وفعاليات اجتماعية"
        }
      ],
      jobsList: [
        {
          title: "مطور واجهة أمامية",
          location: "عن بعد",
          type: "دوام كامل",
          description: "انضم إلى فريق الهندسة لدينا لبناء وتعزيز تطبيقاتنا الموجهة للعملاء باستخدام React وتقنيات الواجهة الأمامية الحديثة."
        },
        {
          title: "أخصائي دعم العملاء",
          location: "نيويورك",
          type: "دوام كامل",
          description: "ساعد عملاءنا على الحصول على أفضل تجربة لشراء واستخدام التذاكر من خلال منصتنا."
        },
        {
          title: "مدير التسويق الرقمي",
          location: "عن بعد",
          type: "دوام كامل",
          description: "قد جهود التسويق الرقمي لدينا لجذب المزيد من العملاء وتنمية وجود علامتنا التجارية."
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen flex flex-col" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ticket-blue to-blue-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl max-w-2xl mx-auto">{t.subtitle}</p>
          </div>
        </section>

        {/* Why MarketIX Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{t.why}</h2>
              <p className="text-lg text-gray-600">
                At MarketIX, we're passionate about connecting people to live events. Our team works together to create innovative solutions that make ticket buying simple and enjoyable. We value collaboration, creativity, and a customer-first mindset.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t.benefits}</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
              {t.benefitsList.map((benefit, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-ticket-blue">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t.openings}</h2>
            
            {t.jobsList.length > 0 ? (
              <div className="max-w-4xl mx-auto space-y-6">
                {t.jobsList.map((job, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-ticket-blue">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                          <Badge variant="outline">{job.location}</Badge>
                          <Badge>{job.type}</Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <Button>{t.apply}</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600">{t.noOpenings}</p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
