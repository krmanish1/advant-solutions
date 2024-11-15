import Banner1 from "@/Components/Banner1";
import CaseStudy from "@/Components/caseStudy/CaseStudy";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/herosection/HeroSection";
import Newsletter from "@/Components/Newsletter";
import ServicesStep from "@/Components/Process/ServicesStep";
import Testimonial from "@/Components/Testimonials/Testimonial";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <Features />
      {/* <Services /> */}
      <ServicesStep />
      {/* <OurTeam /> */}
      <Banner1 />
      <CaseStudy />
      <Testimonial />
      {/* <Artical /> */}
      {/* <Banner2 /> */}
      <Newsletter />
      <Footer />
    </main>


  );
}
