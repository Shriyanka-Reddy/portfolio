import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
    year: "2026",
    title: "Speak in Any Language: Multilingual Dubbing Framework",
    description:
      "Designed and implemented a complete multilingual video dubbing pipeline integrating automatic speech recognition, translation, speaker-aware processing, and neural speech synthesis. The system ensures temporal alignment using duration-aware techniques and supports high-quality, speaker-consistent audio generation across languages.",
    stack: ["WhisperX", "NLLB-200", "Edge TTS", "XTTS v2"],
    github: "https://github.com/Shriyanka-Reddy/Entity-Accurate-Clinical-Text-Summarization-with-Hallucination-Mitigation", // add your repo link later
  },

  {
    year: "2025",
    title: "Green Commute Planner",
    description:
      "Developed a system to estimate and compare carbon emissions across different transportation modes, enabling users to make environmentally conscious travel decisions. Implemented emission modeling, route-based calculations, and optimization logic to suggest low-impact commuting alternatives.",
    stack: ["Carbon Modeling", "Optimization", "Data Analysis"],
    github: "https://github.com/Shriyanka-Reddy/Entity-Accurate-Clinical-Text-Summarization-with-Hallucination-Mitigation", // add later
  },

  {
    year: "2024",
    title: "Multi-Step Regression & Classification for Employee Attrition",
    description:
      "Developed machine learning models to predict employee attrition probability and estimate salary using regression techniques, incorporating feature engineering and performance evaluation metrics. Simulated expected salary loss through probability-weighted modeling to support data-driven HR decision-making.",
    stack: ["Scikit-learn", "Logistic Regression", "Feature Engineering"],
    github: "https://github.com/Shriyanka-Reddy/Entity-Accurate-Clinical-Text-Summarization-with-Hallucination-Mitigation", // add later
  },
{
  year: "2024",
  title: "Entity-Accurate Clinical Text Summarization with Hallucination Mitigation",
  description:
    "Developed a clinical text summarization framework focused on minimizing factual hallucinations by integrating entity-aware processing. Leveraged named entity recognition to preserve critical medical information such as diseases, drugs, and procedures, ensuring high factual consistency and reliability in generated summaries.",
  stack: ["BERT (NER)", "T5", "Medical NLP", "Entity Alignment"],
  github: "https://github.com/Shriyanka-Reddy/Entity-Accurate-Clinical-Text-Summarization-with-Hallucination-Mitigation", // add your repo link later
}
  ];

  return (
    <main className="section">
      <div className="container">
        <p className="section-label">PROJECTS</p>
        

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;