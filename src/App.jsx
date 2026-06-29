import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import ServiceGallery from './components/ServiceGallery.jsx';
import Professionals from './components/Professionals.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ServiceGallery />
        <Professionals />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
