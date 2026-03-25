import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  gold?: boolean;
}

const SectionLabel = ({ children, className, gold = true }: SectionLabelProps) => (
  <p
    className={cn(
      "label-caps",
      gold ? "text-primary/70" : "text-muted-foreground",
      className
    )}
  >
    {children}
  </p>
);

export default SectionLabel;
