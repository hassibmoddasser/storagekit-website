import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the StorageKit browser extension.",
};

export default function PrivacyPage() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-16">
        <article className="prose prose-base prose-zinc dark:prose-invert max-w-none">
          <h1 className="mb-0">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Last updated: March 1, 2026
          </p>

          <h2>Overview</h2>
          <p>
            StorageKit is a browser extension designed for debugging web
            storage. We are committed to protecting your privacy. This policy
            explains what data the extension accesses and how it is handled.
          </p>

          <h2>Data Collection</h2>
          <p>
            <strong>
              StorageKit does not collect, transmit, or store any personal data.
            </strong>{" "}
            The extension does not include analytics, tracking scripts, or any
            mechanism for sending data to external servers.
          </p>

          <h2>Data Access</h2>
          <p>
            To function, StorageKit accesses the following browser storage types
            on the active tab:
          </p>
          <ul>
            <li>Local storage</li>
            <li>Session storage</li>
            <li>Cookies</li>
          </ul>
          <p>
            This data is only accessed locally within your browser. It is never
            sent to any external service.
          </p>

          <h2>Snapshots</h2>
          <p>
            Snapshots (saved storage states) are stored using Chrome&apos;s
            built-in extension storage API. This data remains on your device and
            is synced only if you have Chrome Sync enabled for extensions.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            StorageKit does not integrate with any third-party services, APIs,
            or analytics platforms.
          </p>

          <h2>Permissions</h2>
          <p>
            The extension requests only the minimum permissions required to
            function:
          </p>
          <ul>
            <li>
              <strong>Active Tab</strong>: to read and write storage on the
              current page
            </li>
            <li>
              <strong>Cookies</strong>: to inspect and manage cookies for the
              current site
            </li>
            <li>
              <strong>Storage</strong>: to persist your snapshots across browser
              sessions
            </li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            If this privacy policy is updated, the changes will be reflected on
            this page with an updated date.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this privacy policy, please open an
            issue on the project&apos;s GitHub repository.
          </p>
        </article>
      </main>
    </>
  );
}
