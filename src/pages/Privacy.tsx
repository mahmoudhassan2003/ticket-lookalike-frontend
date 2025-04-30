
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";

const Privacy = () => {
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  
  const translations = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: April 25, 2025",
      introduction: "Introduction",
      introContent: "At MarketIX, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our ticketing services.",
      sections: [
        {
          title: "Information We Collect",
          content: "We collect information that you provide directly to us when you register for an account, purchase tickets, contact customer support, or otherwise communicate with us. This may include your name, email address, phone number, postal address, payment information, and any other information you choose to provide."
        },
        {
          title: "How We Use Your Information",
          content: "We may use the information we collect from you to: provide, maintain, and improve our services; process your transactions; send you technical notices and support messages; communicate with you about products, services, offers, and events; and respond to your comments and questions."
        },
        {
          title: "Sharing Your Information",
          content: "We may share your personal information with: event organizers whose events you purchase tickets for; service providers who perform services on our behalf; and as required by law or to respond to legal process."
        },
        {
          title: "Your Choices",
          content: "You may update, correct, or delete your account information at any time by logging into your account. You may also opt out of receiving promotional communications from us by following the instructions in those communications."
        },
        {
          title: "Security",
          content: "We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction."
        },
        {
          title: "Changes to This Privacy Policy",
          content: "We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice."
        }
      ],
      contact: "Contact Us",
      contactContent: "If you have any questions about this Privacy Policy, please contact us at: privacy@marketix.com"
    },
    ar: {
      title: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: 25 أبريل، 2025",
      introduction: "مقدمة",
      introContent: "في MarketIX، نأخذ خصوصيتك على محمل الجد. توضح سياسة الخصوصية هذه كيفية جمع واستخدام والكشف عن وحماية معلوماتك عند زيارة موقعنا الإلكتروني أو استخدام خدمات التذاكر الخاصة بنا.",
      sections: [
        {
          title: "المعلومات التي نجمعها",
          content: "نجمع المعلومات التي تقدمها مباشرة لنا عندما تسجل حسابًا، أو تشتري تذاكر، أو تتواصل مع دعم العملاء، أو تتواصل معنا بطريقة أخرى. قد يشمل ذلك اسمك، وعنوان بريدك الإلكتروني، ورقم هاتفك، وعنوانك البريدي، ومعلومات الدفع، وأي معلومات أخرى تختار تقديمها."
        },
        {
          title: "كيف نستخدم معلوماتك",
          content: "قد نستخدم المعلومات التي نجمعها منك من أجل: تقديم وصيانة وتحسين خدماتنا؛ معالجة معاملاتك؛ إرسال إشعارات فنية ورسائل دعم إليك؛ التواصل معك بشأن المنتجات والخدمات والعروض والفعاليات؛ والرد على تعليقاتك وأسئلتك."
        },
        {
          title: "مشاركة معلوماتك",
          content: "قد نشارك معلوماتك الشخصية مع: منظمي الفعاليات الذين تشتري تذاكر لفعالياتهم؛ مقدمي الخدمات الذين يؤدون خدمات نيابة عنا؛ وحسب ما يقتضيه القانون أو للرد على الإجراءات القانونية."
        },
        {
          title: "خياراتك",
          content: "يمكنك تحديث أو تصحيح أو حذف معلومات حسابك في أي وقت عن طريق تسجيل الدخول إلى حسابك. يمكنك أيضًا اختيار عدم تلقي اتصالات ترويجية منا باتباع التعليمات الواردة في تلك الاتصالات."
        },
        {
          title: "الأمان",
          content: "نتخذ تدابير معقولة للمساعدة في حماية المعلومات المتعلقة بك من الفقدان أو السرقة أو سوء الاستخدام أو الوصول غير المصرح به أو الإفشاء أو التغيير أو التدمير."
        },
        {
          title: "التغييرات على سياسة الخصوصية هذه",
          content: "قد نقوم بتغيير سياسة الخصوصية هذه من وقت لآخر. إذا أجرينا تغييرات، سنخطرك بمراجعة التاريخ في أعلى السياسة وفي بعض الحالات، قد نقدم لك إشعارًا إضافيًا."
        }
      ],
      contact: "اتصل بنا",
      contactContent: "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على: privacy@marketix.com"
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

export default Privacy;
