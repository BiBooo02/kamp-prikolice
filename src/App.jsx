import React, { useRef } from "react";
import "./index.css";
import { useScrollProgress } from "./hooks/useScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RouteLine from "./components/RouteLine";
import WhySection from "./components/WhySection";
import OfferSection from "./components/OfferSection";
import PurchaseSteps from "./components/PurchaseSteps";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const journeyRef = useRef(null);
  const progress = useScrollProgress(journeyRef);

  return (
    <div className="kc-root">
      <Navbar />
      <Hero />

      <main className="journey" ref={journeyRef}>
        <RouteLine progress={progress} />
        <WhySection progress={progress} />
        <OfferSection progress={progress} />
        <PurchaseSteps progress={progress} />
        <ContactSection progress={progress} />
      </main>

      <Footer />
    </div>
  );
}