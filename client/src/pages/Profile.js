import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useMutation, useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { GET_ME } from "../utils/queries";

export default function Profile() {
  const [errorMessage, setErrorMessage] = useState("");

  // Gets the current users data
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || [];

  // When the form is submitted, takes data to pass into the mutation
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  // If the user data hasn't been returned yet return loading
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  return (<div>
      <h1>
          {userData.username}
          </h1>
          <Box>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{
                    mt: 1,
                    backgroundColor: "white",
                    padding: "2px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 700,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                  }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    name="title"
                    autoComplete="title"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="description"
                    label="Description"
                    name="description"
                    autoComplete="description"
                    autoFocus
                  />
                   <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    style={{ backgroundColor: "#082D56", color: "#FFFFFF" }}
                  >
                    Create Project
                  </Button>
                </Box>
                {errorMessage && (
                  <div className="m-4 text-danger">
                    <h4>{errorMessage}</h4>
                  </div>
                )}
              </Box>
       <Button
        variant="contained"
        sx={{ mb: 1, p: 1, mr: 3 }}
        style={{ backgroundColor: "#082D56", color: "#FFFFFF" }}
        onClick={() => {
          Auth.logout();
        }}
      >
        Logout
      </Button>
  </div>);
}
