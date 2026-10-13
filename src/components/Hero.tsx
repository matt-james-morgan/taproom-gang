
const HERO_SRC = "/images/taproom/horizontal-branded.jpg";

const Hero = () => (
  // Never taller than the viewport; matches the photo's 16:9 when width allows
  <section
    id="home"
    className="relative w-full overflow-hidden bg-background"
    style={{ height: "min(100svh, max(56.25vw, 60vh))" }}
  >

    {/* Blurred fill for any letterboxing when the screen is wider/taller than 16:9 */}
    <img
      src={HERO_SRC}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-60"
    />

    {/* Full photo — already has band name baked in, so never crop it */}
    <img
      src={HERO_SRC}
      alt="The Tap Room Gang, Toronto traditional jazz quartet"
      className="absolute inset-0 w-full h-full object-contain object-center"
      fetchPriority="high"
    />

    {/* Subtle dark vignette so bottom text reads cleanly */}
    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

    {/* Hidden h1 for SEO/accessibility */}
    <h1 className="sr-only">The Tap Room Gang</h1>


  </section>
);

export default Hero;
