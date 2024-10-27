import "./globals.css";
import { M_PLUS_1 } from "next/font/google";

const mplus = M_PLUS_1({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
    <html lang="ja">
      <body className={mplus.className}>{children}</body>
    </html>
  );
}
