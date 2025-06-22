import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <h1 className="about-title">About Our AI Resume Builder</h1>
          
          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Smart Resume Creation</h3>
              <p>Our AI analyzes thousands of successful resumes to help you create a professional document that stands out to recruiters.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>ATS Optimization</h3>
              <p>We ensure your resume passes through Applicant Tracking Systems with proper formatting and keyword optimization.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Custom Design Templates</h3>
              <p>Choose from multiple professionally designed templates tailored to different industries and experience levels.</p>
            </div>
          </div>
          
          <div className="about-story">
            <h2>Our Story</h2>
            <p>Founded in 2025, our mission is to democratize career opportunities by providing everyone with access to professional resume-building tools. We combine artificial intelligence with human resources expertise to create resumes that get results.</p>
            
            <h2>Why Choose Us?</h2>
            <ul className="benefits-list">
              <li>AI-powered suggestions for content improvement</li>
              <li>Real-time feedback on resume strength</li>
              <li>Industry-specific recommendations</li>
              <li>Continuous updates based on hiring trends</li>
              <li>Free basic version with premium upgrades</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;