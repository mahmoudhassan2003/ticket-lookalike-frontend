
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";

const Terms = () => {
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  
  const translations = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: April 25, 2025",
      introduction: "Welcome to MarketIX",
      introContent: "These Terms of Service govern your access to and use of the MarketIX website and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our services.",
      sections: [
        {
          title: "Account Registration",
          content: "To use certain features of our services, you may be required to register for an account. You must provide accurate, current, and complete information during the registration process and keep your account information up-to-date."
        },
        {
          title: "Ticket Purchases",
          content: "When you purchase tickets through our platform, you agree to pay the listed price for such tickets plus any applicable fees. All ticket sales are final and non-refundable unless otherwise stated or required by law."
        },
        {
          title: "User Conduct",
          content: "You agree not to engage in any of the following prohibited activities: (i) copying, distributing, or disclosing any part of our services; (ii) using any automated system to access our services; (iii) introducing any viruses, trojan horses, worms, or other harmful code; (iv) interfering with the proper working of our services."
        },
        {
          title: "Intellectual Property",
          content: "Our services and its contents, features, and functionality are owned by MarketIX and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws."
        },
        {
          title: "Limitation of Liability",
          content: "In no event shall MarketIX, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or other intangible losses."
        },
        {
          title: "Changes to Terms",
          content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect."
        },
        {
          title: "Governing Law",
          content: "These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions."
        }
      ],
      contact: "Contact Us",
      contactContent: "If you have any questions about these Terms, please contact us at: legal@marketix.com"
    },
    ar: {
      title: "شروط الخدمة",
      lastUpdated: "آخر تحديث: 25 أبريل، 2025",
      introduction: "مرحبًا بك في MarketIX",
      introContent: "تحكم شروط الخدمة هذه وصولك إلى واستخدام موقع وخدمات MarketIX. من خلال الوصول إلى أو استخدام خدماتنا، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق على هذه الشروط، فقد لا تتمكن من الوصول إلى أو استخدام خدماتنا.",
      sections: [
        {
          title: "تسجيل الحساب",
          content: "لاستخدام ميزات معينة من خدماتنا، قد تحتاج إلى تسجيل حساب. يجب عليك تقديم معلومات دقيقة وحديثة وكاملة أثناء عملية التسجيل والحفاظ على تحديث معلومات حسابك."
        },
        {
          title: "شراء التذاكر",
          content: "عندما تشتري تذاكر من خلال منصتنا، فإنك توافق على دفع السعر المدرج لهذه التذاكر بالإضافة إلى أي رسوم قابلة للتطبيق. جميع مبيعات التذاكر نهائية وغير قابلة للاسترداد ما لم ينص على خلاف ذلك أو يتطلب القانون ذلك."
        },
        {
          title: "سلوك المستخدم",
          content: "أنت توافق على عدم المشاركة في أي من الأنشطة المحظورة التالية: (1) نسخ أو توزيع أو الإفصاح عن أي جزء من خدماتنا؛ (2) استخدام أي نظام آلي للوصول إلى خدماتنا؛ (3) إدخال أي فيروسات أو أحصنة طروادة أو ديدان أو أي رمز ضار آخر؛ (4) التدخل في العمل السليم لخدماتنا."
        },
        {
          title: "الملكية الفكرية",
          content: "خدماتنا ومحتوياتها وميزاتها ووظائفها مملوكة لـ MarketIX وهي محمية بموجب حقوق النشر الدولية والعلامات التجارية وبراءات الاختراع والأسرار التجارية وغيرها من قوانين الملكية الفكرية أو حقوق الملكية."
        },
        {
          title: "حدود المسؤولية",
          content: "لا يجوز بأي حال من الأحوال أن تكون MarketIX أو مديريها أو موظفيها أو شركائها أو وكلائها أو مورديها أو الشركات التابعة لها مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو تأديبية، بما في ذلك على سبيل المثال لا الحصر، فقدان الأرباح أو البيانات أو غيرها من الخسائر غير الملموسة."
        },
        {
          title: "التغييرات على الشروط",
          content: "نحتفظ بالحق، وفقًا لتقديرنا الخاص، في تعديل أو استبدال هذه الشروط في أي وقت. إذا كانت المراجعة جوهرية، فسنقدم إشعارًا قبل 30 يومًا على الأقل قبل دخول أي شروط جديدة حيز التنفيذ."
        },
        {
          title: "القانون الحاكم",
          content: "تخضع هذه الشروط وتفسر وفقًا لقوانين الولايات المتحدة، بغض النظر عن أحكام تعارض القوانين فيها."
        }
      ],
      contact: "اتصل بنا",
      contactContent: "إذا كان لديك أي أسئلة حول هذه الشروط، يرجى الاتصال بنا على: legal@marketix.com"
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen flex flex-col" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-r from-gray-700 to-slate-900 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{t.title}</h1>
            <p className="text-sm text-gray-300">{t.lastUpdated}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t.introduction}</h2>
              <p className="text-gray-600 mb-8">{t.introContent}</p>
              
              {t.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.title}</h3>
                  <p className="text-gray-600">{section.content}</p>
                </div>
              ))}
              
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.contact}</h3>
                <p className="text-gray-600">{t.contactContent}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
