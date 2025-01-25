import React, { useState, useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import ReferralForm from "./ReferralForm";
import ReferralList from "./ReferralList";

function HomePage() {
  const [referrals, setReferrals] = useState([]);

  const loadReferrals = async () => {
    const result = await axios.get("http://localhost:5000/api/referrals");
    setReferrals(result.data);
  };

  useEffect(() => {
    loadReferrals();
  }, []);

  const handleReferralAdded = (newReferral) => {
    setReferrals((prevReferrals) => [...prevReferrals, newReferral]);
  };

  return (
    <Box p={4}>
      <ReferralForm onReferralAdded={handleReferralAdded} />
      <ReferralList referrals={referrals} />
    </Box>
  );
}

export default HomePage;
