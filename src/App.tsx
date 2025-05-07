
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Concerts from "./pages/Concerts";
import Sports from "./pages/Sports";
import Theater from "./pages/Theater";
import Festivals from "./pages/Festivals";
import Comedy from "./pages/Comedy";
import Family from "./pages/Family";
import NearMe from "./pages/NearMe";
import EventDetail from "./pages/EventDetail";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Affiliate from "./pages/Affiliate";
import Account from "./pages/Account";
import OrderStatus from "./pages/OrderStatus";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import FAQ from "./pages/FAQ";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CartProvider, useCart } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { SearchProvider } from "./contexts/SearchContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <LanguageProvider>
          <CartProvider>
            <WishlistProvider>
              <SearchProvider>
                <Toaster />
                <Sonner />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/concerts" element={<Concerts />} />
                  <Route path="/sports" element={<Sports />} />
                  <Route path="/theater" element={<Theater />} />
                  <Route path="/festivals" element={<Festivals />} />
                  <Route path="/comedy" element={<Comedy />} />
                  <Route path="/family" element={<Family />} />
                  <Route path="/near-me" element={<NearMe />} />
                  <Route path="/event/:eventId" element={<EventDetail />} />
                  <Route path="/search-results" element={<SearchResults />} />
                  
                  {/* Redirect legacy URLs if needed */}
                  <Route path="/event/undefined" element={<Navigate to="/404" replace />} />
                  
                  {/* About Us Footer Links */}
                  <Route path="/about" element={<About />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/press" element={<Press />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/affiliate" element={<Affiliate />} />
                  
                  {/* Customer Service Footer Links */}
                  <Route path="/account" element={<Account />} />
                  <Route path="/order-status" element={<OrderStatus />} />
                  <Route path="/shipping" element={<Shipping />} />
                  <Route path="/returns" element={<Returns />} />
                  <Route path="/faq" element={<FAQ />} />
                  
                  {/* Explicit 404 route */}
                  <Route path="/404" element={<NotFound />} />
                  
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </SearchProvider>
            </WishlistProvider>
          </CartProvider>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
