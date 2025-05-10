
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CreditCard } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const CheckoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { cartItems, getTotalPrice, clearCart } = useCart();

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      // Simulate creating a Stripe checkout session
      console.log("Creating Stripe checkout session...");
      
      // In a real implementation, this would call a backend endpoint like:
      // const response = await fetch('/api/create-checkout-session', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ items: cartItems })
      // });
      // const { sessionUrl } = await response.json();
      // window.location.href = sessionUrl;
      
      // For now, simulate the checkout process
      console.log("Cart items to be processed:", cartItems);
      console.log("Total amount:", getTotalPrice());
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful payment
      console.log("Payment successfully processed with Stripe!");
      toast({
        title: "Payment successful!",
        description: "Your order has been processed. Thank you for your purchase!",
      });
      
      // Clear cart after successful checkout
      clearCart();
      setIsLoading(false);
    } catch (error) {
      console.error('Stripe checkout error:', error);
      toast({
        title: "Payment failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleCheckout}
      disabled={isLoading || cartItems.length === 0}
      className="w-full bg-ticket-blue hover:bg-blue-700"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing Payment...
        </>
      ) : (
        <>
          <CreditCard className="mr-2 h-4 w-4" />
          Pay ${getTotalPrice().toFixed(2)}
        </>
      )}
    </Button>
  );
};

export default CheckoutButton;
