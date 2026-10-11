import { cn } from "@/utils/cn";
import Image, { type StaticImageData } from "next/image";

export interface ThemedSrc {
  light: StaticImageData;
  dark: StaticImageData;
}

/* Both captures are in the markup and the theme class picks one, so the right
   screenshot is there on first paint without waiting for JavaScript. */
export default function ThemedScreenshot({
  src,
  alt,
  sizes,
  priority,
  className,
}: {
  src: ThemedSrc;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <>
      <Image
        src={src.light}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover dark:hidden", className)}
      />
      <Image
        src={src.dark}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("hidden object-cover dark:block", className)}
      />
    </>
  );
}
