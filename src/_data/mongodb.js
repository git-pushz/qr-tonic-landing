const { MongoClient } = require('mongodb');
const Fetch = require('@11ty/eleventy-fetch');

module.exports = async function() {
  // MongoDB connection string from environment variable
  const DB_URI = process.env.MONGODB_URI;
  const DB_NAME = process.env.MONGODB_DB;

  if (!DB_URI) {
    throw new Error('MONGODB_URI environment variable is not set');
  }

  if (!DB_NAME) {
    throw new Error('MONGODB_DB environment variable is not set');
  }

  return await Fetch(async () => {
    const client = new MongoClient(DB_URI);
    
    try {
      await client.connect();
      
      const db = client.db(DB_NAME);
      
      const result = await db.collection('configurations').findOne({ type: 'theme'});
      
      if (!result) {
        console.log(`⚠️ No configuration document found in ${DB_URI} ${DB_NAME}`);
      }
      
      return result;
    } catch (error) {
      throw error;
    } finally {
      await client.close();
    }
  }, {
    duration: "1h",
    type: "json",
    requestId: "mongodb_data"
  });
}; 