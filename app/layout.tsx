import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/sections/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PANDA | Full-Stack Developer",
  description: "Ideas que construyen experiencias reales.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-white dark:bg-panda-ink text-slate-900 dark:text-slate-100 font-sans antialiased min-h-screen flex flex-col items-center transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full  flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <footer className="border-t border-slate-200 dark:border-slate-800/80 pb-8 text-center text-sm text-slate-500 dark:text-panda-muted mt-20">
              © {new Date().getFullYear()} PANDA — Full-Stack Developer
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}