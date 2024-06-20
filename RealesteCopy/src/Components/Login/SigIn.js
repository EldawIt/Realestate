"use client"
import {useState} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {   signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import LoginWithGoogle from "../LoginWithGoogle/LoginWithGoogle"
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
const theme = createTheme();

export default function SigIn() {
	const [email, setEmail] =    useState("");
	const [password, setPassword] =  useState("");
const router = useRouter()
	const handleSubmit = async (event) => {
		event.preventDefault();
		signInWithEmailAndPassword(auth, email, password).then((user)=>{
      let displayName = user.user.displayName
      let photoURL = user.user.photoURL
      let email = user.user.email
      localStorage.setItem("name",displayName)
      localStorage.setItem("photoURL",photoURL)
      localStorage.setItem("email",email)
      Swal.fire({
        title: "تم السجيل بنجاح",
        icon: "success"
      });
      router.push("/")
    })
		 
			.catch((error) => {
				const errorCode = error.code;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `email or password not correct`,
        });
			});
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<FormControlLabel
							control={<Checkbox value="remember"
								color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
{/* login google  */}
            <LoginWithGoogle   />


						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="/SignUp" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
