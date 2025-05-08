
const axios = require('axios');

module.exports = async (req, res) => {
  console.log('Incoming request to /api/aem-page (mocked)');

  try {
    // Simulate the structure from your actual model.json
    const mockData = {
      title: "ixhello Integration Demo",
      teaser: {
        title: "Epic Journey",
        description: "Don't stop half way, go for the top!"
      }
    };

    res.json(mockData);
  } catch (err) {
    console.error('Error serving mock data:', err.message);
    res.status(500).json({ error: 'Mock data failed', detail: err.message });
  }
};