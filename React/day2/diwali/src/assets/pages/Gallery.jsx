
const memories = [
  {
    type: "video",
    src: "/media/car-ride.mp4",
    title: "The Car Ride",
    tag: "Moment 01",
    text: "A beautiful journey with friends. Every little moment became a memory worth keeping."
  },
  {
    type: "video",
    src: "/media/friends-in-car.mp4",
    title: "Friends on the Way",
    tag: "Moment 02",
    text: "Our celebration started with a fun car ride. Music, laughter and friends made the journey special."
  },
  {
    type: "image",
    src: "/media/beach-memory.jpeg",
    title: "Beach Memories",
    tag: "Moment 03",
    text: "We reached the beach, enjoyed the ocean view and spent some peaceful time together."
  },
  {
    type: "video",
    src: "/media/crackers-night.mp4",
    title: "Crackers Night",
    tag: "Moment 04",
    speed: 1.5,
    text: "The night became brighter with fireworks and celebrations. One of the most exciting moments of our Diwali."
  },
  {
    type: "video",
    src: "/media/cinematic-fun.mp4",
    title: "Cinematic Fun",
    tag: "Moment 05",
    speed: 1.5,
    text: "We visited the festival and enjoyed the colourful giant wheel and beautiful lights with our friends."
  },
  {
    type: "image",
    src: "/media/festival-friends.jpeg",
    title: "Festival Vibes",
    tag: "Moment 06",
    text: "A fun cinematic-style shooting scene with friends. Just for entertainment and unforgettable memories."
  }
];

function MemoryCard({ item, index }) {
  return (
    <article className={`memory-card ${index % 2 ? "reverse" : ""}`}>

      <div className="memory-media">

        {item.type === "video" ? (
          <video
            src={item.src}
            controls
            playsInline
            preload="metadata"
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = item.speed || 1;
            }}
          />
        ) : (
          <img src={item.src} alt={item.title} />
        )}

        {item.speed && (
          <span className="speed-label">
            {item.speed}x Speed
          </span>
        )}

      </div>

      <div className="memory-copy">
        <p className="eyebrow">{item.tag}</p>

        <h2>{item.title}</h2>

        <p>{item.text}</p>

        <span className="memory-number">
          MEMORY / {String(index + 1).padStart(2, "0")}
        </span>
      </div>

    </article>
  );
}

function Gallery() {
  return (
    <main className="content-page gallery-page">

      <div className="gallery-heading">
        <p className="eyebrow">LITTLE MOMENTS, BIG MEMORIES</p>

        <h1>My Diwali <span>Memories</span></h1>

        <p>
          From our first journey to the festival lights,
          every moment has a story.
        </p>
      </div>

      <div className="memory-list">
        {memories.map((item, index) => (
          <MemoryCard
            key={item.title}
            item={item}
            index={index}
          />
        ))}
      </div>

      <p className="gallery-footer">
        Made with love, laughter and friendship ❤️
      </p>

    </main>
  );
}

export default Gallery;
