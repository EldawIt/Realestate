"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import Boxx from "./Boxx";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { useRouter } from "next/navigation";
import "./Header.css";
import { Button, Typography } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Header() {
  const [showitem, setItem] = useState("none");
  const [user] = useAuthState(auth);

  const pages = [
    { name: "تصفح", path: "RealStateAvaliable" },
    { name: "اضف اعلانك", path: "Advertisements" },
  ];
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
      position="fixed"
      sx={{ background: "#fff", color: "#000", padding: "5px"  }}
    >
      <Container maxWidth="xl" sx={{ color: "#000" }}>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Boxx />

          <Box sx={{ display: { xs: "flex", md: "flex" }, gap: "10px" }}>
            {pages.map((item, index) => {
              return (
                <Button
                  key={index}
                  sx={{
                    backgroundColor: "#091E43",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#091E43",
                      color: "#fff",
                      border: "none",
                      outline: "none",
                    },

                    outline: "none",
                    border: "none",
                  }}
                  onClick={() => {
                    window.location.pathname = `/${item.path}`;
                  }}
                >
                  {item.name}
                </Button>
              );
            })}
            {localStorage.getItem("email") === process.env.emailForAdmin && (
              <Button
                sx={{
                  background: "#091E43",
                  zIndex: 30,
                  borderRadius: "5px",
                  color: "#fff",
                  transition: "0.3s",
                  cursor: "pointer",
                  outline: "none",
                  border: "none",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#091E43",
                    color: "#fff",
                    border: "none",
                    outline: "none",
                  },
                }}
                onClick={() => (window.location.pathname = "/Dashboard")}
              >
                الذهاب لي لوحه التحكم
              </Button>
            )}

            <Button
              sx={{
                position: "absolute",
                right: { xl: 100, xs: -20 },
                top: "60px",
                background: "#091E43",
                padding: "10px",
                zIndex: 30,
                borderRadius: "5px",
                color: "#fff",
                transition: "0.3s",
                display: showitem,
                cursor: "pointer",
                outline: "none",
                border: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#091E43",
                  color: "#fff",
                  border: "none",
                  outline: "none",
                },
              }}
              onClick={() => handleLogout()}
            >
              تسجيل الخروج
            </Button>
          </Box>

          {!user && (
            <Button
              sx={{
                background: "#091E43",
                padding: "10px",
                zIndex: 30,
                borderRadius: "5px",
                color: "#fff",
                cursor: "pointer",
                outline: "none",
                border: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#091E43",
                  color: "#fff",
                  border: "none",
                  outline: "none",
                },
              }}
              onClick={() => (window.location.pathname = "/Login")}
            >
              SignUp
            </Button>
          )}
          {user && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                gap: "5px",
              }}
            >
              <IconButton onClick={() => setItem("block")} sx={{ p: 0 }}>
                <Avatar
                  alt="https://res.cloudinary.com/dpiie27st/image/upload/v1715168597/user_149071_1_gqzxjr.png"
                  src={user.photoURL}
                />
              </IconButton>
              <Typography
                sx={{ fontSize: { xs: "10px" }, fontWeight: "bold" }}
                variant="p"
                component="div"
              >
                {user.displayName}
              </Typography>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
{
  /* <Button
                  className="iconLinks"
                  sx={{
                    backgroundColor: "#091E43",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#091E43",
                      color: "#fff",
                      border: "none",
                      outline: "none",
                    },
                   
                    outline: "none",
                    border: "none",
                  }}
                >
                  {page.name}
                </Button> */
}
