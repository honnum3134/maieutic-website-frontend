import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '@/styles/global.css';

const cards = [
  {
    title: "Interactive Modules, Articulate 360",
    image: "/images/card1.png",
    desc: `
Our interactive modules transform passive learning into active engagement. Built using Articulate 360 and Adobe Captivate, they combine multimedia, quizzes, and scenario-based interactions for immersive learning.
• Ideal for microlearning journeys (5-10 min modules)
• Structured into comprehensive learning paths
• Supports assessments, simulations & progress tracking
• Best suited for compliance & role-based learning
`
  },
  {
    title: "Explainer Videos",
    image: "/images/card2.png",
    desc: `
Explainer videos simplify complex concepts into clear, engaging narratives using visuals, animation, and storytelling.

• Delivered as short, bite-sized microlearning videos for quick understanding.
• Can be combined into long-format learning series for in-depth conceptual clarity.
• Highly effective for introducing new topics, frameworks, or processes.
• Best suited for concept clarity, awareness programs, and foundational learning.
`
  },
  {
    title: "Product / Process Videos",
    image: "/images/card3.png",
    desc: `
These videos focus on demonstrating workflows, tools, or product functionalities in a structured and practical manner.

• Short microlearning clips for quick reference and on-the-job support.
• Detailed long-format walkthroughs for end-to-end understanding.
• Designed to improve operational efficiency and reduce learning curves.
• Best suited for product training, SOPs, and system/process adoption.
`
  },
  {
    title: "Scenario-Based Videos",
    image: "/images/card 4.png",
    desc: `
Scenario-based videos bring real-world situations to life, helping learners apply knowledge in context.

• Delivered as short situational clips for quick decision-making practice.
• Can evolve into long-format simulations for deeper behavioral training.
• Encourages critical thinking, problem-solving, and role readiness.
• Best suited for sales training, leadership development, and customer interaction skills.
`
  },
  {
    title: "Training and Psychometric",
    image: "/images/card5.png",
    desc: `
We conduct instructor-led training (ILT) and instructor-led virtual training (ILVT) across skill-based, technical, and behavioural domains.
We are associated with Harisson Assessment tool that measures individual traits and competencies.

• One-day virtual workshops.
• Customised leadership development programs.
`
  }
];

const videos = [
  {
    id: 2,
    title: "Enterprise Learning Demo 2",
    src: "/Videos/DJI_0024.mp4"
  }
];

export default function EnterprisePage() {
  const [currentVideoIndex] = useState(0);

  return (
    <>
      <Helmet>
        <title>Enterprise | Maieutic Edutech</title>
      </Helmet>

     <div style={{ paddingTop: 'clamp(96px, 10vw, 116px)' }}>
        <section className="enterprise-section">

          {/* HERO AREA */}

          <div className="enterprise-hero-wrapper">

            <div className="enterprise-hero">

              <img
                src="/images/enterprise-bg.jpg"
                alt="Enterprise Learning"
                className="enterprise-bg"
              />

              <div className="enterprise-overlay"></div>

              <div className="enterprise-content">

                <h1>Enterprise Learning</h1>

                <p>
                  Modern educational initiatives have evolved rapidly,
                  requiring institutions and enterprises to adopt scalable,
                  engaging, and high-impact learning experiences that truly work.
                  We create customised, high-impact digital learning programmes
                  designed to align with your business objectives and drive real
                  performance outcomes.
                </p>

                <span>
                  Because when learning works, businesses grow.
                </span>

              </div>

            </div>

            <div className="enterprise-floating-box">
              <div className="video-container">
                <video
                  key={videos[currentVideoIndex].id}
                  width="100%"
                  height="100%"
                  autoPlay
                  muted
                  loop
                  className="enterprise-video"
                >
                  <source src={videos[currentVideoIndex].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

          </div>

          {/* WHY SECTION */}

          <section className="enterprise-why-section">

            <div className="enterprise-why-left">

              <h2>
                Why Enterprise Learning Matters
              </h2>

              <p>
                Today's workforce demands learning experiences that are flexible,
                engaging, and outcome-driven. Traditional training methods often
                struggle to keep pace with rapidly changing technologies,
                evolving business environments, and modern learner expectations.
              </p>

              <p>
                Our enterprise learning solutions bridge this gap through
                immersive digital experiences that improve knowledge retention,
                accelerate skill development, and drive measurable business impact.
              </p>

            </div>

            <div className="enterprise-why-right">

              <div className="enterprise-stat-card">
                <h3>70%</h3>
                <span>
                  Higher learner engagement through interactive digital learning
                </span>
              </div>

              <div className="enterprise-stat-card">
                <h3>3X</h3>
                <span>
                  Faster knowledge delivery using microlearning experiences
                </span>
              </div>

            </div>

          </section>

          {/* APPROACH SECTION */}

          <section className="enterprise-approach-section">

            <div className="enterprise-approach-header">
              <h2>
                Our Learning Approach
              </h2>
              <p>
                We combine instructional strategy, storytelling,
                multimedia production, and learner psychology
                to create impactful learning ecosystems.
              </p>
            </div>

            <div className="enterprise-approach-grid">

              <div className="approach-box">
                <img
                  src="/images/compass.svg"
                  alt="Discover Icon"
                  width={60}
                  height={60}
                />
                <h3>Discover</h3>
                <p>
                  Understanding learner needs, business goals,
                  and training challenges.
                </p>
              </div>

              <div className="approach-box">
                <img
                  src="/images/logo-design.svg"
                  alt="Design Icon"
                  width={60}
                  height={60}
                />
                <h3>Design</h3>
                <p>
                  Creating learner-centric instructional journeys
                  with engaging experiences.
                </p>
              </div>

              <div className="approach-box">
                <img
                  src="/images/code.svg"
                  alt="Develop Icon"
                  width={60}
                  height={60}
                />
                <h3>Develop</h3>
                <p>
                  Producing interactive multimedia learning assets,
                  videos, and simulations.
                </p>
              </div>

              <div className="approach-box">
                <img
                  src="/images/timing.svg"
                  alt="Deliver Icon"
                  width={60}
                  height={60}
                />
                <h3>Deliver</h3>
                <p>
                  Deploying scalable learning solutions optimised
                  for measurable outcomes.
                </p>
              </div>

            </div>

          </section>

          {/* CARDS HEADING */}

          <div className="enterprise-cards-heading">
            <h2>
              Learning Solutions We Offer
            </h2>
            <p>
              Explore our wide range of engaging enterprise learning
              solutions designed to improve learner engagement,
              accelerate performance, and deliver measurable impact.
            </p>
          </div>

          {/* CARDS AREA */}

          <div className="enterprise-cards-area">
            <div className="enterprise-cards-grid">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`enterprise-card enterprise-card-${index + 1}`}
                >
                  <div className="enterprise-card-inner">

                    {/* FRONT */}
                    <div className="enterprise-card-front">
                      <h3>{card.title}</h3>
                      <div className="enterprise-image">
                        <img
                          src={card.image}
                          alt={card.title}
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>

                    {/* BACK */}
                    <div className="enterprise-card-back">
                      <p style={{ whiteSpace: "pre-line" }}>
                        {card.desc}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
      </div>
    </>
  );
}
