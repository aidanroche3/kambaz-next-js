"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function CourseNavigation({ cid }: any) {
  const pathname = usePathname();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group fs-5 rounded-0 d-none d-md-block"
    >
      {links.map((link, index) => (
        <Link
          key={index}
          href={`/courses/${cid}/${link.toLowerCase()}`}
          id={`wd-course-${link.toLowerCase()}-link`}
          className={`${pathname.includes(link.toLowerCase()) ? "active" : ""} list-group-item text-danger border-0`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
