"use client";
import Sidebar from "./SideBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/Components/Firebase/firebase";
import Header from "@/Components/Header/Header";
import HeaderDashBoard from "./HeaderDahboard";

export default function layout({ children }) {
  const [user] = useAuthState(auth);
  if (user) {
    const userId = user.uid;
    const name = user.displayName;
    const email = user.email;
    const checkFrom = user.providerData.map((item) => item.providerId);
    if (
      name === process.env.AdminCanuse &&
      email === process.env.emailForAdmin&&
      userId == process.env.IdAdmin&&
      checkFrom[0] === "google.com"
    ) {
      return (
        <div>
          <HeaderDashBoard />
          <div style={{ display: "flex" }}>
            <Sidebar />
            {children}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <p>404 This page could not be found.</p>
        </div>
      );
    }
  } else {
    return (
      <div>
        <Header />
        Please sign in
      </div>
    );
  }
}
