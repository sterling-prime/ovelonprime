import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";

// Lazy load non-critical routes
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Intake = lazy(() => import("./pages/intake"));
const Intake2 = lazy(() => import("./pages/intake2"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load overlay/modal components
const CalInit = lazy(() => import("@/components/CalInit").then(m => ({ default: m.CalInit })));
const CookieConsent = lazy(() => import("@/components/CookieConsent").then(m => ({ default: m.CookieConsent })));
const DemoSurface = lazy(() => import("@/components/demosurface").then(m => ({ default: m.DemoSurface })));
const Chatbot = lazy(() => import("@/components/Chatbot").then(m => ({ default: m.Chatbot })));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* CAL.COM GLOBAL INIT */}
      <Suspense fallback={null}>
        <CalInit />
      </Suspense>

      <BrowserRouter>
        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Suspense fallback={null}><Privacy /></Suspense>} />
          <Route path="/terms" element={<Suspense fallback={null}><Terms /></Suspense>} />
          <Route path="/intake" element={<Suspense fallback={null}><Intake /></Suspense>} />
          <Route path="/intake2" element={<Suspense fallback={null}><Intake2 /></Suspense>} />
          <Route path="*" element={<Suspense fallback={null}><NotFound /></Suspense>} />
        </Routes>

        {/* GLOBAL OVERLAYS — ALWAYS MOUNTED */}
        <Suspense fallback={null}>
          <DemoSurface />
        </Suspense>

        {/* CHATBOT */}
        <Suspense fallback={null}>
          <Chatbot />
        </Suspense>

        {/* COOKIE CONSENT */}
        <Suspense fallback={null}>
          <CookieConsent />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
