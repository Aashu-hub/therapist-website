export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a href="#" className="logo">
          Maya Reynolds, PsyD
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Connect
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">THERAPY IN SANTA MONICA, CA</p>

          <h1>Find your way toward a more balanced life.</h1>

          <p className="hero-description">
            You may look like you're handling everything, yet inside feel
            anxious, overwhelmed, or emotionally exhausted. Therapy offers a
            supportive space to begin finding your way forward.
          </p>

          <a href="#contact" className="primary-button">
            Schedule a Free Consultation
          </a>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
            alt="Warm, welcoming living space"
          />
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-label">A SPACE TO FEEL UNDERSTOOD</div>

        <h2>You don’t have to figure everything out on your own.</h2>

        <p>
          When life feels overwhelming, finding time to understand your thoughts
          and emotions can be difficult. Therapy offers a supportive space to
          pause, reflect, and explore what you need to move forward.
        </p>

        <a href="#services" className="text-link">
          Explore how therapy can help →
        </a>

        <img
          src="/images/office/dr-maya.jpeg"
          alt="Dr. Maya Reynolds, fictional therapist profile"
          className="therapist-portrait"
        />
      </section>

      <section className="services-section" id="services">
        <p className="about-label">HOW I CAN HELP</p>

        <h2>Support for where you are in life.</h2>

        <p className="services-intro">
          Therapy can help you better understand what you are experiencing and
          find a path forward that feels right for you.
        </p>

        <div className="services-grid">
          <article className="service-card">
            <h3>Anxiety & Stress</h3>
            <p>
              Explore overwhelming thoughts, manage stress, and build healthier
              ways to respond to life's challenges.
            </p>
          </article>

          <article className="service-card">
            <h3>Trauma & Healing</h3>
            <p>
              Work toward feeling safer, understanding difficult experiences,
              and moving forward at your own pace.
            </p>
          </article>

          <article className="service-card">
            <h3>Burnout & Perfectionism</h3>
            <p>
              Make space for your own needs, understand unhelpful patterns, and
              create a more balanced daily life.
            </p>
          </article>
        </div>
      </section>

      <section className="approach-section" id="approach">
        <div className="approach-content">
          <p className="about-label">MY APPROACH</p>

          <h2>Therapy that meets you with understanding and care.</h2>

          <p>
            My approach is warm, collaborative, and grounded. I combine
            practical tools with space for reflection, helping you understand
            both the emotional and physical effects of stress and difficult
            experiences.
          </p>

          <p>
            Using approaches such as CBT, EMDR, mindfulness, and body-oriented
            techniques, we can work together at a pace that feels supportive and
            comfortable for you.
          </p>

          <a href="#contact" className="primary-button">
            Let's Connect
          </a>
        </div>
      </section>

      <section className="office-section" id="office">
        <div className="office-content">
          <p className="about-label">OUR OFFICE</p>

          <h2>A calm space to pause and feel at ease.</h2>

          <p>
            My office is a quiet, private space with natural light and a
            comfortable, uncluttered environment. It is designed to help you
            feel grounded and supported during your therapy sessions.
          </p>

          <div className="office-details">
            <h3>Visit My Santa Monica Office</h3>
            <p>123th Street 45 W</p>
            <p>Santa Monica, CA 90401</p>
            <p>In-person sessions and secure telehealth across California.</p>
          </div>

          <a href="#contact" className="primary-button">
            Schedule a Free 15-Minute Consultation
          </a>
        </div>

        <div className="office-images">
          <img
            src="/images/office/therapy-room.jpeg"
            alt="Therapy room at Dr. Maya Reynolds's office"
          />
          <img
            src="/images/office/reading-room.jpeg"
            alt="Comfortable reading and seating area"
          />
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="about-label">TAKE THE FIRST STEP</p>

        <h2>You don't have to navigate everything alone.</h2>

        <p>
          Starting therapy can feel like a big step. A free 15-minute
          consultation is an opportunity to ask questions, share what you're
          looking for, and see whether working together feels right.
        </p>

        <a href="mailto:hello@mayareynolds.com" className="primary-button">
          Request a Consultation
        </a>

        <p className="contact-note">
          In-person sessions in Santa Monica and secure telehealth throughout
          California.
        </p>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <div>
            <h3>Dr. Maya Reynolds, PsyD</h3>
            <p>Compassionate therapy for a more balanced life.</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <p className="footer-location">Santa Monica, California</p>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Dr. Maya Reynolds. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
