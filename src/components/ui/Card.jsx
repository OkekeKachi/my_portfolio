import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

/**
 * Card adds a bordered, rounded surface with optional padding.
 * @param {{children: import('react').ReactNode, padded?: boolean, className?: string}} props
 */
function Card({ children, padded = true, className, ...props }) {
  return (
    <motion.div
      whileHover={{ y: -2, boxShadow: "0 18px 44px -26px rgba(15,23,42,0.16)" }}
      whileTap={{ scale: 0.995 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm transition-all duration-300 ease-out",
        padded ? "p-6" : "p-0",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Card;
