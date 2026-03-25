import { cn } from "@/lib/utils";

interface VerveRuleProps {
  variant?: "flush" | "fade" | "center-fade" | "ornament";
  className?: string;
  ornamentChar?: string;
  children?: React.ReactNode;
}

const VerveRule = ({
  variant = "flush",
  className,
  ornamentChar = "◆",
  children,
}: VerveRuleProps) => {
  if (variant === "ornament") {
    return (
      <div className={cn("verve-ornament text-xs", className)}>
        {children ?? ornamentChar}
      </div>
    );
  }

  if (variant === "center-fade" || variant === "fade") {
    return <span className={cn("verve-rule-center", className)} />;
  }

  return <span className={cn("verve-rule", className)} />;
};

export default VerveRule;
