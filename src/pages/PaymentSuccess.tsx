
import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Check, Calendar, Home, Ticket } from "lucide-react";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 max-w-2xl">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
            <p className="text-gray-600 mb-6">Thank you for your purchase. Your tickets are confirmed!</p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center mb-4">
                <Ticket className="h-5 w-5 text-ticket-blue mr-2" />
                <h2 className="text-xl font-medium">Order Details</h2>
              </div>
              
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-500">Order Number:</span>
                  <span className="font-medium">{orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Date:</span>
                  <span className="font-medium">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Status:</span>
                  <span className="text-green-600 font-medium">Confirmed</span>
                </div>
              </div>
            </div>
            
            <p className="mb-6">Your e-tickets have been sent to your email address.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                onClick={() => navigate("/")} 
                className="bg-ticket-blue hover:bg-blue-700"
              >
                <Home className="mr-2 h-4 w-4" />
                Return to Home
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate("/account")} 
                className="border-ticket-blue text-ticket-blue hover:bg-ticket-blue hover:text-white"
              >
                <Calendar className="mr-2 h-4 w-4" />
                View My Events
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;
