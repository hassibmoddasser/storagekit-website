import { cn } from "@/utils/cn";
import { Lock } from "lucide-react";

interface BrowserFrameProps {
  url?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
  showDevTools?: boolean;
}

export default function BrowserFrame({
  url = "storagekit.dev",
  className,
  innerClassName,
  children,
  showDevTools,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "border-border bg-window-chrome relative overflow-hidden rounded-xl border shadow-2xl shadow-black/10 dark:shadow-black/40",
        className,
      )}
    >
      <div className="border-border/70 flex items-center gap-3 border-b px-3 py-2">
        <div className="window-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="bg-background/60 text-muted-foreground mx-auto flex h-6 max-w-md min-w-0 flex-1 items-center gap-1.5 rounded-md px-2.5 text-[11px] font-medium">
          <Lock size={10} className="shrink-0" />
          <span className="font-mono truncate">{url}</span>
        </div>
        {showDevTools && (
          <span className="text-syntax-comment hidden text-[10px] font-mono tracking-wider uppercase sm:inline">
            DevTools
          </span>
        )}
      </div>
      <div className={cn("bg-surface relative", innerClassName)}>{children}</div>
    </div>
  );
}
