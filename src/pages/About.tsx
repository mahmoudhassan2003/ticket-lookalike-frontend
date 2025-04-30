
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";

const About = () => {
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  
  const translations = {
    en: {
      title: "About MarketIX",
      subtitle: "Your Trusted Ticket Provider",
      story: "Our Story",
      storyContent: "Founded in 2020, MarketIX has quickly grown to become one of the leading ticket platforms in the world. What started as a small team with a big vision has transformed into a global company serving millions of customers in over 30 countries.",
      mission: "Our Mission",
      missionContent: "At MarketIX, we're on a mission to connect fans to the events they love. We believe everyone should have access to unforgettable live experiences, which is why we're committed to providing a secure, user-friendly platform with the best selection of tickets at competitive prices.",
      values: "Our Values",
      valuesList: [
        {
          title: "Customer First",
          description: "Everything we do is designed with our customers in mind. Your satisfaction is our top priority."
        },
        {
          title: "Integrity",
          description: "We operate with honesty and transparency in all our dealings."
        },
        {
          title: "Innovation",
          description: "We continuously evolve our platform and services to deliver the best possible experience."
        },
        {
          title: "Community",
          description: "We believe in the power of shared experiences to bring people together."
        }
      ]
    },
    ar: {
      title: "عن MarketIX",
      subtitle: "موفر التذاكر الموثوق به",
      story: "قصتنا",
      storyContent: "تأسست MarketIX في عام 2020، ونمت بسرعة لتصبح واحدة من منصات التذاكر الرائدة في العالم. ما بدأ كفريق صغير برؤية كبيرة تحول إلى شركة عالمية تخدم الملايين من العملاء في أكثر من 30 دولة.",
      mission: "مهمتنا",
      missionContent: "في MarketIX، مهمتنا هي ربط المعجبين بالفعاليات التي يحبونها. نؤمن بأن الجميع يجب أن يتمتع بوصول إلى تجارب حية لا تُنسى، ولهذا السبب نلتزم بتوفير منصة آمنة وسهلة الاستخدام مع أفضل اختيار للتذاكر بأسعار تنافسية.",
      values: "قيمنا",
      valuesList: [
        {
          title: "العميل أولاً",
          description: "كل ما نفعله مصمم مع وضع عملائنا في الاعتبار. رضاكم هو أولويتنا القصوى."
        },
        {
          title: "النزاهة",
          description: "نعمل بصدق وشفافية في جميع تعاملاتنا."
        },
        {
          title: "الابتكار",
          description: "نحن نطور باستمرار منصتنا وخدماتنا لتقديم أفضل تجربة ممكنة."
        },
        {
          title: "المجتمع",
          description: "نؤمن بقوة التجارب المشتركة في جمع الناس معًا."
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
        <section className="bg-gradient-to-r from-ticket-blue to-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl max-w-2xl mx-auto">{t.subtitle}</p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{t.story}</h2>
              <p className="text-lg text-gray-600 mb-8">{t.storyContent}</p>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{t.mission}</h2>
              <p className="text-lg text-gray-600 mb-8">{t.missionContent}</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t.values}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {t.valuesList.map((value, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-2 text-ticket-blue">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
