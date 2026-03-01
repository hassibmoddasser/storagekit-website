import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Storage Kit browser extension.",
};

export default function PrivacyPage() {
  return (
    <>
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-3xl items-center px-6">
          <Link
            href="/"
            className="flex items-center gap-1 text-lg font-bold tracking-tight"
          >
            <span>Storage</span>
            <span className="text-accent">Kit</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: March 1, 2026
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Overview
            </h2>
            <p>
              Storage Kit is a browser extension designed for debugging web
              storage. We are committed to protecting your privacy. This policy
              explains what data the extension accesses and how it is handled.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Data Collection
            </h2>
            <p>
              <strong className="text-foreground">
                Storage Kit does not collect, transmit, or store any personal
                data.
              </strong>{" "}
              The extension does not include analytics, tracking scripts, or any
              mechanism for sending data to external servers.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Data Access
            </h2>
            <p>
              To function, Storage Kit accesses the following browser storage
              types on the active tab:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>Local storage</li>
              <li>Session storage</li>
              <li>Cookies</li>
            </ul>
            <p className="mt-3">
              This data is only accessed locally within your browser. It is
              never sent to any external service.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Snapshots
            </h2>
            <p>
              Snapshots (saved storage states) are stored using Chrome&apos;s
              built-in extension storage API. This data remains on your device
              and is synced only if you have Chrome Sync enabled for extensions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Third-Party Services
            </h2>
            <p>
              Storage Kit does not integrate with any third-party services,
              APIs, or analytics platforms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Permissions
            </h2>
            <p>
              The extension requests only the minimum permissions required to
              function:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>
                <strong className="text-foreground">Active Tab</strong> – to
                read and write storage on the current page
              </li>
              <li>
                <strong className="text-foreground">Cookies</strong> – to
                inspect and manage cookies for the current site
              </li>
              <li>
                <strong className="text-foreground">Storage</strong> – to
                persist your snapshots across browser sessions
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Changes to This Policy
            </h2>
            <p>
              If this privacy policy is updated, the changes will be reflected
              on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Contact
            </h2>
            <p>
              If you have questions about this privacy policy, please open an
              issue on the project&apos;s GitHub repository.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
