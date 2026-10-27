import { useState } from "react";
import { profile } from "../data/content";

type Props = { size: number; className?: string; alt?: string };

/** Profile photo from /public/omkar.jpg. Shows initials if the photo is missing. */
export default function Avatar({ size, className = "", alt = "" }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
        aria-hidden={alt ? undefined : true}
        className={`flex shrink-0 items-center justify-center rounded-full bg-card font-bold tracking-tight text-fg ${className}`}
        style={{ width: size, height: size, fontSize: Math.round(size * 0.36) }}
      >
        {profile.firstName[0]}
        <span className="text-accent">{profile.lastName[0]}</span>
      </span>
    );
  }

  return (
    <img
      src={profile.photo}
      alt={alt}
      width={size}
      height={size}
      onError={() => setFailed(true)}
      className={`shrink-0 rounded-full object-cover ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
