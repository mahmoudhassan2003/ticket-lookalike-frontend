
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
