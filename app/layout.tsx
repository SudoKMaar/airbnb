import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import RegisterModal from "@/components/modals/registerModal";
import Navbar from "@/components/navbar/navbar";
import ToasterProvider from "@/providers/toasterProvider";
import LoginModal from "@/components/modals/loginModal";
import RentModal from "@/components/modals/rentModal";
import SearchModal from "@/components/modals/searchModal";
import getCurrentUser from "@/actions/getCurrentUser";
import ClientOnly from "@/components/clientOnly";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb by KMaar",
  description:
    "This project aims to replicate the core features and functionalities of the Airbnb platform for property listings and reservations",
  applicationName: "Airbnb",
  referrer: "origin",
  themeColor: "#FF385C",
  creator: "KMaar Miscellaneous Studio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Abhishek KMaar" />
        <link rel="author" href="https://kmaar.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://airbnb-kmaar.vercel.app/" />
        <meta property="og:site_name" content="Airbnb by KMaar" />
        <meta property="og:title" content="Airbnb by KMaar" />
        <meta
          property="og:description"
          content="This project aims to replicate the core features and functionalities of the Airbnb platform for property listings and reservations"
        />
        <meta
          property="og:image"
          content="https://imjustcreative.com/wp-content/uploads/2014/07/airbnb-logo-design-by-wearedesignstudio.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://airbnb-kmaar.vercel.app/" />
        <meta name="twitter:creator" content="@kmaar44" />
        <meta name="twitter:title" content="Airbnb by KMaar" />
        <meta
          name="twitter:description"
          content="This project aims to replicate the core features and functionalities of the Airbnb platform for property listings and reservations"
        />
        <meta
          name="twitter:image"
          content="https://imjustcreative.com/wp-content/uploads/2014/07/airbnb-logo-design-by-wearedesignstudio.png"
        />
      </head>
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
