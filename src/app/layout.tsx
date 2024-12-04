import type { Metadata } from "next";
import "./globals.css";
import { primaryFont } from "../../public/fonts";


export const metadata: Metadata = {
  title: "Web-Developer From Vapi",
  description: "Need a Website or Web-App To Grow Your Business? So I am here to Provide The Best Website or Web-App For Your Business",
  keywords: ['web developer, web development, web developer vapi','web designer','web enthusiast'],
  authors: [{ name: "Fazal Hussain" }],
  icons: {
    icon: "/logos/favicon.png",
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <head>
      <meta name="robot" content="index, follow"/>
      </head>
      <body className={`${primaryFont} bg-primary w-screen`}>
        {children}</body>
    </html>
  );
}
