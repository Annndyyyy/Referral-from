import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import axios from "axios";

function ReferralList({ referrals }) {
  const handleStatusUpdate = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/referrals/${id}/status`, {
        status,
      });
      alert("Status updated");
    } catch (error) {
      alert("Error updating status");
    }
  };

  return (
    <Box mt={6}>
      <Text fontSize="xl" mb={4}>
        Referral List
      </Text>
      {referrals.map((referral) => (
        <Box key={referral._id} mb={4}>
          <Text>Name: {referral.name}</Text>
          <Text>Email: {referral.email}</Text>
          <Text>Experience: {referral.experience}</Text>
          <Text>Status: {referral.status}</Text>
          <Button
            colorScheme="teal"
            onClick={() =>
              handleStatusUpdate(referral._id, "Evaluated")
            }
          >
            Set to Evaluated
          </Button>
        </Box>
      ))}
    </Box>
  );
}

export default ReferralList;
