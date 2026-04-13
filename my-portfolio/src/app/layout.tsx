import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toka Mohsen | Cloud DevOps Engineer",
  description:
    "Cloud DevOps Engineer specializing in AWS, Kubernetes, Terraform, and CI/CD. Building secure, scalable cloud-native infrastructure.",
  keywords: [
    "Cloud DevOps",
    "AWS",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "Jenkins",
    "Ansible",
    "OpenShift",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0f1c] text-[#e2e8f0]">
        {children}
      </body>
    </html>
  );
}
