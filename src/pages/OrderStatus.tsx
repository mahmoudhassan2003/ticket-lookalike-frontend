
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";

const OrderStatus = () => {
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  
  const translations = {
    en: {
      title: "Check Order Status",
      subtitle: "Enter your order number and email to check the status of your order",
      orderNumber: "Order Number",
      emailAddress: "Email Address",
      checkStatus: "Check Status",
      orderNumberPlaceholder: "e.g. ORD-12345678",
      emailPlaceholder: "e.g. your.email@example.com"
    },
    ar: {
      title: "التحقق من حالة الطلب",
      subtitle: "أدخل رقم طلبك والبريد الإلكتروني للتحقق من حالة طلبك",
      orderNumber: "رقم الطلب",
      emailAddress: "عنوان البريد الإلكتروني",
      checkStatus: "التحقق من الحالة",
      orderNumberPlaceholder: "مثال: ORD-12345678",
      emailPlaceholder: "مثال: your.email@example.com"
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen flex flex-col" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-2">{t.title}</h1>
            <p className="text-gray-600 text-center mb-8">{t.subtitle}</p>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-ticket-blue">
                  <Search className="inline-block mr-2" size={20} />
                  {t.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="orderNumber" className="block text-sm font-medium">
                      {t.orderNumber}
                    </label>
                    <Input 
                      id="orderNumber" 
                      placeholder={t.orderNumberPlaceholder}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      {t.emailAddress}
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder={t.emailPlaceholder}
                      required 
                    />
                  </div>
                  
                  <div className="pt-2">
                    <Button className="w-full bg-ticket-blue hover:bg-blue-700">
                      {t.checkStatus}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderStatus;
