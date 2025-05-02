import FeaturedCourses from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
    </main>
  );
}
