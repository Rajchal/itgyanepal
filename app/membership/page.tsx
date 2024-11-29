import Download from "@/sections/Download";
import Faq from "@/sections/Faq";
import Features from "@/sections/Feature";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Pricing from "@/sections/Pricing";
import Testimonials from "@/sections/Testimonials";
import React from "react";

const Page = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
};

export default Page;
