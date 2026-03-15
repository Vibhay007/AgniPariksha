const axios = require("axios");

const JUDGE0_HOST = process.env.JUDGE0_HOST;
const  RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

exports.executeCode = async (source_code, language_id, stdin) => {
  try {
    const response = await axios.post(
      `https://${JUDGE0_HOST}/submissions?base64_encoded=false&wait=true`,
      {
        source_code,
        language_id,
        stdin
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": RAPIDAPI_KEY,
          "X-RapidAPI-Host": JUDGE0_HOST
        }
      }
    );

    return response.data;

  } catch (error) {
    console.error(
      "Judge0 Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};