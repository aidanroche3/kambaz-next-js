"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
export default function AccountNavigation() {
  const pathname = usePathname();
  return (
    <div
      id="wd-account-navigation"
      className="wd list-group fs-5 rounded-0 d-none d-md-block"
    >
      <Link
        className={`list-group-item border-0 ${
          pathname.endsWith("signin") ? "active" : ""
        }`}
        href="signin"
      >
        Signin
      </Link>
      <br />
      <Link
        className={`list-group-item border-0 ${
          pathname.endsWith("signup") ? "active" : ""
        }`}
        href="signup"
      >
        Signup
      </Link>
      <br />
      <Link
        className={`list-group-item border-0 ${
          pathname.endsWith("profile") ? "active" : ""
        }`}
        href="profile"
      >
        Profile
      </Link>
      <br />
    </div>
  );
}
