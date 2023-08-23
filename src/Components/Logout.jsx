import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Logout() {

  let navigate = useNavigate()

  useEffect(() => {
    // clear all of session storage
    const logout = setTimeout(() => {
      console.log("Logging out...")
      sessionStorage.clear()
      navigate("/")
    }, 3000);
  
    return () => {
      clearTimeout(logout)
    }
  }, [navigate])
  


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
      <Typography color={"black"}>You will be logged out and redirected in 3 seconds...</Typography>
    </Box>
  );
}
