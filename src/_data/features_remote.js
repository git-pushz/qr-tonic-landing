const Fetch = require('@11ty/eleventy-fetch');
require('dotenv').config();

module.exports = async function() {
  const CONFIGURATION_ENDPOINT = process.env.CONFIGURATION_ENDPOINT;

  if (!CONFIGURATION_ENDPOINT) {
    throw new Error('CONFIGURATION_ENDPOINT environment variable is not set');
  }

  try {
    const data = await Fetch(CONFIGURATION_ENDPOINT, {
      duration: "1d",
      type: "json"
    });
    
    console.log('Fetched data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}; 