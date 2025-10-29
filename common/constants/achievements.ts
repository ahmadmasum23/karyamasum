import { AchievementItem } from "../types/achievements";

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 1,
    credential_id: "CERT-001",
    name: "Internship Certificate",
    issuing_organization: "PT Universal Big Data",
    category: "certificate",
    url_credential: "https://ubig.co.id",
    issue_date: "2025-04-24",
    image: "/images/achievements/ubigMG.jpg",
    is_show: true,
  },
  {
    id: 2,
    credential_id: "CERT-002",
    name: "AI Ignition Training",
    issuing_organization: "KUMPUL - AMMAN",
    category: "certificate",
    url_credential: "https://kumpul.id/",
    issue_date: "2025-05-20",
    image: "/images/achievements/ammanAI.jpg",
    is_show: true,
  },
  {
    id: 3,
    credential_id: "CERT-003",
    name: "Azure AI Fundamentals (AI-900)",
    issuing_organization: "Microsoft",
    category: "certificate",
    url_credential: "https://app.kajabi.com/certificates/efb3c8f8",
    issue_date: "2025-06-15",
    image: "/images/achievements/ai-microsft.png",
    is_show: true,
  },
  {
    id: 4,
    credential_id: "CERT-004",
    name: "Peserta Webinar Inventory & Warehouse Management",
    issuing_organization: "UT School",
    category: "certificate",
    url_credential: "https://drive.google.com/file/d/1C456Qf099RrrRn2bPeFCgY5wHKF7KM9b/view?usp=drive_link",
    issue_date: "2025-07-25",
    image: "/images/achievements/ut-scholl.png",
    is_show: true,
  },
  {
    id: 5,
    credential_id: "CERT-05",
    name: "Securing Email Communication",
    issuing_organization: "ID-Networkers",
    category: "certificate",
    url_credential: "https://drive.google.com/file/d/1cAfNYRRK3LdJ2KJvuap_GWYSmMYCCFHJ/view?usp=drive_link",
    issue_date: "2025-08-27",
    image: "/images/achievements/id-network-securingEmail.png",
    is_show: true,
  },
  {
    id: 6,
    credential_id: "CERT-006",
    name: "Building the Future of IT",
    issuing_organization: "ID-Networkers",
    category: "certificate",
    url_credential: "https://drive.google.com/file/d/1S7tOw4yo8bl6J_pPdBSb6kH3oYZJOgZQ/view?usp=sharing",
    issue_date: "2025-09-04",
    image: "/images/achievements/buildingIT.png",
    is_show: true,
  },
  {
    id: 7,
    credential_id: "CERT-007",
    name: "Gemini Certified Educator",
    issuing_organization: "Google Gemini",
    category: "certificate",
    url_credential: "https://edu.google.accredible.com/3bee8019-2530-491c-9563-ed589d0989ec#acc.h5mf3SkJ",
    issue_date: "2025-09-04",
    image: "/images/achievements/gemini-ai.png",
    is_show: true,
  },
  {
    id: 8,
    credential_id: "CERT-008",
    name: "Revou Software Engineer",
    issuing_organization: "RevoU",
    category: "certificate",
    url_credential: "https://drive.google.com/file/d/1OTIS6362GFGBPIjGKszVH2xRTwwcgD8w/view",
    issue_date: "2025-09-19",
    image: "/images/achievements/revOU-softwaree.png",
    is_show: true,
  },
  {
    id: 9,
    credential_id: "CERT-009",
    name: "Revou Data Analyst",
    issuing_organization: "RevoU",
    category: "certificate",
    url_credential: "https://drive.google.com/file/d/1vC8vspzRLaR3junhVm8CTG-YHSI3X34J/view",
    issue_date: "2025-09-26",
    image: "/images/achievements/revOU-dataAnalytics.png",
    is_show: true,
  },
  {
    id: 10,
    credential_id: "CERT-010",
    name: "Revou Digital Marketing",
    issuing_organization: "RevoU",
    category: "certificate",
    url_credential: "https://drive.google.com/file/d/1aWvc3q_tw-6HFFG7KX_1LRZjW1gDqieN/view",
    issue_date: "2025-09-26",
    image: "/images/achievements/revOU-digitalMarctng.png",
    is_show: true,
  },
  {
    id: 11,
    credential_id: "CERT-011",
    name: "Belajar Dasar AI",
    issuing_organization: "Dicoding",
    category: "certificate",
    url_credential: "https://www.dicoding.com/certificates/0LZ05QJ2NX65",
    issue_date: "2025-09-27",
    image: "/images/achievements/dicoding-AI.png",
    is_show: true,
  },
  {
    id: 12,
    credential_id: "CERT-012",
    name: "Sysadmin-Own Your Cloud Journey with Openstack",
    issuing_organization: "ID-Networkers",
    category: "certificate",
    url_credential: "",
    issue_date: "2025-09-27",
    image: "/images/achievements/id-network-cloudjurney.png",
    is_show: true,
  },
  {
    id: 13,
    credential_id: "CERT-013",
    name: "Sysadmin-Router on Proxmox Networking",
    issuing_organization: "ID-Networkers",
    category: "certificate",
    url_credential: "",
    issue_date: "2025-09-27",
    image: "/images/achievements/id-network-proxmox.png",
    is_show: true,
  },

];

// Helper functions untuk filtering
export const getAchievementsByCategory = (category: string): AchievementItem[] => {
  return ACHIEVEMENTS_DATA.filter(item => item.category === category);
};

export const searchAchievements = (searchTerm: string): AchievementItem[] => {
  return ACHIEVEMENTS_DATA.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.issuing_organization.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const getFilteredAchievements = (category?: string, search?: string): AchievementItem[] => {
  let filtered = ACHIEVEMENTS_DATA.filter(item => item.is_show);
  
  if (category) {
    filtered = filtered.filter(item => item.category === category);
  }
  
  if (search) {
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.issuing_organization.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  return filtered.sort((a, b) => b.id - a.id);
};
