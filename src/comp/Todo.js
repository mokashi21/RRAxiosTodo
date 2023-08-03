import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Todo() {
  const [handles, setHandles] = useState([]);
  const navigate = useNavigate();

  const handleData = () => {
    axios
      .get("https://64c758e80a25021fde92557d.mockapi.io/TodoArt")
      .then((res) => {
        console.log(res);
        setHandles(res.data);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://64c758e80a25021fde92557d.mockapi.io/TodoArt/${id}`)
      .then(() => {
        handleData();
      });
  };

  const setToLocalStorage = (id, name, phone) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
  };

  useEffect(() => {
    handleData();
  }, []);

  const handleLogout = () => {
    return navigate("/");
  };

  return (
    <TableContainer>
      <h1>TODO - App</h1>
      <Button
        variant="outlined"
        onClick={() => {
          handleLogout();
        }}
      >
        Add New
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {handles.map((eachData) => {
            return (
              <TableRow
                key={eachData.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{eachData.id}</TableCell>
                <TableCell>{eachData.name}</TableCell>
                <TableCell>{eachData.phone}</TableCell>
                <TableCell>
                  <Link to={"/update"}>
                    <Button
                      variant="contained"
                      onClick={() =>
                        setToLocalStorage(
                          eachData.id,
                          eachData.name,
                          eachData.phone
                        )
                      }
                    >
                      Edit
                    </Button>
                  </Link>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      handleDelete(eachData.id);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Todo;
