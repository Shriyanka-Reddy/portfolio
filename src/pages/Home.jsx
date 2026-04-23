function Home() {
  return (
    <main>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-text">
           <p className="section-label">ARTIFICIAL INTELLIGENCE · PORTFOLIO</p>

<h2>
  Shriyanka <span>Reddy.</span>
</h2>

<p className="hero-para">
  B.Tech student in Artificial Intelligence at Mahindra University.
</p>

<p className="hero-para hero-subtext">
  Interested in natural language processing, speech technologies,
  and applied machine learning.
</p>

            <div className="hero-buttons">
              <a href="#/projects" className="primary-btn">
                View Projects
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="secondary-btn">
                View Resume
              </a>
            </div>
          </div>

          <div className="hero-image-box">
            <img src="/Profile.jpg" alt="Shriyanka Reddy" className="profile-image" />
          </div>
        </div>
      </section>

      <section className="section border-top">
        <div className="container two-col">
          <div>
            <p className="section-label">§ 01 · ABOUT</p>
            <h3>A short biography.</h3>
          </div>
          <div>
            <p>
             I am a third-year B.Tech student in Artificial Intelligence at Mahindra University, with a strong interest in building practical AI systems. My work focuses on multilingual speech processing, natural language processing, and applied machine learning. I enjoy developing end-to-end solutions that bridge the gap between research and real-world applications, particularly in accessibility and cross-lingual communication.
            </p>
            
          </div>
        </div>
      </section>

      <section className="section border-top">
        <div className="container two-col">
          <div>
            <p className="section-label">§ 02 · RESEARCH</p>
            <h3>Areas of interest.</h3>
          </div>
          <div className="interest-list">
  <div className="interest-item">01  Machine Learning & Applied AI Systems</div>
  <div className="interest-item">02  Natural Language Processing</div>
  <div className="interest-item">03  Multimodal & Cross-Lingual AI</div>
  <div className="interest-item">04  Computer Vision & Perception Systems</div>
</div>
        </div>
      </section>

      <section className="section border-top">
        <div className="container two-col">
          <div>
            <p className="section-label">§ 03 · SKILLS</p>
            <h3>Tools of the craft.</h3>
          </div>
          <div className="skills-wrap">
            {[
              "Python",
              "React",
              "JavaScript",
              "Node.js",
              "PostgreSQL",
              "MySQL",
              "Mathlab",
              "REST APIs",
            ].map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-top">
        <div className="container two-col">
          <div>
            <p className="section-label">§ 04 · RESUME</p>
            <h3>A closer look at my work.</h3>
          </div>

          <div>
            <p>
              For a more detailed overview of my academic background, technical
              skills, projects, and experience, you can view my resume below.
            </p>

            <div className="hero-buttons top-space">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                View Resume
              </a>

              <a href="/resume.pdf" download className="secondary-btn">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container two-col contact-grid">
          <div>
            <p className="section-label light-label">§ 05 · DETAILS</p>
            <h3 className="contact-title">
              Let&apos;s start a <span>conversation.</span>
            </h3>
          </div>

          <div className="details-grid">
            <div>
              <p className="detail-label">Name</p>
              <p>Shriyanka Reddy</p>
            </div>

            <div>
              <p className="detail-label">Phone</p>
              <p>+91 95151 15461</p>
            </div>

            <div>
              <p className="detail-label">Personal Email</p>
              <p>shriyankareddy21@gmail.com</p>
            </div>

            <div>
              <p className="detail-label">College Email</p>
              <p>se23uari064@mahindrauniversity.edu.in</p>
            </div>

            <div>
              <p className="detail-label">GitHub</p>
              <p>github.com/Shriyanka-Reddy</p>
            </div>

            <div>
              <p className="detail-label">LinkedIn</p>
              <p>linkedin.com/in/shriyankareddy</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;