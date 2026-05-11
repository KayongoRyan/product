import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
  itemClassName?: string;
  fast?: boolean;
  separator?: React.ReactNode;
}

export function Marquee({ items, className, itemClassName, fast, separator }: MarqueeProps) {
  const content = (
    <div className={cn("marquee-track", fast && "")}>
      {items.concat(items).map((it, i) => (
        <span key={i} className={cn("flex items-center gap-10", itemClassName)}>
          {it}
          {separator ?? (
            <span aria-hidden className="opacity-60">
              ✦
            </span>
          )}
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("marquee", fast && "marquee-fast", className)}>
      {content}
      <div className={cn("marquee-track", fast && "")} aria-hidden>
        {items.concat(items).map((it, i) => (
          <span key={`b-${i}`} className={cn("flex items-center gap-10", itemClassName)}>
            {it}
            {separator ?? (
              <span aria-hidden className="opacity-60">
                ✦
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
