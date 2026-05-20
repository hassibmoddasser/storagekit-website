"use client";

import { cn } from "@/utils/cn";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const themes = [
  { value: "light", icon: Sun, label: "Light" },
  { value: "dark", icon: Moon, label: "Dark" },
  { value: "system", icon: Monitor, label: "System" },
] as const;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mount guard is required to avoid hydration mismatch with next-themes,
    // since the initial theme is only known on the client.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="border-border flex items-center gap-0.5 rounded-full border p-1">
        {themes.map(({ value, icon: Icon }) => (
          <span key={value} className="rounded-full p-1.5">
            <Icon size={14} className="text-muted-foreground" />
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="border-border flex items-center gap-0.5 rounded-full border p-1">
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          aria-label={`Switch to ${label} theme`}
          className={cn(
            "cursor-pointer rounded-full p-1.5 transition-colors",
            theme === value
              ? "bg-muted text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Icon size={14} />
        </button>
      ))}
    </div>
  );
}
