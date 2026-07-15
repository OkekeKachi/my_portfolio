import { cn } from "../../utils/cn";

/**
 * Section wraps content with standard vertical spacing.
 * @param {{children: import('react').ReactNode, id?: string, className?: string}} props
 */
function Section({ children, id, className }) {
  return (
    <section
      id={id}
      className={cn("border-t border-slate-800/80 py-20 sm:py-24", className)}
    >
      {children}
    </section>
  );
}

export default Section;
