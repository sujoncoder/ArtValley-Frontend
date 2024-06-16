import ArtStyleQuizSection from "@/components/home/ArtStyleQuize";
import Arts from "@/components/home/Arts";
import UpcomingEvents from "@/components/home/Events";
import Hero from "@/components/home/Hero";
import QnaSection from "@/components/home/QNAsection";
import TestimonialsSection from "@/components/home/Testmonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Arts />
      <TestimonialsSection />
      <UpcomingEvents />
      <ArtStyleQuizSection />
      <QnaSection />
    </main>
  );
}
