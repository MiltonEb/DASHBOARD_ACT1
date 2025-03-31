import { Outfit } from 'next/font/google';
import './globals.css';
import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <a href="#main-content" className="sr-only">Skip to main content</a>
        <ThemeProvider>
          <SidebarProvider>
            {children}
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}