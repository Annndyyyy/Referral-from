import React, { useState } from "react";
import { Button, Input, FormControl, FormLabel, Box } from "@chakra-ui/react";
import axios from "axios";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      if (response.data.success) {
        
        alert("Login Successful");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      alert("Error logging in");
    }
  };

  return (
    <Box p={4}>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button mt={4} colorScheme="teal" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
}

export default LoginPage;
