import HeaderSection from "./_sections/header";
import OurProcess from "./_sections/process";
import Portfolio from "./_sections/portfolio";
import Contact from "./_sections/contact";
import Footer from "./_sections/footer";
import AboutUs from "./_sections/about";

export default function Home() {
  return (
    <>
      <main className="flex flex-col p-0 bg-white">
        <HeaderSection />
        <AboutUs />
        <OurProcess />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
