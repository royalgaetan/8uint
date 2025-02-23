import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { holdingName } from "@/lib/constants";
import { geistMono, geistSans } from "@/lib/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{holdingName}</title>
        <meta name="description" content="Next Gen of Apps" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white max-w-[100vw] overflow-x-clip`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
