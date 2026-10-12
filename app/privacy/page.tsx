import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the StorageKit extension and storagekit.dev handle your data. Everything the extension reads stays on your device.",
};

export default function PrivacyPage() {
  return (
    <>
      <main id="main" className="mx-auto max-w-3xl px-6 pt-32 pb-16">
        <article className="prose prose-base prose-zinc dark:prose-invert max-w-none">
          <h1 className="mb-0">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Last updated: October 12, 2026
          </p>

          <h2>Overview</h2>
          <p>
            StorageKit is a browser extension for inspecting and editing web
            storage. This policy covers the extension and this website,
            storagekit.dev. In short, the extension works entirely on your
            device. It has no analytics, no tracking, and no account, and it
            never sends what it reads anywhere.
          </p>

          <h2>What the Extension Reads</h2>
          <p>
            While StorageKit is open, it reads the following for the site in
            your current tab:
          </p>
          <ul>
            <li>Local storage and session storage</li>
            <li>Cookies</li>
            <li>The page address, to show which site you&apos;re on</li>
            <li>The site&apos;s icon, from the browser&apos;s local cache</li>
          </ul>
          <p>
            These values can include sensitive data, such as login cookies and
            access tokens. StorageKit reads them only to show them to you, and
            changes them only when you edit, add, delete, clear, or restore
            something.
          </p>

          <h2>What the Extension Stores</h2>
          <p>
            Snapshots you capture (the saved values, the site they came from, a
            name, and the date) and your preferences (theme, list filter, sort
            order, and snapshot view) are saved in the extension&apos;s own
            storage on your device. They are not synced to other devices or sent
            to any server, and uninstalling StorageKit deletes them.
          </p>
          <p>
            Exporting snapshots saves a JSON file where you choose, and
            importing reads a file you pick. Exported files contain the saved
            values, which may include login cookies and tokens, so keep them
            private.
          </p>

          <h2>What the Extension Sends</h2>
          <p>
            <strong>Nothing.</strong> The extension doesn&apos;t send any data
            to us or to anyone else. Its fonts and icons ship with it, and site
            icons come from the browser&apos;s local cache.
          </p>
          <p>
            It opens pages on this website in two cases: a welcome page after
            you install it, and the release notes after it updates, with the new
            version number in the address. Links in its menu, such as Leave a
            review and Report an issue, open only when you click them. These are
            regular website visits, covered below.
          </p>

          <h2>Permissions</h2>
          <ul>
            <li>
              <strong>Cookies</strong>: to read, add, edit, and delete the
              current site&apos;s cookies
            </li>
            <li>
              <strong>Access to websites</strong>: to read and edit local and
              session storage on the site you&apos;re inspecting. Its page
              script stays idle until StorageKit asks it for something
            </li>
            <li>
              <strong>Active tab</strong>: to access the tab you&apos;re on when
              you click the StorageKit icon
            </li>
            <li>
              <strong>Side panel</strong>: to open StorageKit in the
              browser&apos;s side panel
            </li>
            <li>
              <strong>Favicon</strong>: to show site icons from the
              browser&apos;s local cache
            </li>
          </ul>
          <p>
            At install, Chrome sums these up as one warning: &ldquo;Read and
            change all your data on all websites.&rdquo; StorageKit only reads
            and changes storage for the tab you&apos;re looking at while
            it&apos;s open.
          </p>

          <h2>Limited Use</h2>
          <p>
            StorageKit&apos;s use of information complies with the Chrome Web
            Store User Data Policy, including the Limited Use requirements. It
            uses data only to provide the features described above. We never
            sell it, use it for advertising, transfer it, or read it.
          </p>

          <h2>This Website</h2>
          <p>
            storagekit.dev uses Google Analytics to count visits and see which
            pages are read. Google Analytics sets cookies and receives standard
            details about each visit, such as the pages you view, the site that
            referred you, your browser and device type, and your approximate
            location. The website has no accounts and no forms. You can block
            Google Analytics with your browser&apos;s privacy settings or a
            content blocker. Google handles that data under its own{" "}
            <a href="https://policies.google.com/privacy">privacy policy</a>.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            If this privacy policy is updated, the changes will be reflected on
            this page with an updated date.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this privacy policy, email{" "}
            <a href={siteConfig.links.contact}>info@hassib.co</a>.
          </p>
        </article>
      </main>
    </>
  );
}
