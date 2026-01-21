import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Intake from "./pages/intake";
import Intake2 from "./pages/intake2";
import NotFound from "./pages/NotFound";

import { CalInit } from "@/components/CalInit";
import { CookieConsent } from "@/components/CookieConsent";
import { DemoSurface } from "@/components/demosurface";
import { Chatbot } from "@/components/Chatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* CAL.COM GLOBAL INIT */}
      <CalInit />

      <BrowserRouter>
        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/intake" element={<Intake />} />
          <Route path="/intake2" element={<Intake2 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* GLOBAL OVERLAYS — ALWAYS MOUNTED */}
        <DemoSurface />

        {/* CHATBOT */}
        <Chatbot />

        {/* COOKIE CONSENT */}
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
