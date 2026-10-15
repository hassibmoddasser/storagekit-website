import HeroBrowser from "@/components/hero-browser";

export const releases: Record<
  string,
  { tagline: string; content: React.ReactNode }
> = {
  "3.0.0": {
    tagline: "A ground-up redesign that docks beside your page",
    content: (
      <>
        <p>
          StorageKit 3 is a ground-up redesign. One focused panel replaces the
          compact and dashboard layouts, and it opens from the toolbar or docks
          in the side panel beside your page. Your snapshots and theme carry
          over.
        </p>

        <div className="not-prose my-8">
          <HeroBrowser />
        </div>

        <h3>Side Panel</h3>
        <ul>
          <li>
            <strong>Dock it beside your page:</strong> choose{" "}
            <samp>Open in side panel</samp> from the popup header, and
            StorageKit stays open while you work
          </li>
          <li>
            <strong>Follows your tabs:</strong> switching tabs or loading a page
            refreshes the panel, and the header shows when it last synced
          </li>
        </ul>

        <h3>Storage List</h3>
        <ul>
          <li>
            <strong>All three storages in one list:</strong> grouped, with an
            item count and size for each group
          </li>
          <li>
            <strong>Search everything:</strong> one search across the keys and
            values of all three storages. Press <kbd>/</kbd> to jump to it
          </li>
          <li>
            <strong>Filter and sort:</strong> All, Local, Session, and Cookies
            chips with match counts, and sorting by page order, name, or size.
            Both are remembered
          </li>
          <li>
            <strong>Smart previews:</strong> a type icon on every row. Booleans
            toggle in place, JWTs show their time left, JSON shows its key
            count, timestamps show relative time, and Base64 and URL-encoded
            values show decoded
          </li>
          <li>
            <strong>Group actions:</strong> add an item, copy a whole storage as
            JSON, or clear it from its group header
          </li>
          <li>
            <strong>Quicker adding:</strong> pick a storage, enter a key and
            value, and press <kbd>⌘/Ctrl</kbd> + <kbd>Enter</kbd>. Existing keys
            and broken JSON are flagged as you type
          </li>
          <li>
            <strong>Insecure cookies flagged:</strong> a warning icon marks
            cookies sent without the Secure flag on HTTPS pages
          </li>
        </ul>

        <h3>Values</h3>
        <ul>
          <li>
            <strong>JWT lifetime:</strong> Valid, Expiring soon, or Expired at a
            glance, with a progress bar from issue to expiry and a live
            countdown. Payload, Header, and Raw tabs show time claims as dates
          </li>
          <li>
            <strong>Cookie attributes explained:</strong> plain-language hints
            for SameSite, Secure, HttpOnly, and expiry, plus a warning when{" "}
            <code>SameSite=None</code> lacks Secure
          </li>
          <li>
            <strong>Copy as:</strong> copy a value as a <code>setItem()</code>{" "}
            call, a <code>document.cookie</code> line, a cURL command, or an{" "}
            <code>Authorization: Bearer</code> header for tokens
          </li>
          <li>
            <strong>Keyboard navigation:</strong> <kbd>J</kbd> and <kbd>K</kbd>{" "}
            step through keys, <kbd>Esc</kbd> goes back, and <kbd>⌘/Ctrl</kbd> +{" "}
            <kbd>Enter</kbd> saves
          </li>
          <li>
            <strong>Batched JSON edits:</strong> changes in the tree show next
            to their old values, then save or discard together
          </li>
          <li>
            <strong>Token countdown in JSON:</strong> JWTs nested inside JSON
            show their time left when expanded
          </li>
        </ul>

        <h3>Snapshots</h3>
        <ul>
          <li>
            <strong>Snapshot dock:</strong> a bar under the list shows how many
            snapshots the site has, when the latest was taken, and how many keys
            changed since
          </li>
          <li>
            <strong>One-click capture:</strong> snapshots are named
            automatically, with a Rename action right in the confirmation
          </li>
          <li>
            <strong>Compare with the live page:</strong> see which keys are only
            in the snapshot, only on the page, or have a different value, before
            you restore
          </li>
          <li>
            <strong>Safer restore:</strong> restoring warns you when a snapshot
            was taken on another site
          </li>
          <li>
            <strong>Grouped by site:</strong> <samp>All sites</samp> lists
            snapshots by domain, with the current site first
          </li>
          <li>
            <strong>Same value screen:</strong> snapshot keys open in the same
            screen as live storage, with search, editing, rename, and delete
          </li>
        </ul>

        <h3>Other Improvements</h3>
        <ul>
          <li>
            <strong>One menu:</strong> theme, What&apos;s new, Leave a review,
            Report an issue, and Clear all site data now live in the header menu
          </li>
          <li>
            <strong>New look:</strong> a new icon, a lime accent, neutral light
            and dark themes, and new code colors
          </li>
          <li>
            <strong>No font requests:</strong> fonts ship with the extension
            instead of loading from Google Fonts
          </li>
          <li>
            <strong>Clearer page states:</strong> a <samp>Reload page</samp>{" "}
            button when a tab needs a refresh, and an explanation on pages
            browsers block, like <code>chrome://</code>
          </li>
          <li>
            <strong>Sharper toolbar icon:</strong> crisp at every size
          </li>
          <li>
            <strong>Welcome page:</strong> a short getting-started page opens
            after you install
          </li>
        </ul>

        <h3>Removed</h3>
        <ul>
          <li>
            Compact and dashboard layouts, replaced by one layout for the popup
            and the side panel
          </li>
          <li>
            The Settings panel: the theme switcher moved to the header menu, and
            there&apos;s no layout left to choose
          </li>
          <li>
            The Storage overview panel: counts and sizes now sit on each storage
            group, and clearing moved to the group and header menus
          </li>
        </ul>

        <h3>Permissions</h3>
        <ul>
          <li>
            <code>sidePanel</code>: opens StorageKit in the side panel
          </li>
          <li>
            <code>favicon</code>: shows site icons from the browser&apos;s local
            cache, with no network requests
          </li>
        </ul>
      </>
    ),
  },
  "2.4.0": {
    tagline: "JWT decoding and smoother editing",
    content: (
      <>
        <h3>New Features</h3>
        <ul>
          <li>
            <strong>JWT decoding:</strong> decode JWT tokens inside nested JSON
            keys
          </li>
          <li>
            <strong>Auto-resizing textarea:</strong> value editing textarea
            grows with content
          </li>
          <li>
            <strong>JWT token badge:</strong> styled badge on tree nodes
            containing JWT tokens
          </li>
        </ul>

        <h3>Bug Fixes</h3>
        <ul>
          <li>
            Fixed layout shift when toggling edit mode in the value panel
          </li>
        </ul>
      </>
    ),
  },
  "2.3.0": {
    tagline: "Nested JSON tree editor",
    content: (
      <>
        <h3>New Features</h3>
        <ul>
          <li>
            <strong>Nested JSON tree editor:</strong> interactive
            expand/collapse tree with inline editing
          </li>
        </ul>

        <h3>Improvements</h3>
        <ul>
          <li>Enhanced copy button styling and tree view toggle</li>
          <li>Improved inline edit validation and styling</li>
        </ul>

        <h3>Bug Fixes</h3>
        <ul>
          <li>
            Fixed layout shift when editing a storage item in dashboard layout
          </li>
          <li>Fixed toast notification position to bottom-center</li>
        </ul>
      </>
    ),
  },
  "2.2.0": {
    tagline: "Create, protect, and polish",
    content: (
      <>
        <h3>New Features</h3>
        <ul>
          <li>
            <strong>Create storage item:</strong> full create flow for{" "}
            <code>localStorage</code>, <code>sessionStorage</code>, and cookies
            with edge case handling
          </li>
          <li>
            <strong>Duplicate key detection:</strong> confirmation modal before
            overwriting an existing key
          </li>
          <li>
            <strong>Cookie expiration date:</strong> session or custom toggle
            with a datetime picker
          </li>
          <li>
            <strong>Cookie domain validation:</strong> validates domain format
            before submission
          </li>
          <li>
            <strong>Restricted URL protection:</strong> blocks storage writes on
            restricted pages with a clear error message
          </li>
          <li>
            <strong>Quota error handling:</strong> friendly <samp>Storage quota
              exceeded</samp> message instead of raw browser errors
          </li>
          <li>
            <strong>Toast notifications:</strong> success and error toasts with
            theme support
          </li>
          <li>
            <strong>Overwrite confirmation:</strong> prompt when adding a
            duplicate key to prevent silent data loss
          </li>
          <li>
            <strong>Changelog on update:</strong> opens the changelog page when
            the extension is updated
          </li>
        </ul>

        <h3>Dashboard Redesign</h3>
        <ul>
          <li>
            Aligned toolbar rows across all panels for a consistent layout
          </li>
          <li>
            Borderless inputs with subtle tinted backgrounds in dashboard mode
          </li>
          <li>
            Breadcrumb-style key display (e.g.{" "}
            <samp>Local storage &gt; my_key</samp>) with inline rename
          </li>
          <li>
            Integrated snapshot save button inside the name input, visible only
            when typing
          </li>
          <li>
            Add buttons on storage sections hidden by default, revealed on hover
          </li>
          <li>Rounded pill active state for sidebar navigation</li>
          <li>
            Minimal <samp>Select a key</samp> empty state for the value panel
          </li>
          <li>Shared create form between compact and dashboard layouts</li>
        </ul>

        <h3>Bug Fixes</h3>
        <ul>
          <li>
            Fixed duplicate entries appearing in the UI when adding items with
            existing keys
          </li>
          <li>Content script now properly catches storage quota errors</li>
        </ul>
      </>
    ),
  },
  "2.1.0": {
    tagline: "Add items and a new storage tab",
    content: (
      <>
        <h3>New Features</h3>
        <ul>
          <li>
            <strong>Add storage item:</strong> create new{" "}
            <code>localStorage</code>, <code>sessionStorage</code>, and cookie
            entries from the inspector
          </li>
          <li>
            <strong>Storage tab:</strong> dedicated storage overview integrated
            into the app navigation
          </li>
        </ul>

        <h3>Improvements</h3>
        <ul>
          <li>Updated header icons</li>
          <li>
            Adjusted spacing and text sizes in empty states and tab navigation
          </li>
        </ul>
      </>
    ),
  },
  "2.0.0": {
    tagline: "A brand new identity and dashboard layout",
    content: (
      <>
        <h3>New Features</h3>
        <ul>
          <li>
            <strong>Renamed to StorageKit</strong> with a new logo and brand
            identity
          </li>
          <li>
            <strong>Storage overview panel:</strong> total usage, per-type
            breakdown, clear by type
          </li>
          <li>
            <strong>Settings panel:</strong> theme preferences (system, light,
            dark) and default layout selection
          </li>
          <li>
            <strong>Dashboard layout:</strong> split-pane layout with sidebar
            navigation, inspector, and value panel
          </li>
          <li>
            <strong>Redesigned compact layout:</strong> refreshed storage tree,
            tabs, header, and bar
          </li>
        </ul>

        <h3>Improvements</h3>
        <ul>
          <li>Equal-width columns in dashboard header</li>
          <li>Updated header action button styles</li>
          <li>Fixed compact layout bar padding</li>
        </ul>
      </>
    ),
  },
  "1.4.0": {
    tagline: "Redesigned navigation and snapshot cards",
    content: (
      <>
        <h3>New Features</h3>
        <ul>
          <li>
            <strong>Redesigned navbar:</strong> cleaner, more modern navigation
          </li>
          <li>
            <strong>Redesigned snapshot card:</strong> improved visual hierarchy
            with dropdown actions
          </li>
          <li>
            <strong>Import feedback:</strong> success and error notifications on
            snapshot import
          </li>
          <li>
            <strong>Export/import hints:</strong> helpful notes alongside export
            and import buttons
          </li>
        </ul>

        <h3>Improvements</h3>
        <ul>
          <li>Grouped secondary snapshot actions under a dropdown menu</li>
          <li>Snapshot saving now skips extension-internal fields</li>
        </ul>

        <h3>Bug Fixes</h3>
        <ul>
          <li>Fixed storage names display</li>
        </ul>
      </>
    ),
  },
  "1.3.4": {
    tagline: "Snapshot filtering and cleaner labels",
    content: (
      <>
        <h3>Improvements</h3>
        <ul>
          <li>Snapshot active items filtering</li>
          <li>Updated storage type names</li>
        </ul>
      </>
    ),
  },
  "1.3.2": {
    tagline: "Cookie details, search, and syntax highlighting",
    content: (
      <>
        <h3>New Features</h3>
        <ul>
          <li>
            <strong>Cookie attributes:</strong> detailed cookie attribute
            display (<code>domain</code>, <code>path</code>,{" "}
            <code>secure</code>, <code>httpOnly</code>, <code>sameSite</code>,{" "}
            <code>expiry</code>)
          </li>
          <li>
            <strong>Cookie restore preservation:</strong> full cookie attributes
            preserved when restoring snapshots
          </li>
          <li>
            <strong>JSON syntax highlighting:</strong> formatted <code>JSON</code>{" "}
            values with color-coded syntax
          </li>
          <li>
            <strong>Search:</strong> filter storage items by key or value
          </li>
          <li>
            <strong>Storage preview:</strong> quick preview of storage values
          </li>
          <li>
            <strong>Number and boolean detection:</strong> auto-detect and label
            numeric and boolean values
          </li>
        </ul>

        <h3>Improvements</h3>
        <ul>
          <li>Deferred tab switching for better performance</li>
          <li>Enhanced storage fetching logic</li>
          <li>Copy button with icon</li>
          <li>Updated search and snapshot input styles</li>
          <li>Better refresh messaging when content script is unavailable</li>
          <li>Restricted site handling for snapshot creation</li>
        </ul>

        <h3>Bug Fixes</h3>
        <ul>
          <li>Fixed color contrasts across themes</li>
          <li>Fixed content script injection</li>
          <li>Removed unused permissions</li>
          <li>Fixed delete confirmation in storage panel</li>
        </ul>
      </>
    ),
  },
  "1.0.0": {
    tagline: "The first release",
    content: (
      <>
        <h3>Features</h3>
        <ul>
          <li>
            <strong>Inspector:</strong> browse <code>localStorage</code>,{" "}
            <code>sessionStorage</code>, and cookies for the active tab
          </li>
          <li>
            <strong>Inline editing:</strong> edit storage values directly
          </li>
          <li>
            <strong>Delete items:</strong> remove individual storage entries
          </li>
          <li>
            <strong>Snapshots:</strong> save, restore, export, and import
            storage snapshots
          </li>
          <li>
            <strong>Domain filtering:</strong> filter snapshots by current
            domain or view all
          </li>
          <li>
            <strong>Snapshot inspector:</strong> browse and inspect snapshot
            contents
          </li>
          <li>
            <strong>Dark mode:</strong> system-aware theme with manual toggle
          </li>
          <li>
            <strong>Compact layout:</strong> popup optimized for quick access
          </li>
        </ul>
      </>
    ),
  },
};
