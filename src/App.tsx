import { lazy, Suspense, useState, useEffect } from "react";
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

// Lazy load overlay/modal components (deferred after initial paint)
const CalInit = lazy(() => import("@/components/CalInit").then(m => ({ default: m.CalInit })));
const CookieConsent = lazy(() => import("@/components/CookieConsent").then(m => ({ default: m.CookieConsent })));
const DemoSurface = lazy(() => import("@/components/demosurface").then(m => ({ default: m.DemoSurface })));
const Chatbot = lazy(() => import("@/components/Chatbot").then(m => ({ default: m.Chatbot })));
const SubscribePopup = lazy(() => import("@/components/SubscribePopup").then(m => ({ default: m.SubscribePopup })));

const queryClient = new QueryClient();

const App = () => {
  // Defer non-critical overlays until after initial paint to break the critical chain
  const [showOverlays, setShowOverlays] = useState(false);

  useEffect(() => {
    // Use requestIdleCallback if available, otherwise setTimeout
    const loadOverlays = () => setShowOverlays(true);
    
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(loadOverlays, { timeout: 2000 });
    } else {
      setTimeout(loadOverlays, 1000);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

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

          {/* DEFERRED OVERLAYS — loaded after initial paint */}
          {showOverlays && (
            <>
              {/* CAL.COM GLOBAL INIT */}
              <Suspense fallback={null}>
                <CalInit />
              </Suspense>

              {/* GLOBAL OVERLAYS */}
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

              {/* SUBSCRIBE POPUP */}
              <Suspense fallback={null}>
                <SubscribePopup />
              </Suspense>
            </>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
