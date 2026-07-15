import { cn } from "../../utils/cn";

/**
 * SectionHeading displays a title area with optional eyebrow and description.
 * @param {{eyebrow?: string, title: string, description?: string, align?: "center" | "left", className?: string, eyebrowClassName?: string, titleClassName?: string, descriptionClassName?: string}} props
 */
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}) {
  const alignmentClass = align === "left" ? "text-left" : "text-center";

  return (
    <div className={cn("mx-auto max-w-3xl", alignmentClass, className)}>
      {eyebrow ? (
        <p className={cn("mb-3 text-lg font-semibold uppercase tracking-[0.24em] text-slate-500", eyebrowClassName)}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl", titleClassName)}>
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-base leading-7 text-slate-600", descriptionClassName)}>{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
