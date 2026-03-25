import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="min-h-screen bg-background flex flex-col items-center justify-center px-8 text-center">
    <p className="label-caps text-primary/70 mb-4">404</p>
    <h1 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">Page Not Found</h1>
    <p className="text-foreground/50 font-light mb-10">
      The page you're looking for doesn't exist.
    </p>
    <Link
      to="/"
      className="label-caps text-foreground/60 hover:text-primary transition-colors border-b border-foreground/20 hover:border-primary pb-0.5"
    >
      Back to Home
    </Link>
  </main>
);

export default NotFound;
