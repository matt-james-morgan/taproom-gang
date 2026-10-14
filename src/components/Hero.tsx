const Hero = () => (
  // Phones: sits below the fixed header at the photo's own 16:9 shape, so there are no empty bands.
  // Larger screens: full-bleed behind the header with a 60vh minimum, as before.
  <section id="home" className="w-full bg-background pt-16 md:pt-0">
    <div className="relative w-full aspect-video md:min-h-[60vh]">

      {/* Full-bleed background photo — already has band name baked in */}
      <img
        src="/images/taproom/horizontal-branded.jpg"
        alt="The Tap Room Gang, Toronto traditional jazz quartet"
        className="absolute inset-0 w-full h-full object-contain object-center"
        fetchPriority="high"
      />

      {/* Subtle dark vignette so bottom text reads cleanly */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
    </div>

    {/* Hidden h1 for SEO/accessibility */}
    <h1 className="sr-only">The Tap Room Gang</h1>
  </section>
);

export default Hero;
