import DesktopHeader from "./header-desktop";
import MobileHeader from "./header-mobile";

export const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Compare", href: "/#compare" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "FAQ", href: "/#faq" },
  { label: "Changelog", href: "/changelog" },
];

export default function Header() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
}
