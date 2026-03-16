export const UMAMI_ACCOUNT = {
  username: "AhmadMasum",
  api_key: process.env.UMAMI_API_KEY,
  base_url: "https://api.umami.is/v1/websites",
  endpoint: {
    page_views: "/pageviews",
    sessions: "/sessions/stats",
  },
  // parameters: {
  //   startAt: 1717174800000, // 1 Juni 2024 00:00 WIB
  //   endAt: 1767190799000, // 31 Desember 2025 23:59 WIB
  //   unit: "month",
  //   timezone: "Asia/Jakarta",
  // },
    parameters: {
    startAt: 0, // 1 Juni 2024 00:00 WIB
    endAt:Date.now(), // 31 Desember 2025 23:59 WIB
    unit: "day",
    timezone: "Asia/Jakarta",
  },
  is_active: true,
  websites: [
    {
      domain: "ahmadmasum",
      website_id: process.env.UMAMI_WEBSITE_ID_SITE,
      umami_url:
        "https://cloud.umami.is/analytics/us/share/7MP97rlSI9k03Ahi",
    },
  ],
};

