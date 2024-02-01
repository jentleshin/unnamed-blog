import "../src/styles/globals.scss";
import ClientLayout from "./ClientLayout";
import { Bodoni_Moda, Noto_Sans_Display, Merriweather } from "next/font/google";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["700"],
  display: "swap",
  variable: "--font-bodoni",
});

const noto = Noto_Sans_Display({
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  weight: ["300", "700"],
  variable: "--font-noto",
});

const merri = Merriweather({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  weight: ["300", "900"],
  variable: "--font-merri",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${noto.variable} ${merri.variable}`}
    >
      <body className="dark:bg-organic bg-lime">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
