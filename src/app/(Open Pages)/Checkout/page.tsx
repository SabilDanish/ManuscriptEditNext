"use client"
import React from "react";
import { useEffect, useState } from 'react';

// Step 1: Define an interface for priceDetails
interface PriceDetails {
  amount: number;
  product: string;
}

function page() {
  // Step 2: Use the PriceDetails interface in useState
  const [priceDetails, setPriceDetails] = useState<PriceDetails | null>(null);

  useEffect(() => {
    // Retrieve the price details from localStorage
    const storedPriceDetails = localStorage.getItem('priceDetails');
    
    if (storedPriceDetails) {
      // Parse the JSON data from localStorage
      const parsedPriceDetails: PriceDetails = JSON.parse(storedPriceDetails);
      setPriceDetails(parsedPriceDetails);  // Set the parsed data to the state
    }
  }, []);

  return (
    <div>
      <h1>Checkout</h1>
      {priceDetails ? (
        <div>
          <p>Product: {priceDetails.product}</p>
          <p>Amount: ${priceDetails.amount}</p>
        </div>
      ) : (
        <p>Loading price details...</p>
      )}
    </div>
  );
}

export default page;
