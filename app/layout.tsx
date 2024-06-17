import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const IMBPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Imaginify",
  description:
    "Full Stack AI SaaS Platform with Next js 14, TypeScript, Stripe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#624cf5" },
      }}
    >
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IMBPlex.variable)}>
          <SignedOut>
            {/* <SignInButton /> */}
            <RedirectToSignIn />
          </SignedOut>

          <SignedIn>{/* <UserButton /> */}</SignedIn>

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
