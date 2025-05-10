
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
      // In a real implementation, this would call your Stripe checkout endpoint
      // For now, we'll simulate a successful checkout after a short delay
      setTimeout(() => {
        toast({
          title: "Checkout successful!",
          description: "Your order has been processed",
        });
        clearCart();
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "Checkout failed",
        description: "There was an error processing your payment",
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
          Processing...
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
