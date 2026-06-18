
const Hero = () => (
  <section id="home" className="relative w-full bg-background" style={{ aspectRatio: "16/9", minHeight: "60vh" }}>

    {/* Full-bleed background photo — already has band name baked in */}
    <img
      src="/images/taproom/horizontal-branded.jpg"
      alt="The Tap Room Gang"
      className="absolute inset-0 w-full h-full object-contain object-center"
    />

    {/* Subtle dark vignette so bottom text reads cleanly */}
    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

    {/* Hidden h1 for SEO/accessibility */}
    <h1 className="sr-only">The Tap Room Gang</h1>


  </section>
);

export default Hero;
