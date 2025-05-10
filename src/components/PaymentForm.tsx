
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { CreditCard, Loader2, Check } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const paymentSchema = z.object({
  cardName: z.string().min(3, { message: "Name on card is required" }),
  cardNumber: z.string()
    .min(16, { message: "Card number must be at least 16 digits" })
    .max(19, { message: "Card number must not exceed 19 digits" })
    .regex(/^[0-9\s-]+$/, { message: "Card number must contain only digits" }),
  expiry: z.string()
    .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, { message: "Expiry must be in MM/YY format" }),
  cvc: z.string()
    .min(3, { message: "CVC must be at least 3 digits" })
    .max(4, { message: "CVC must not exceed 4 digits" })
    .regex(/^[0-9]+$/, { message: "CVC must contain only digits" }),
});

type PaymentFormValues = z.infer<typeof paymentSchema>;

const PaymentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const form = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
    },
  });

  const formatCardNumber = (value: string) => {
    // Remove spaces and non-digit characters
    const digits = value.replace(/\D/g, '');
    // Add space after every 4 digits
    const formattedDigits = digits.match(/.{1,4}/g)?.join(' ') || digits;
    return formattedDigits.substring(0, 19); // Limit to 19 chars (16 digits + 3 spaces)
  };

  const formatExpiry = (value: string) => {
    // Remove non-digit characters
    const digits = value.replace(/\D/g, '');
    if (digits.length >= 3) {
      return `${digits.substring(0, 2)}/${digits.substring(2, 4)}`;
    }
    return digits;
  };

  const onSubmit = async (data: PaymentFormValues) => {
    console.log("Payment form submitted:", data);
    setIsSubmitting(true);
    
    try {
      // Simulate payment processing
      setIsProcessing(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Payment processed successfully");
      console.log(`Total amount charged: $${getTotalPrice().toFixed(2)}`);
      console.log("Cart items:", cartItems);
      
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Show success toast
      toast({
        title: "Payment successful!",
        description: `Your payment of $${getTotalPrice().toFixed(2)} has been processed.`,
      });

      // Clear cart after successful payment
      await new Promise(resolve => setTimeout(resolve, 1500));
      clearCart();
      
      // Redirect to confirmation page
      navigate("/payment-success");
    } catch (error) {
      console.error('Payment processing error:', error);
      toast({
        title: "Payment failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
        <p className="text-gray-600 mb-4">Your order has been processed successfully.</p>
        <p className="font-medium mb-6">Total Amount: ${getTotalPrice().toFixed(2)}</p>
        <Button onClick={() => navigate("/")} className="mt-2">
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <CreditCard className="mr-2 h-6 w-6 text-ticket-blue" />
        <h2 className="text-2xl font-bold">Payment Details</h2>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-2">Total Amount</p>
        <p className="text-2xl font-bold">${getTotalPrice().toFixed(2)}</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="cardName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name on Card</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Card Number</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="1234 5678 9012 3456" 
                    value={field.value}
                    onChange={e => field.onChange(formatCardNumber(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="expiry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expiry Date</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="MM/YY" 
                      value={field.value}
                      onChange={e => field.onChange(formatExpiry(e.target.value))}
                      maxLength={5}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cvc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CVC</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="123" 
                      maxLength={4}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="pt-2">
            <Button 
              type="submit" 
              className="w-full bg-ticket-blue hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing Payment...
                </>
              ) : (
                <>Pay ${getTotalPrice().toFixed(2)}</>
              )}
            </Button>
          </div>
          
          <div className="mt-4 text-center text-sm text-gray-500">
            <p>This is a simulation. No real payments are processed.</p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PaymentForm;
