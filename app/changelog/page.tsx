import type { Metadata } from "next";
import Link from "next/link";
import { releases } from "./_releases/release";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "All notable changes to StorageKit: new features, improvements, and bug fixes.",
};

const versions = Object.keys(releases);
const LATEST_VERSION = versions[0];

export default async function ChangelogPage({
  searchParams,
}: {
  searchParams: Promise<{ v?: string }>;
}) {
  const { v } = await searchParams;
  const release = v ? releases[v] : null;

  if (v && release) {
    return (
      <main id="main" className="mx-auto max-w-3xl px-6 pt-32 pb-16">
        <article className="prose prose-base prose-zinc dark:prose-invert max-w-none">
          <p className="text-accent mb-0 text-sm font-semibold">
            StorageKit {v}
          </p>
          <h1 className="mt-2 mb-0">What&apos;s New: {release.tagline}</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            {v === LATEST_VERSION
              ? "You're on the latest version."
              : "A newer version may be available."}
          </p>

          <div className="mt-10">{release.content}</div>

          <hr className="border-border/50 border-t" />
          <p className="text-sm">
            <Link
              href="/changelog"
              className="text-accent hover:text-accent/80 no-underline transition-colors"
            >
              &larr; View full changelog
            </Link>
          </p>
        </article>
      </main>
    );
  }

  return (
    <main id="main" className="mx-auto max-w-3xl px-6 pt-32 pb-16">
      <article className="prose prose-base prose-zinc dark:prose-invert max-w-none">
        <h1 className="mb-0">Changelog</h1>
        <p className="text-muted-foreground mt-2 text-base">
          All notable changes to StorageKit are documented here.
        </p>

        <div className="mt-12 space-y-16">
          {versions.map((version) => (
            <section key={version} id={`v${version}`}>
              <h2 className="mt-0! scroll-mt-24">{version}</h2>
              {releases[version].content}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
