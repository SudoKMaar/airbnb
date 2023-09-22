import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import RegisterModal from "@/components/modals/registerModal";
import Navbar from "@/components/navbar/navbar";
import ToasterProvider from "@/providers/toasterProvider";
import LoginModal from "@/components/modals/loginModal";
import getCurrentUser from "@/actions/getCurrentUser";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb by KMaar",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
