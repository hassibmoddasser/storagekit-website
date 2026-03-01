import Link from "next/link";
import Image from "next/image";
import icon from "@/assets/icon.svg";

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2 text-lg font-bold tracking-tight">
      <Image
        src={icon}
        alt="StorageKit"
        width={28}
        height={28}
        className="rounded-lg"
      />
      <span>
        Storage<span className="text-teal-400">Kit</span>
      </span>
    </Link>
  );
}
