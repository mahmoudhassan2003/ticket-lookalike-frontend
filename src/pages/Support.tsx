
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelpCircle, MessageSquare as MessageSquareIcon, Contact } from "lucide-react";
import { Button } from '@/components/ui/button';

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ticket-darkOrange to-ticket-softOrange py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Support Center</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Find answers to your questions and get the help you need.
            </p>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="faq" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto md:grid-cols-3 mb-8">
                <TabsTrigger value="faq">FAQs</TabsTrigger>
                <TabsTrigger value="tickets">My Tickets</TabsTrigger>
                <TabsTrigger value="contact">Contact Support</TabsTrigger>
              </TabsList>

              <TabsContent value="faq">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-ticket-blue">
                      <HelpCircle className="mr-2" size={20} /> Frequently Asked Questions
                    </CardTitle>
                    <CardDescription>
                      Find answers to the most common questions about our services.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>How do I purchase tickets?</AccordionTrigger>
                        <AccordionContent>
                          To purchase tickets, browse our events, select the one you'd like to attend, choose your seats, and proceed to checkout. You can pay using credit/debit cards, PayPal, or other available payment methods.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Can I get a refund for my tickets?</AccordionTrigger>
                        <AccordionContent>
                          Refund policies vary by event. Generally, tickets are non-refundable unless the event is cancelled or rescheduled. Please check the specific event's terms and conditions for details.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>How do I receive my tickets?</AccordionTrigger>
                        <AccordionContent>
                          Tickets are delivered electronically to your email or through our mobile app. You can print them out or present them on your mobile device at the venue.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Can I sell tickets I can't use?</AccordionTrigger>
                        <AccordionContent>
                          Yes, you can resell your tickets through our secure marketplace. Log in to your account, go to your tickets, and select the resale option.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <AccordionTrigger>What if an event is cancelled?</AccordionTrigger>
                        <AccordionContent>
                          If an event is cancelled, you will automatically receive a refund to your original payment method. You'll be notified via email when the refund is processed.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tickets">
                <Card>
                  <CardHeader>
                    <CardTitle>My Tickets Support</CardTitle>
                    <CardDescription>
                      Get help with your purchased tickets.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Please log in to view and manage your tickets. If you're experiencing any issues with your tickets, please use the options below for assistance.</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <Card className="p-4 border border-gray-200 hover:border-ticket-blue transition-colors cursor-pointer">
                        <h3 className="font-semibold mb-2">Missing Tickets</h3>
                        <p className="text-sm text-gray-600">Can't find your purchased tickets? Get help locating them.</p>
                      </Card>
                      <Card className="p-4 border border-gray-200 hover:border-ticket-blue transition-colors cursor-pointer">
                        <h3 className="font-semibold mb-2">Transfer Tickets</h3>
                        <p className="text-sm text-gray-600">Learn how to safely transfer tickets to friends or family.</p>
                      </Card>
                      <Card className="p-4 border border-gray-200 hover:border-ticket-blue transition-colors cursor-pointer">
                        <h3 className="font-semibold mb-2">Ticket Issues</h3>
                        <p className="text-sm text-gray-600">Problem with scanning or accessing your tickets? Get help here.</p>
                      </Card>
                      <Card className="p-4 border border-gray-200 hover:border-ticket-blue transition-colors cursor-pointer">
                        <h3 className="font-semibold mb-2">Refund Requests</h3>
                        <p className="text-sm text-gray-600">Learn about our refund policy and how to request one.</p>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contact">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Our Support Team</CardTitle>
                    <CardDescription>
                      Can't find what you're looking for? Reach out to our support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="p-4 text-center">
                        <div className="mb-3 mx-auto bg-ticket-blue/10 w-12 h-12 flex items-center justify-center rounded-full">
                          <MessageSquareIcon className="text-ticket-blue" size={24} />
                        </div>
                        <h3 className="font-semibold mb-1">Live Chat</h3>
                        <p className="text-sm text-gray-600 mb-3">Available 24/7</p>
                        <Button variant="outline" className="w-full">Start Chat</Button>
                      </Card>
                      
                      <Card className="p-4 text-center">
                        <div className="mb-3 mx-auto bg-ticket-blue/10 w-12 h-12 flex items-center justify-center rounded-full">
                          <HelpCircle className="text-ticket-blue" size={24} />
                        </div>
                        <h3 className="font-semibold mb-1">Call Us</h3>
                        <p className="text-sm text-gray-600 mb-3">1-800-TICKETS</p>
                        <Button variant="outline" className="w-full">Call Support</Button>
                      </Card>
                      
                      <Card className="p-4 text-center">
                        <div className="mb-3 mx-auto bg-ticket-blue/10 w-12 h-12 flex items-center justify-center rounded-full">
                          <Contact className="text-ticket-blue" size={24} />
                        </div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-sm text-gray-600 mb-3">support@ticketmarche.com</p>
                        <Button variant="outline" className="w-full">Email Us</Button>
                      </Card>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Support Hours</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>Monday - Friday:</div>
                        <div>8:00 AM - 10:00 PM EST</div>
                        <div>Saturday:</div>
                        <div>9:00 AM - 8:00 PM EST</div>
                        <div>Sunday:</div>
                        <div>10:00 AM - 6:00 PM EST</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
