import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const variantStyles = {
  primary: "bg-slate-900 text-white hover:bg-slate-700 border border-transparent",
  secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",
  outline: "bg-transparent text-slate-900 border border-slate-200 hover:bg-slate-50",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

/**
 * Button component for actions and form controls.
 * @param {{variant?: string, size?: string, disabled?: boolean, type?: string, className?: string, children: import('react').ReactNode, onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void}} props
 */
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  className,
  children,
  onClick,
  ...props
}) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2",
        variantStyles[variant] || variantStyles.primary,
        sizeStyles[size] || sizeStyles.md,
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
