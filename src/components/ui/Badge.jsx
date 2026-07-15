import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const badgeVariantStyles = {
  default: "bg-slate-100 text-slate-900 border border-slate-200",
  primary: "bg-slate-900 text-white border border-transparent",
  outline: "bg-transparent text-slate-900 border border-slate-200",
};

/**
 * Badge renders a small label or pill-style indicator.
 * @param {{children: import('react').ReactNode, variant?: string, className?: string}} props
 */
function Badge({ children, variant = "default", className }) {
  return (
    <motion.span
      whileHover={{ y: -1, scale: 1.02 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors duration-200",
        badgeVariantStyles[variant] || badgeVariantStyles.default,
        className
      )}
    >
      {children}
    </motion.span>
  );
}

export default Badge;
