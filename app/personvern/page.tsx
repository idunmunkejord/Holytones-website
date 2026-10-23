import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { privacyPolicy } from "@/lib/privacy-policy";

export const metadata: Metadata = {
  title: "Personvernerklæring",
  description: "Hvordan Holytones behandler personopplysningene dine.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      policy={privacyPolicy}
      related={{ href: "/salgsbetingelser", label: "Salgsbetingelser" }}
    />
  );
}
