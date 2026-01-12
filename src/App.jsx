import React from "react";
import TopBar from "./components/TopBar.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import TreatmentGrid from "./components/TreatmentGrid.jsx";
import AboutSection from "./components/AboutSection.jsx";
import TestimonialsSection from "./components/TestimonialsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import FAQSection from "./components/FAQSection.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

const CLINIC_NAME = "Anchorage Orthodontic and Dental Clinic";
const CLINIC_PHONE = "+91 8975043861";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <TopBar clinicName={CLINIC_NAME} phone={CLINIC_PHONE} />
      <Navbar clinicName={CLINIC_NAME} phone={CLINIC_PHONE} />
      <main className="pt-14" id="home">
        <Hero clinicName={CLINIC_NAME} phone={CLINIC_PHONE} />
        <ImageSlider />
        <TreatmentGrid />
        <AboutSection clinicName={CLINIC_NAME} />
        <TestimonialsSection />
        <ContactSection clinicName={CLINIC_NAME} phone={CLINIC_PHONE} />
        <FAQSection />
      </main>
      <Footer clinicName={CLINIC_NAME} />
      <ScrollToTopButton />
    </div>
  );
}
