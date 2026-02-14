"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { ListGroupItem } from "react-bootstrap";

export default function NavigationLink({
  linkName,
  icon,
}: Readonly<{ linkName: string; icon: ReactNode }>) {
  const pathname = usePathname();
  const providedPath = "/" + linkName.toLowerCase();
  const id = "wd-" + linkName.toLowerCase() + "-link";
  return (
    <ListGroupItem
      className={
        pathname.startsWith(providedPath)
          ? "border-0 bg-white text-center"
          : "border-0 bg-black text-center"
      }
    >
      <Link
        href={providedPath}
        id={id}
        className={
          pathname.startsWith(providedPath)
            ? "active-link text-decoration-none"
            : "text-white text-decoration-none"
        }
      >
        {icon}
        {linkName}
      </Link>
    </ListGroupItem>
  );
}
