import { useState, useCallback, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import AcademicSection from "../components/AcademicSection";
import ResumeSection from "../components/ResumeSection";
import HackathonsSection from "../components/HackathonsSection";
import CertificationsSection from "../components/CertificationsSection";
import MockInterviewSection from "../components/MockInterviewSection";
import AgileSection from "../components/AgileSection";
import ReflectionsSection from "../components/ReflectionsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import EasterEgg from "../components/EasterEgg";
import ScrollProgressBar from "../components/ScrollProgressBar";
import CursorTrail from "../components/CursorTrail";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const onComplete = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollProgressBar />
      <CursorTrail />
      {!loaded && <LoadingScreen onComplete={onComplete} />}
      <EasterEgg />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <AcademicSection />
        <ResumeSection />
        <HackathonsSection />
        <CertificationsSection />
        <MockInterviewSection />
        <AgileSection />
        <ReflectionsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Index;
