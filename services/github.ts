import axios from "axios";

import { GITHUB_ACCOUNTS } from "@/common/constants/github";

const GITHUB_USER_ENDPOINT = "https://api.github.com/graphql";

const GITHUB_USER_QUERY = `query($username: String!) {
  user(login: $username) {
    contributionsCollection {
      contributionCalendar {
        colors
        totalContributions
        months {
          firstDay
          name
          totalWeeks
        }
        weeks {
          contributionDays {
            color
            contributionCount
            date
          }
          firstDay
        }
      }
    }
  }
}`;

export const fetchGithubData = async (
  username: string,
  token: string | undefined,
) => {
  if (!token) {
    console.error("GitHub API: Missing token");
    return { status: 401, data: {}, error: "Missing GitHub token" };
  }

  try {
    const response = await axios.post(
      GITHUB_USER_ENDPOINT,
      {
        query: GITHUB_USER_QUERY,
        variables: {
          username: username,
        },
      },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
        timeout: 10000, // 10 second timeout
      },
    );

    const status: number = response.status;
    const responseJson = response.data;

    if (status > 400) {
      console.error("GitHub API HTTP Error:", status, responseJson);
      return { status, data: {}, error: `HTTP ${status}` };
    }

    if (responseJson.errors) {
      console.error("GitHub GraphQL Errors:", responseJson.errors);
      return { status: 400, data: {}, error: "GraphQL errors" };
    }

    return { status, data: responseJson.data.user };
  } catch (error) {
    console.error("GitHub API Request Error:", error);
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

export const getGithubData = async () => {
  const { username, token } = GITHUB_ACCOUNTS;
  return await fetchGithubData(username, token);
};
