import { cn } from "@/utils/cn";

type Variant = "primary" | "secondary";
type Size = "sm" | "md";

const base =
  "btn-shine inline-flex shrink-0 items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-colors";

/* Both variants hover by changing colour. The primary used to lift on hover
   while the secondary next to it did not, so the pair moved out of alignment. */
const variants: Record<Variant, string> = {
  primary:
    "text-accent-foreground bg-accent-fill hover:bg-accent-fill-hover shadow-lg shadow-teal-600/20 dark:shadow-teal-500/20",
  secondary:
    "border-border bg-background/40 text-foreground hover:bg-muted border backdrop-blur-sm",
};

/* The closing band is dark in both themes, so the theme tokens don't apply:
   accent-fill resolves to teal-700 there, which goes muddy on zinc-900. */
const darkVariants: Record<Variant, string> = {
  primary:
    "bg-teal-500 text-zinc-950 hover:bg-teal-400 shadow-lg shadow-teal-500/20",
  secondary: "border border-white/15 text-white hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "px-4 py-2.5 text-sm",
};

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  external?: boolean;
  /** Render for a surface that is dark regardless of theme. */
  onDark?: boolean;
}

export default function ButtonLink({
  variant = "primary",
  size = "md",
  external = false,
  onDark = false,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        base,
        (onDark ? darkVariants : variants)[variant],
        sizes[size],
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
