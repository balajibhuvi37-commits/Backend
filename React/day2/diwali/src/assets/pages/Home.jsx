
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [welcome, setWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setWelcome(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="home-page">

      {welcome && (
        <div
          className="welcome-overlay"
          onClick={() => setWelcome(false)}
        >
          <div className="firework firework-one"></div>
          <div className="firework firework-two"></div>
          <div className="firework firework-three"></div>

          <div className="welcome-content">
            <h1>🪔 Happy Diwali 🎆</h1>
            <p>Welcome to My Diwali Memories</p>

            <button
              className="gold-button"
              onClick={() => setWelcome(false)}
            >
              Enter Celebration
            </button>

            <small>Tap anywhere to continue</small>
          </div>
        </div>
      )}

      <section className="hero-section">
        <p className="eyebrow">LIGHT • LOVE • MEMORIES</p>

        <h1>
          Happy <span>Diwali</span>
        </h1>

        <h2>Welcome to My Diwali Memories</h2>

        <p className="hero-copy">
          Diwali is a festival of lights, happiness
          and beautiful moments.

          This year, I celebrated Diwali with my
          family and friends. I enjoyed every moment
          and created unforgettable memories.
        </p>

        <div className="hero-actions">
          <Link to="/gallery" className="gold-button">
            Explore My Memories
          </Link>

          <Link to="/about" className="outline-button">
            About Diwali
          </Link>
        </div>

        <div className="hero-decor">✦ 🪔 ✦</div>
      </section>
    </main>
  );
}

export default Home;
