import axios from "axios";

import { MONKEYTYPE_ACCOUNT } from "@/common/constants/monkeytype";

const { username, api_key } = MONKEYTYPE_ACCOUNT;

const USER_ENDPOINT = `https://api.monkeytype.com/users/${username}/profile`;

export const getMonkeytypeData = async () => {
  if (!api_key) {
    console.error("Monkeytype API: Missing api_key");
    return { status: 401, data: {}, error: "Missing Monkeytype API key" };
  }

  if (!username) {
    console.error("Monkeytype API: Missing username");
    return { status: 400, data: {}, error: "Missing username" };
  }

  try {
    const response = await axios.get(USER_ENDPOINT, {
      headers: {
        Authorization: `ApeKey ${api_key}`,
      },
      timeout: 10000, // 10 second timeout
    });

    const status = response.status;
    const responseJson = response.data;

    if (status > 400) {
      console.error("Monkeytype API HTTP Error:", status, responseJson);
      return { status, data: {}, error: `HTTP ${status}` };
    }

    return { status, data: responseJson.data };
  } catch (error) {
    console.error("Monkeytype API Request Error:", error);
    if (axios.isAxiosError(error)) {
      return { 
        status: error.response?.status || 500, 
        data: {}, 
        error: error.message 
      };
    }
    return { status: 500, data: {}, error: "Unknown error" };
  }
};
