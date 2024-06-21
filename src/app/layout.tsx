"use client";

import AppProvider from "@/modules/AppProvier";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Croft</title>
      </head>
      <body className="font-['Archivo']">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
