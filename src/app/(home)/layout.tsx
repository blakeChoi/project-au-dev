"use client";

import "@/styles/global.css";

import AppProvider from "@/modules/AppProvier";
import Header from "@/features/layout/Header";

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
        <Header />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
