"use server";

import { cookies } from "next/headers";
import { LANG_COOKIE, toLang } from "@/lib/i18n";

// Remembers the visitor's language for a year. Called by the flags in the menu.
export async function setLang(value: string) {
  (await cookies()).set(LANG_COOKIE, toLang(value), {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
}
