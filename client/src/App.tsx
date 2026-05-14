import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import IntroSplash from "./components/IntroSplash";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingInquiry from "./components/FloatingInquiry";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import News from "@/pages/News";
import { useState, useCallback } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/products/:category" component={ProductDetail} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/news" component={News} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <IntroSplash onComplete={handleIntroComplete} />
          {introComplete && (
            <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "oklch(0.97 0.002 260)" }}>
              <Navbar />
              <main style={{ flex: 1 }}>
                <Router />
              </main>
              <Footer />
              <FloatingInquiry />
            </div>
          )}
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
