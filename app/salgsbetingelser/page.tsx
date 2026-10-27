import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { salesTerms } from "@/lib/sales-terms";

export const metadata: Metadata = {
  title: "Salgsbetingelser",
  description: "Salgsbetingelser for kjøp av fysiske bøker og nettkurs fra Holytones.",
};

export default function SalesTermsPage() {
  return (
    <PolicyPage
      policy={salesTerms}
      related={{ href: "/personvern", label: "Personvernerklæring" }}
    />
  );
}
