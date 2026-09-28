import { cn } from "@/lib/utils4";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 md:auto-rows-[18rem] gap-4 bg-black p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    <div
      className={cn(
        "group/bento flex flex-col justify-between space-y-4 rounded-xl border border-neutral-800 bg-neutral-900 p-5 transition duration-300 hover:shadow-2xl hover:shadow-neutral-900",
        className
      )}
    >
      {header}

      <div className="transition duration-300 group-hover/bento:translate-x-2">
        
        {/* Icon */}
        <div className="text-neutral-400">{icon}</div>

        {/* Title */}
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-200 text-lg">
          {title}
        </div>

        {/* Description */}
        <div className="font-sans text-sm text-neutral-400 leading-relaxed">
          {description}
        </div>

      </div>
    </div>
  );
};