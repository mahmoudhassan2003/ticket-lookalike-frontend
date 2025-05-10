
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from "@/contexts/CartContext";
import { Separator } from "@/components/ui/separator";
import PaymentForm from '../components/PaymentForm';
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Link } from 'react-router-dom';

const Payment = () => {
  const { cartItems, getTotalPrice } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="flex items-center text-sm text-gray-500 hover:text-ticket-blue mb-6">
            <ArrowLeft size={16} className="mr-1" />
            Back to shopping
          </Link>
          
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Form */}
            <div>
              <PaymentForm />
            </div>
            
            {/* Order Summary */}
            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Order Summary
              </h2>
              
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={`${item.id}-${item.ticketType}`} className="flex justify-between">
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-gray-500">{item.ticketType} - {item.quantity} {item.quantity === 1 ? 'ticket' : 'tickets'}</p>
                        </div>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-gray-500">Subtotal</p>
                      <p>${getTotalPrice().toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-500">Tax</p>
                      <p>$0.00</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-500">Shipping</p>
                      <p>$0.00</p>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex justify-between font-bold">
                    <p>Total</p>
                    <p>${getTotalPrice().toFixed(2)}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Payment;
