import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Excellence BTP | Réduisez vos factures et vos consommations de energie",
  description: "Réduisez vos factures et vos consommations de energie",

  keywords:
    "travaux de rénovation, 	,travaux rénovation	,travaux renovation	,rénovation travaux	,isolation maison	,travaux de renovation	,travaux isolation	,isolation extérieur	,travaux rénovation énergétique	,travaux de rénovation énergétique	,isolation extérieure	,travaux et rénovation	,rénovation thermique	,travaux batiment	,renovation batiment	,la rénovation énergétique	,isolation logement	,rénovation batiment	,travaux renovation maison	,chantier travaux	,rénovation maison	,renovation maison	,renovation energetique	,rénovation	,aides energetiques	,isolation thermique	,batiment renovation	,entreprise rénovation	,entreprise batiment	,entreprise renovation	,aide isolation	,aide rénovation	,aide renovation energetique	,isolation mur exterieur	,entreprise de renovation	,isolation combles	,entreprise de rénovation	,rénovation énergétique	,renovation isolation	,aide travaux	,devis isolation toiture	,isolation toiture	,entreprise isolation	,isolation batiment	,isolation par l extérieur	,entreprise travaux batiment	,entreprise btp	,toiture a 1 euro	,travaux isolation thermique	,renovation de maison	,travaux chantier	,renovation et travaux	,isolation mur	,isolation exterieur maison	,travaux de rénovation maison	,aide rénovation énergétique	,renovation appartement	,entreprise renovation maison	,société de rénovation	,travaux d isolation	,entreprise travaux maison	,travaux isolation maison	,rénovation appartement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
