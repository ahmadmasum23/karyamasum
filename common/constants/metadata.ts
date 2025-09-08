export const METADATA = {
  creator: "Ahmad Ma'sum",
  description: "Personal website, portfolio, blog",
  keyword: "masum, Ahmad Ma'sum",
  authors: {
    name: "Ahmad Ma'sum",
    url: process.env.DOMAIN || process.env.NEXTAUTH_URL || "http://localhost:3000",
  },
  openGraph: {
    url: process.env.DOMAIN || process.env.NEXTAUTH_URL || "http://localhost:3000",
    siteName: "Ahmad Ma'sum",
    locale: "id-ID",
  },
  exTitle: "| Ahmad Ma'sum",
  profile: "/images/masum-4.jpg",
};
