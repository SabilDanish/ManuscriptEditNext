"use client";
import { useEffect, useState } from "react";

export function useTimezone() {
  const [countryCode, setCountryCode] = useState("US"); // Default to US

  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Check if the user is in India based on timezone
    if (timezone === "Asia/Calcutta") {
      setCountryCode("IN");
    } else {
      setCountryCode("US"); // Default for all other users
    }
  }, []);

  return { countryCode };
}
