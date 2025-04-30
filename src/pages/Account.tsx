
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Ticket, Clock, CreditCard, Settings, LogOut } from "lucide-react";

const Account = () => {
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  
  const translations = {
    en: {
      title: "My Account",
      welcome: "Welcome back",
      profileTab: "Profile",
      ticketsTab: "My Tickets",
      ordersTab: "Order History",
      paymentTab: "Payment Methods",
      settingsTab: "Settings",
      updateProfile: "Update Profile",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      saveChanges: "Save Changes",
      upcomingEvents: "Upcoming Events",
      pastEvents: "Past Events",
      noTickets: "No tickets found",
      noOrders: "No order history found",
      addPayment: "Add Payment Method",
      cardNumber: "Card Number",
      expiryDate: "Expiry Date",
      cvv: "CVV",
      cardholderName: "Cardholder Name",
      addCard: "Add Card",
      emailNotifications: "Email Notifications",
      smsNotifications: "SMS Notifications",
      language: "Language",
      english: "English",
      arabic: "Arabic",
      deleteAccount: "Delete Account",
      logout: "Log Out",
      signIn: "Sign In to View Your Account"
    },
    ar: {
      title: "حسابي",
      welcome: "مرحبًا بعودتك",
      profileTab: "الملف الشخصي",
      ticketsTab: "تذاكري",
      ordersTab: "سجل الطلبات",
      paymentTab: "طرق الدفع",
      settingsTab: "الإعدادات",
      updateProfile: "تحديث الملف الشخصي",
      firstName: "الاسم الأول",
      lastName: "الاسم الأخير",
      email: "عنوان البريد الإلكتروني",
      phone: "رقم الهاتف",
      saveChanges: "حفظ التغييرات",
      upcomingEvents: "الفعاليات القادمة",
      pastEvents: "الفعاليات السابقة",
      noTickets: "لم يتم العثور على تذاكر",
      noOrders: "لم يتم العثور على سجل للطلبات",
      addPayment: "إضافة طريقة دفع",
      cardNumber: "رقم البطاقة",
      expiryDate: "تاريخ الانتهاء",
      cvv: "رمز التحقق",
      cardholderName: "اسم حامل البطاقة",
      addCard: "إضافة بطاقة",
      emailNotifications: "إشعارات البريد الإلكتروني",
      smsNotifications: "إشعارات الرسائل القصيرة",
      language: "اللغة",
      english: "الإنجليزية",
      arabic: "العربية",
      deleteAccount: "حذف الحساب",
      logout: "تسجيل الخروج",
      signIn: "تسجيل الدخول لعرض حسابك"
    }
  };

  const t = translations[language];
  const isLoggedIn = false; // This would be determined by your auth context

  return (
    <div className="min-h-screen flex flex-col" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">{t.title}</h1>
          
          {isLoggedIn ? (
            <>
              <p className="mb-8 text-lg">{t.welcome}, User!</p>
              
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid grid-cols-5 mb-8">
                  <TabsTrigger value="profile" className="flex items-center gap-2">
                    <User size={16} /> {t.profileTab}
                  </TabsTrigger>
                  <TabsTrigger value="tickets" className="flex items-center gap-2">
                    <Ticket size={16} /> {t.ticketsTab}
                  </TabsTrigger>
                  <TabsTrigger value="orders" className="flex items-center gap-2">
                    <Clock size={16} /> {t.ordersTab}
                  </TabsTrigger>
                  <TabsTrigger value="payment" className="flex items-center gap-2">
                    <CreditCard size={16} /> {t.paymentTab}
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="flex items-center gap-2">
                    <Settings size={16} /> {t.settingsTab}
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.updateProfile}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">{t.firstName}</Label>
                          <Input id="firstName" defaultValue="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">{t.lastName}</Label>
                          <Input id="lastName" defaultValue="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t.email}</Label>
                        <Input id="email" type="email" defaultValue="john.doe@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.phone}</Label>
                        <Input id="phone" defaultValue="+1 (555) 123-4567" />
                      </div>
                      <Button className="bg-ticket-blue hover:bg-blue-700">
                        {t.saveChanges}
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="tickets">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.upcomingEvents}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">{t.noTickets}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="orders">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.ordersTab}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">{t.noOrders}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="payment">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.addPayment}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">{t.cardNumber}</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">{t.expiryDate}</Label>
                          <Input id="expiryDate" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">{t.cvv}</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardholderName">{t.cardholderName}</Label>
                        <Input id="cardholderName" />
                      </div>
                      <Button className="bg-ticket-blue hover:bg-blue-700">
                        {t.addCard}
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="settings">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.settingsTab}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="emailNotifications">{t.emailNotifications}</Label>
                        <input 
                          type="checkbox" 
                          id="emailNotifications" 
                          defaultChecked 
                          className="toggle toggle-primary" 
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Label htmlFor="smsNotifications">{t.smsNotifications}</Label>
                        <input 
                          type="checkbox" 
                          id="smsNotifications" 
                          className="toggle toggle-primary" 
                        />
                      </div>
                      
                      <div className="border-t pt-4">
                        <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                          <LogOut className="mr-2 h-4 w-4" />
                          {t.logout}
                        </Button>
                      </div>
                      
                      <div className="border-t pt-4">
                        <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                          {t.deleteAccount}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </>
          ) : (
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center">{t.signIn}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button className="bg-ticket-blue hover:bg-blue-700">
                  <User className="mr-2 h-4 w-4" />
                  {t.signIn}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Account;
