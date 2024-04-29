import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Template Next.js, Prisma, and AWS S3 | Devscale ID",
  description: "Template Project Next.js, Prisma, and AWS S3 for Devscale ID",
  publishedTime: "06-03-2024",
  authors: ["Devscale ID Student"],
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
