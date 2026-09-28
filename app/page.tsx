import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#e8e8e5]">
      <div
        className="mx-auto min-h-screen w-full max-w-[920px] border-x border-[#d0d0cc] shadow-[0_8px_35px_rgba(0,0,0,0.12)]"
        style={{
          backgroundColor: "#f7f7f4",
          backgroundImage: `
            linear-gradient(
              rgba(255, 255, 255, 0.35) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.35) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "32px 32px",
        }}
      >
        <Navbar />

        <main className="px-6 md:px-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Footer />
        </main>
      </div>
    </div>
  );
}