import React from "react";
import { TextField, Typography, Container, Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { setPhoneError, registerUser } from "../store/action";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [uname, setUname] = React.useState("");
  const [fullName, setEname] = React.useState("");
  const [Pname, setPname] = React.useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const phoneError = useSelector((state) => state.registration.phoneError);

  const handlePhone = (e) => {
    const phonevalue = e.target.value;
    setPname(phonevalue);

    if (phonevalue.length < 10) {
      dispatch(setPhoneError("Phone must be at least 10 characters long."));
    } else {
      dispatch(setPhoneError(""));
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (uname.trim() === "" || Pname.trim() === "" || fullName.trim() === "") {
      dispatch(setPhoneError("All fields are required."));
      return;
    }

    if (Pname.length < 10) {
      dispatch(setPhoneError("Phone must be at least 10 characters long."));
      return;
    }

    dispatch(registerUser(uname, fullName, Pname))
      .then(() => {
        navigate("/todo");
      })
      .catch((error) => {
        alert("Registration failed:", error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="80vh"
      >
        <Typography variant="h3" align="center" gutterBottom>
          Registration Form
        </Typography>
        <form style={{ width: "100%" }}>
          <TextField
            required
            type="text"
            label="User-Name"
            name="username"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            required
            type="text"
            label="Name"
            name="Name"
            value={fullName}
            onChange={(e) => setEname(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <TextField
            required
            type="number"
            label="Phone"
            name="phone"
            value={Pname}
            onChange={handlePhone}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          {phoneError && (
            <Typography variant="body2" color="error">
              {phoneError}
            </Typography>
          )}

          <Box display="flex" justifyContent="center" width="100%">
            <Button variant="outlined" onClick={handleRegister}>
              Register
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default Registration;
