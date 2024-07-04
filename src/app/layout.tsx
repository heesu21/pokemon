import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS 나만의 포켓몬 도감",
  description:
    "피카츄 라이츄 파이리 꼬부기 버터플 야도란 피죤투 또가스 서로 생긴 모습은 달라도 우리는 모두 친구!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid place-items-center m-2 font-bold text-4xl ">
          포켓몬도감
        </div>
        {children}
      </body>
    </html>
  );
}
