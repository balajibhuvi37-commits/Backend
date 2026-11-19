
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="content-page about-page">
      <p className="eyebrow">THE FESTIVAL OF LIGHTS</p>

      <h1>About <span>Diwali</span></h1>

      <section className="about-card">
        <div className="about-symbol">🪔</div>

        <div>
          <h2>A Celebration of Light and Hope</h2>

          <p>
            Diwali, also known as Deepavali, is one of
            India's most celebrated festivals.
          </p>

          <p>
            People decorate their homes with lamps,
            share sweets, wear new clothes and celebrate
            with family and friends.
          </p>

          <p>
            Diwali reminds us of the victory of light
            over darkness and good over evil. It is a
            time for happiness, kindness and new beginnings.
          </p>

          <Link to="/gallery" className="gold-button">
            Explore Memories
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
