import React, { useState } from "react";
import { Box, Input, Button, Select, FormControl, FormLabel, Text } from "@chakra-ui/react";
import axios from "axios";

function ReferralForm({ onReferralAdded }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [status, setStatus] = useState("New");
  const [resume, setResume] = useState(null);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("experience", experience);
    formData.append("status", status);
    formData.append("resume", resume);

    try {
      const response = await axios.post("http://localhost:5000/api/referrals", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      onReferralAdded(response.data); 
      setName("");
      setEmail("");
      setExperience("");
      setStatus("New");
      setResume(null);
    } catch (error) {
      alert("Error creating referral");
    }
  };

  return (
    <Box p={4}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Experience</FormLabel>
        <Input type="text" value={experience} onChange={(e) => setExperience(e.target.value)} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Status</FormLabel>
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="New">New</option>
          <option value="Evaluated">Evaluated</option>
          <option value="Hired">Hired</option>
          <option value="Rejected">Rejected</option>
        </Select>
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Upload Resume</FormLabel>
        <Input type="file" onChange={handleFileChange} />
      </FormControl>
      <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
        Submit Referral
      </Button>
    </Box>
  );
}

export default ReferralForm;
