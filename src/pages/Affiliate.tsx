
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";

const Affiliate = () => {
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  
  const translations = {
    en: {
      title: "Affiliate Program",
      subtitle: "Earn money by promoting tickets to events you love",
      howItWorks: "How It Works",
      benefits: "Benefits",
      apply: "Apply Now",
      step1Title: "Sign Up",
      step1Desc: "Complete our simple application form below",
      step2Title: "Share Links",
      step2Desc: "Promote events using your unique affiliate links",
      step3Title: "Earn Commissions",
      step3Desc: "Get up to 10% commission on every sale you refer",
      benefit1: "Industry-leading commission rates",
      benefit2: "Real-time reporting and analytics dashboard",
      benefit3: "Prompt monthly payments",
      benefit4: "Dedicated affiliate support team",
      formTitle: "Affiliate Program Application",
      formSubtitle: "Join our affiliate program today and start earning",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      websiteLabel: "Website/Social Media URL",
      aboutLabel: "Tell us about your audience",
      submitButton: "Submit Application"
    },
    ar: {
      title: "برنامج الشراكة",
      subtitle: "اربح المال من خلال الترويج للتذاكر للفعاليات التي تحبها",
      howItWorks: "كيف يعمل",
      benefits: "المزايا",
      apply: "قدم الآن",
      step1Title: "التسجيل",
      step1Desc: "أكمل نموذج الطلب البسيط أدناه",
      step2Title: "مشاركة الروابط",
      step2Desc: "الترويج للأحداث باستخدام روابط الشراكة الفريدة الخاصة بك",
      step3Title: "كسب العمولات",
      step3Desc: "احصل على عمولة تصل إلى 10٪ على كل عملية بيع تحيلها",
      benefit1: "معدلات عمولات رائدة في الصناعة",
      benefit2: "لوحة تحكم للتقارير والتحليلات في الوقت الحقيقي",
      benefit3: "مدفوعات شهرية فورية",
      benefit4: "فريق دعم مخصص للشركاء",
      formTitle: "طلب برنامج الشراكة",
      formSubtitle: "انضم إلى برنامج الشراكة اليوم وابدأ في الكسب",
      nameLabel: "الاسم الكامل",
      emailLabel: "عنوان البريد الإلكتروني",
      websiteLabel: "موقع الويب / عنوان URL للتواصل الاجتماعي",
      aboutLabel: "أخبرنا عن جمهورك",
      submitButton: "تقديم الطلب"
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen flex flex-col" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-ticket-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl max-w-2xl mx-auto">{t.subtitle}</p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">{t.howItWorks}</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-ticket-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-2">{t.step1Title}</h3>
                <p className="text-gray-600">{t.step1Desc}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-ticket-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-2">{t.step2Title}</h3>
                <p className="text-gray-600">{t.step2Desc}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-ticket-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-2">{t.step3Title}</h3>
                <p className="text-gray-600">{t.step3Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">{t.benefits}</h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-start">
                <CheckCircle className="text-ticket-blue mr-3 mt-1" />
                <p className="text-gray-700">{t.benefit1}</p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-ticket-blue mr-3 mt-1" />
                <p className="text-gray-700">{t.benefit2}</p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-ticket-blue mr-3 mt-1" />
                <p className="text-gray-700">{t.benefit3}</p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-ticket-blue mr-3 mt-1" />
                <p className="text-gray-700">{t.benefit4}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>{t.formTitle}</CardTitle>
                  <CardDescription>{t.formSubtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        {t.nameLabel}
                      </label>
                      <Input id="name" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        {t.emailLabel}
                      </label>
                      <Input id="email" type="email" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="website" className="text-sm font-medium">
                        {t.websiteLabel}
                      </label>
                      <Input id="website" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="about" className="text-sm font-medium">
                        {t.aboutLabel}
                      </label>
                      <Textarea id="about" rows={4} required />
                    </div>
                    
                    <Button type="submit" className="w-full bg-ticket-blue hover:bg-blue-700">
                      {t.submitButton}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Affiliate;
