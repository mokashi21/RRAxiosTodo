import React, { useState, useEffect } from "react";
import { TextField, Typography, Container, Box } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Update() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the data of the item to update from the localStorage
    const itemId = localStorage.getItem("id");
    const itemName = localStorage.getItem("name");
    const itemPhone = localStorage.getItem("phone");

    setId(itemId);
    setName(itemName);
    setPhone(itemPhone);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://64c758e80a25021fde92557d.mockapi.io/TodoArt/${id}`, {
        name,
        phone,
      })
      .then(() => {
        navigate("/todo");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="80vh"
        >
          <Typography variant="h3" align="center" gutterBottom>
            Update
          </Typography>
          <form style={{ width: "100%" }}>
            <TextField
              required
              type="text"
              label="Name"
              name="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
              margin="normal"
              fullWidth
            />

            <TextField
              required
              type="number"
              label="Phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              variant="outlined"
              margin="normal"
              fullWidth
            />

            <Box display="flex" justifyContent="center" width="100%">
              <Button variant="outlined" onClick={handleUpdate}>
                Update
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </div>
  );
}

export default Update;
