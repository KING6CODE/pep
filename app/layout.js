import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
title: "PEPS – Performance Prévention Santé",
description: "Prévention des TMS en entreprise : formations, ergonomie, gestes et postures, étirements, analyse des postes.",
};


export default function RootLayout({ children }) {
return (
<html lang="fr">
<body className={`${inter.className} antialiased`}>
<div className="min-h-screen flex flex-col">
<NavBar />
<main className="flex-1">{children}</main>
<Footer />
</div>
</body>
</html>
);
}
