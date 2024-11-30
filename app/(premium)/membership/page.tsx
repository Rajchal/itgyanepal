import Download from "@/app/(premium)/sections/Download";
import Faq from "@/app/(premium)/sections/Faq";
import Features from "@/app/(premium)/sections/Feature";
import Footer from "@/app/(premium)/sections/Footer";
import Header from "@/app/(premium)/sections/Header";
import Hero from "@/app/(premium)/sections/Hero";
import Pricing from "@/app/(premium)/sections/Pricing";
import Testimonials from "@/app/(premium)/sections/Testimonials";
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
