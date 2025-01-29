// pages/api/ip-check.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  // Your API Access Key from apiip
  const API_KEY = process.env.API_KEY; // Store your key in .env.local for safety
  const { ip } = req.query; // Get IP from query parameters
  
  if (!ip) {
    return res.status(400).json({ error: 'IP address is required' });
  }
  
  const url = `https://apiip.net/api/check?ip=${ip}&accessKey=${API_KEY}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.success === false) {
      return res.status(500).json(data);
    }
    
    res.status(200).json(data); // Return the API data as JSON to the client
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from API' });
  }
}
