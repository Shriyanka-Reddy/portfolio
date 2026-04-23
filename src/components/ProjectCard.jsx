function ProjectCard({ year, title, description, stack, github }) {
  return (
    <article className="project-card">
      <p className="project-year">{year}</p>

      <div className="project-content">
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>

        <div className="stack-list">
          {stack.map((item, index) => (
            <span key={index} className="tag">
              {item}
            </span>
          ))}
        </div>

        <a href={github} target="_blank" rel="noreferrer" className="project-btn-link">
          View on GitHub <span className="arrow">↑</span>
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;