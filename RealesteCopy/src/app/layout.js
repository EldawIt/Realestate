import Header from "@/Components/Header/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tanta Real Estate",
  description: "Tanta Real Estate",
};

export default function RootLayout({ children }) {

  return (
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
