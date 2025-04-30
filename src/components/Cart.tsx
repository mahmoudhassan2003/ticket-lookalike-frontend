
import React, { useState } from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalItems, getTotalPrice } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'ar';

  const translations = {
    en: {
      cart: "Cart",
      yourCart: "Your Cart",
      emptyCart: "Your cart is empty",
      checkout: "Checkout",
      total: "Total",
      clear: "Clear Cart",
      continueShopping: "Continue Shopping"
    },
    ar: {
      cart: "عربة التسوق",
      yourCart: "عربة التسوق الخاصة بك",
      emptyCart: "عربة التسوق فارغة",
      checkout: "الدفع",
      total: "المجموع",
      clear: "إفراغ العربة",
      continueShopping: "مواصلة التسوق"
    }
  };

  const t = translations[language];

  const handleCheckout = () => {
    toast({
      title: "Checkout initiated",
      description: "Redirecting to payment page...",
    });
    // In a real app, this would redirect to checkout
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <div className="relative">
          <Button variant="ghost" size="icon">
            <ShoppingCart size={20} />
          </Button>
          {getTotalItems() > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-ticket-blue text-white">
              {getTotalItems()}
            </Badge>
          )}
        </div>
      </SheetTrigger>
      <SheetContent className={`w-full md:max-w-md ${isRTL ? 'rtl' : ''}`} side={isRTL ? "right" : "right"}>
        <SheetHeader>
          <SheetTitle className="text-xl font-bold">{t.yourCart}</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 flex flex-col h-[calc(100vh-180px)]">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-gray-500">{t.emptyCart}</p>
              <SheetClose asChild>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => navigate("/")}
                >
                  {t.continueShopping}
                </Button>
              </SheetClose>
            </div>
          ) : (
            <>
              <div className="flex-grow overflow-auto space-y-4">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.ticketType}`} className="flex border-b pb-4">
                    <div className="h-20 w-20 rounded overflow-hidden mr-3">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.ticketType} - {item.date}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded-md">
                          <button 
                            className="px-2 py-1" 
                            onClick={() => item.quantity > 1 && updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-2">{item.quantity}</span>
                          <button 
                            className="px-2 py-1" 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                    <button 
                      className="text-gray-500 hover:text-red-500 ml-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 border-t pt-4">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">{t.total}</span>
                  <span className="font-bold">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="default" 
                    className="w-full bg-ticket-blue hover:bg-blue-700"
                    onClick={handleCheckout}
                  >
                    {t.checkout}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="shrink-0"
                    onClick={clearCart}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
