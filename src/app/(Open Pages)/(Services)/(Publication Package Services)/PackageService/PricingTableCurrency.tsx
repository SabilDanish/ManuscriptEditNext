"use client";
import { useTimezone } from "@/app/_Common/UseTimezone/UseTimeZone";
import { MANUAL_EXCHANGE_RATE } from "@/app/_Common/MANUAL_EXCHANGE_RATE/MANUAL_EXCHANGE_RATE";

const PricingTable = () => {
  const { countryCode } = useTimezone(); 
  const currency = countryCode === "IN" ? "INR" : "USD";
  const exchangeRate = countryCode === "IN" ? MANUAL_EXCHANGE_RATE : 1;

  const priceInUSD = 100; 
  const finalPrice = priceInUSD * exchangeRate;

  return (
    <div>
      <h2>Pricing</h2>
      <p>Price: {finalPrice.toFixed(2)} {currency}</p>
    </div>
  );
};

export default PricingTable;
