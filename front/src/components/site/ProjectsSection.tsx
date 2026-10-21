import { projects } from "../../data/site";
import { IconArrowRight, IconArrowUpRight } from "./Icons";

export function ProjectsSection() {
  return (
    <section className="section section-projects" id="proyectos">
      <div className="container">
        <div className="section-head split">
          <div className="section-head-main">
            <p className="eyebrow eyebrow-dash">{projects.eyebrow}</p>
            <h2 className="section-title">{projects.title}</h2>
          </div>
          <a className="btn btn-outline" href={projects.link.href}>
            {projects.link.label}
            <IconArrowRight size={15} />
          </a>
        </div>

        <div className="projects-grid">
          {projects.items.map((project) => (
            <article className="project-card" key={project.id}>
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-overlay">
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-arrow" aria-hidden="true">
                  <IconArrowUpRight size={18} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
