import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/Components/Firebase/firebase";
import Boxx from "@/Components/Header/Boxx";
 

export default function HeaderDashBoard() {
  const [showitem, setItem] = useState("none");
  const checkInLocalStorageName = localStorage.getItem("name");
  const checkInLocalStoragePhoto = localStorage.getItem("photoURL");
  let router = useRouter();
  const handleLogout = () => {
    signOut(auth);
    localStorage.removeItem("name");
    localStorage.removeItem("photoURL");
    localStorage.removeItem("email");
    router.push("/");
    window.location.reload();
  };

  return (
    <AppBar
      position="static"
      sx={{ background: "#fff", color: "#000", padding: "5px" }}
    >
      <Container maxWidth="xl" sx={{ color: "#000" }}>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Boxx />

          <Box sx={{ display: { xs: "flex", md: "flex", gap: "30px" } }}>
         
            <button
              style={{
                position: "absolute",
                right: 100,
                top: "60px",
                background: "#091E43",
                padding: "10px",
                zIndex: 10,
                borderRadius: "5px",
                color: "#fff",
                transition: "0.3s",
                display: showitem,
                cursor: "pointer",
                outline: "none",
                border: "none",
              }}
              onClick={() => handleLogout()}
            >
              تسجيل الخروج
            </button>
          </Box>
          {/* {checkInLocalStorageName && checkInLocalStoragePhoto && auth &&  (
          
          )} */}
          {!checkInLocalStorageName && !checkInLocalStoragePhoto && (
            <Link
              style={{
                textDecoration: "none",
                background: "#091E43",
                padding: "10px",
                borderRadius: "5px",
                color: "#fff",
                fontWeight:"bold"
              }}
              href="/Login"
            >
              Login
            </Link>
          )}
          {checkInLocalStorageName && checkInLocalStoragePhoto && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                gap: "10px",
              }}
            >
              <IconButton onClick={() => setItem("block")} sx={{ p: 0 }}>
                <Avatar
                  alt="https://res.cloudinary.com/dpiie27st/image/upload/v1715168597/user_149071_1_gqzxjr.png"
                  src={checkInLocalStoragePhoto}
                />
              </IconButton>
              <h4>{checkInLocalStorageName}</h4>
              <p>welcom admin</p>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
