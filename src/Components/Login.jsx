import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    console.log(data);

    fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Response: ", json.success);
      });

    // navigate('/')
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        minWidth: 350,
        p: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        name="email"
        label="email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <TextField
        id="outlined-basic"
        type="password"
        name="password"
        label="password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Box>
  );
}
