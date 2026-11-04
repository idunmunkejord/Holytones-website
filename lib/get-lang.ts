import { cookies } from "next/headers";
import { LANG_COOKIE, toLang, type Lang } from "@/lib/i18n";

// The visitor's chosen language, for server components and metadata.
export async function getLang(): Promise<Lang> {
  return toLang((await cookies()).get(LANG_COOKIE)?.value);
}
