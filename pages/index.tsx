import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import About from "../components/About";
import ProjectModal from "../components/ProjectModal";
import Footer from "../components/Footer";
import projects, { IProject } from "../data/projects";
import Testimonials from "../components/Testimonials";

export default function Home() {
  const [currentProject, setCurrentProject] = useState<IProject | null>(null);

  const showProjectModal = (index: number) => {
    setCurrentProject(projects[index]);
  };
  const hideProjectModal = () => setCurrentProject(null);
  return (
    <>
      <Head>
        <title>Hakim&apos;s porfolio</title>
      </Head>

      <header className="bg-white bg-hero-mobile md:bg-hero-desktop">
        <Navbar />
        <Hero />
      </header>
      <main className="bg-white">
        {currentProject && (
          <ProjectModal
            onclose={hideProjectModal}
            isOpen={!!currentProject}
            project={currentProject}
          />
        )}
        <section id="testimonials" className="py-24">
          <Testimonials />
        </section>
        <section
          id="portfolio"
          className="py-24 flex flex-col gap-y-8 bg-slate-50"
        >
          <div className="container">
            <div className="text-center my-16">
              <h2 className="text-3xl font-semibold text-primary-500">Projects</h2>
            </div>
            {projects.map((project, idx) => (
              <ProjectCard
                key={project.title}
                project={project}
                onClick={() => showProjectModal(idx)}
              />
            ))}
          </div>
        </section>
        <section id="about" className="container py-24">
          <About />
        </section>
      </main>
      <footer id="contact" className="bg-primary-500 bg-footer-mobile md:bg-footer-desktop bg-no-repeat">
        <Footer />
      </footer>
    </>
  );
}
