import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import ContactModal from "@/components/ContactModal";
import AuthModal from "@/components/AuthModal";
import ExplorerMenu from "@/components/ExplorerMenu";
import ValuationTool from "@/components/ValuationTool";
import PartnerLogos from "@/components/PartnerLogos";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { projects, Project } from "@/data/projects";
import { User, Menu } from "lucide-react";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);

  const handleLearnMore = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const ongoingProjects = projects.filter((p) => p.status === "ongoing");
  const upcomingProjects = projects.filter((p) => p.status === "upcoming");

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation 
        onContactClick={() => setIsContactOpen(true)}
        onAuthClick={() => setIsAuthOpen(true)}
      />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Services & Solutions Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Our Services & Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital services tailored for modern law firms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {ongoingProjects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                logo={project.logo}
                link={project.link}
                status={project.status}
                initialViews={project.initialViews}
                initialLikes={project.initialLikes}
                onLearnMore={() => handleLearnMore(project)}
              />
            ))}
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Featured Projects
            </h3>
            <p className="text-muted-foreground">
              Showcasing innovative digital solutions and partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingProjects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                logo={project.logo}
                link={project.link}
                status={project.status}
                initialViews={project.initialViews}
                initialLikes={project.initialLikes}
                onLearnMore={() => handleLearnMore(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Digital Asset Valuation Tool Section */}
      <ValuationTool />

      {/* CTA Section */}
      <CTASection />

      {/* Partner Logos Section */}
      <PartnerLogos />

      {/* Footer */}
      <Footer />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ExplorerMenu
        isOpen={isExplorerOpen}
        onClose={() => setIsExplorerOpen(false)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default Index;
