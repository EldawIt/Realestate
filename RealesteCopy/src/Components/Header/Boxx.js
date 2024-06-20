import { ThemeProvider } from "@mui/material";
import Link from "next/link";

export default function Boxx() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: "#007FFF",
            dark: "#0066CC",
          },
        },
      }}
    >
      <Link href="/" passHref>
        {" "}
        <img
          style={{ width: "50px", height: "50px", borderRadius: "5px" }}
         
          src="https://marketplace.canva.com/EAF4C3_TU4c/2/0/1600w/canva-blue-orange-modern-illustration-house-professional-real-estate-logo-MbvvE_PfUjg.jpg"
        />
      </Link>
    </ThemeProvider>
  );
}
