import type { Metadata } from "next";
import ContactComponent from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact | Zuhaib Rashid",
  description:
    "Get in touch with Zuhaib Rashid. I'm always open to new opportunities, collaborations, and discussions.",
  openGraph: {
    title: "Contact | Zuhaib Rashid",
    description: "Get in touch with Zuhaib Rashid. I'm always open to new opportunities.",
    url: "https://www.zuhaibrashid.com/contact",
    siteName: "Zuhaib Rashid Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Zuhaib Rashid",
    description: "Get in touch with Zuhaib Rashid.",
  },
};

export default function ContactPage() {
  return (
    <div className="py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <ContactComponent />
    </div>
  );
}
