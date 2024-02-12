import type { Metadata } from "next";
import "./globals.css";
import { lexendDeca } from "./font";
import Nav from "./components/base/Nav";
import Footer from "./components/base/footer";
import { SlideMenuProvider } from "./components/base/context/SlideMenuContext";
import TransitionLayout from "./components/animation/TransitionLayout";
import { TransitionProvider } from "./components/animation/context/TransitionContext";
import { CloudinaryProvider } from "./providers/cloudinaryConfig";

//サイト情報の変数設定
const siteName = "sat mak";
const setsumei = "makoto sato / Bassoonist,Composer";
const url = "https://krasick.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(`${url}`),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  keywords: [
    "makoto sato",
    "佐藤 諒",
    "ファゴット",
    "bassoon",
    "日本",
    "japanese",
    "improvisation",
    "purugatorio",
    "Art Rock",
    "クラシックジャンキーズ",
    "クラシック",
    "現代音楽",
    "近代",
    "コンテンポラリー",
    "音楽",
    "Classic",
    "Junkies",
    "ジャンキーズ",
    "チャンネル",
    "YouTube",
    "Music",
    "古楽",
  ],
  description: setsumei,
  openGraph: {
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },
    description: setsumei,
    url: url,
    siteName: siteName,
    locale: "ja-JP",
    type: "website",
  },
  twitter: {
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },
    description: setsumei,
    site: url,
    creator: "@mojabassoon",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja-JP">
      <body className={`${lexendDeca}`}>
        <TransitionProvider>
          <TransitionLayout>
            {/* <CloudinaryProvider> */}
            <SlideMenuProvider>
              <Nav />
            </SlideMenuProvider>
            <div>{children}</div>
            <Footer />
            {/*</CloudinaryProvider> */}
          </TransitionLayout>
        </TransitionProvider>
      </body>
    </html>
  );
}
