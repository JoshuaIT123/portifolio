import Image from "next/image";
import { profile } from "@/lib/site";

export function NavAvatar() {
  return (
    <span className="relative inline-block size-9 shrink-0 overflow-hidden rounded-full">
      <Image
        src={profile.avatar}
        alt={profile.avatarAlt}
        fill
        sizes="36px"
        priority
        className="rounded-full object-cover"
      />
    </span>
  );
}
