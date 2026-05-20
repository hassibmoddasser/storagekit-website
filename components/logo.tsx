"use client";

import icon from "@/assets/icon.svg";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      onClick={(e) => {
        if (window.location.pathname === "/") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className="group flex items-center gap-2 text-lg font-bold tracking-tight"
    >
      <Image
        src={icon}
        alt="StorageKit"
        width={26}
        height={26}
        className="rounded-md ring-1 ring-border/40 transition-transform group-hover:rotate-3"
      />
      <span className="font-heading">
        Storage<span className="text-accent">Kit</span>
      </span>
    </Link>
  );
}
