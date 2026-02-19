"use client";
import { redirect, useParams } from "next/navigation";

export default function PeoplePage() {
  const { cid } = useParams();
  redirect(`/courses/${cid}/people/table/`);
}
