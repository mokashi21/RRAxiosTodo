// import React, { useState } from "react";
// import { TextField, Typography, Container, Box } from "@mui/material";
// import Button from "@mui/material/Button";
// //import { useNavigate } from "react-router-dom";
// import axios from "axios";
// function Login() {
//   const [uname, setUname] = useState("");
//   const [Pname, setPname] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   //const navigate = useNavigate();

//   //
//   const handlePasswordChange = (e) => {
//     console.log("Clicked");
//     const passwordValue = e.target.value;
//     setPname(passwordValue);

//     if (passwordValue.length < 8) {
//       setPasswordError("Password must be at least 8 characters long.");
//     } else {
//       setPasswordError("");
//     }
//   };
//   //

//   return (
//     <Container maxWidth="sm">
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//         minHeight="80vh"
//       >
//         <Typography variant="h3" align="center" gutterBottom>
//           Login
//         </Typography>
//         <form style={{ width: "100%" }}>
//           <TextField
//             type="text"
//             placeholder="Username"
//             label="User-Name"
//             name="username"
//             value={uname}
//             onChange={(e) => setUname(e.target.value)}
//             variant="outlined"
//             margin="normal"
//             fullWidth
//           />
//           <TextField
//             placeholder="password"
//             type="password"
//             label="Password"
//             name="password"
//             value={Pname}
//             onChange={handlePasswordChange}
//             variant="outlined"
//             margin="normal"
//             fullWidth
//           />
//           {passwordError && (
//             <Typography variant="body2" color="error">
//               {passwordError}
//             </Typography>
//           )}

//           <Box display="flex" justifyContent="center" width="100%">
//             <Button variant="outlined" onClick={handleLogin}>
//               Login
//             </Button>
//           </Box>
//         </form>
//       </Box>
//     </Container>
//   );
// }

// export default Login;
