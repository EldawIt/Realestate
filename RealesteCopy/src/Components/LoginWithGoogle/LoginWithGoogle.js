"use client";
import GoogleButton from "react-google-button";
import {
  GoogleAuthProvider,
   
  signInWithPopup,
   
} from "firebase/auth";
import "./ButtontComponents.css";
import { auth } from "../Firebase/firebase";
import { useRouter } from "next/navigation";

function LoginWithGoogle( ) {
  const router = useRouter()
  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((user)=>{
      let displayName = user.user.displayName
      let photoURL = user.user.photoURL
      let email = user.user.email
      localStorage.setItem("name",displayName)
      localStorage.setItem("photoURL",photoURL)
      localStorage.setItem("email",email)
      router.push("/")
    })
  };

  
  return (
    <div>
     
      <nav>
        <GoogleButton
          onClick={handleSignInWithGoogle}
          style={{ width: "400px" }}
        />
      </nav>
     
    </div>
  );
}

export default LoginWithGoogle;

