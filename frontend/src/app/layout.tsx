import { Theme } from "@radix-ui/themes";
import "./globals.css";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Todo App",
  description: "A Todo app built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
