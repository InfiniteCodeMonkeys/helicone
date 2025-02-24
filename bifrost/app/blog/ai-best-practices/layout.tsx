import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "@mintlify/mdx/dist/styles.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Practices for AI Developers: Full Guide (June 2024) - Helicone",
  description:
    "Achieving high performance requires robust observability practices. In this blog, we will explore the key challenges of building with AI and the best practices to help you advance your AI development.",
  icons: "https://www.helicone.ai/static/logo.webp",
  openGraph: {
    type: "website",
    siteName: "Helicone.ai",
    title:
      "Best Practices for AI Developers: Full Guide to Optimize Large Language Model (LLM) Outputs and Costs (June 2024)",
    url: "https://www.helicone.ai/blog/ai-best-practices",
    description:
      "Achieving high performance requires robust observability practices. In this blog, we will explore the key challenges of building with AI and the best practices to help you advance your AI development.",
    images: "https://www.helicone.ai/static/blog/ai-best-practices/cover.webp",
    locale: "en_US",
  },
  twitter: {
    title:
      "Best Practices for AI Developers: Full Guide to Optimize Large Language Model (LLM) Outputs and Costs (June 2024)",
    description:
      "Achieving high performance requires robust observability practices. In this blog, we will explore the key challenges of building with AI and the best practices to help you advance your AI development.",
    card: "summary_large_image",
    images: "https://www.helicone.ai/static/blog/ai-best-practices/cover.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
