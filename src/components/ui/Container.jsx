import { cn } from "../../utils/cn";

/**
 * Container provides page-level horizontal padding and responsive centering.
 * @param {{children: import('react').ReactNode, className?: string}} props
 */
function Container({ children, className }) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
