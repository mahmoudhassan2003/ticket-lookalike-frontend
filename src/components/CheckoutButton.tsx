
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CreditCard } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from 'react-router-dom';

const CheckoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { cartItems, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      // Log checkout attempt
      console.log("Starting checkout process...");
      console.log(`Processing ${cartItems.length} items for $${getTotalPrice().toFixed(2)}`);
      
      // Simulate a brief delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to the payment page
      navigate('/payment');
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "Checkout failed",
        description: "There was an error proceeding to checkout. Please try again.",
        variant: "destructive",
      });
    } finally {
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
          Checkout (${getTotalPrice().toFixed(2)})
        </>
      )}
    </Button>
  );
};

export default CheckoutButton;
