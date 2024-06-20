"use client"
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
	createUserWithEmailAndPassword,
	updateProfile
} from "firebase/auth";
 import LoginWithGoogle from "../LoginWithGoogle/LoginWithGoogle"
import { auth } from "../Firebase/firebase";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}


export default function SignUp() {
	const [username, setUsername] =  useState("");
	const [email, setEmail] =  useState("");
	const [password, setPassword] =   useState("");
const router = useRouter()
	// const navigate = useNavigate();
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			// eslint-disable-next-line no-unused-vars
			const update = await updateProfile(auth.currentUser, {
				displayName: username,
			});

			const user = userCredential.user;
      Swal.fire({
        title: "تم السجيل بنجاح",
        icon: "success"
      });
router.push("/Login")
			// navigate("/");
		} catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "somthin wrong",
      });
		}
	};

	return (
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
					{/* <Avatar sx={{ m: 1, bgcolor: "" }}>
						<LockOutlinedIcon />
					</Avatar> */}
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</Grid>
						</Grid>
            <LoginWithGoogle />
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link href="/" variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
	);
}
