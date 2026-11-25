
function Home() {
  return (
    <main className="hero-section fireworks-bg">

      {/* Fireworks animation */}
      <span className="firework firework-one"></span>
      <span className="firework firework-two"></span>
      <span className="firework firework-three"></span>

      <p className="eyebrow">THE FESTIVAL OF LIGHTS</p>

      <h1>
        Happy <span>Diwali</span> 🪔
      </h1>

      <h2>Welcome to My Diwali Memories</h2>

      <p className="hero-copy">
        Diwali is a festival of lights, happiness and beautiful moments.
        This year, I celebrated Diwali with my family and friends.
        Every moment became a beautiful memory.
      </p>

      <div className="hero-actions">
        <a href="/gallery" className="gold-button">
          Explore My Memories
        </a>

        <a href="/about" className="outline-button">
          About Diwali
        </a>
      </div>

      <div className="hero-decor">
        ✨ 🪔 🎆 🪔 ✨
      </div>

    </main>
  );
}

export default Home;
