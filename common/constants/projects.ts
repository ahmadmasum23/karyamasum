import { ProjectItem } from "../types/projects";

export const PROJECTS_DATA: ProjectItem[] = [
    {
        id: 1,
        title: "Ahmad Masum - Personal Website",
        slug: "ahmadmasum23",
        description: "Personal website built with Next.js, TypeScript, and modern web technologies. Features include portfolio showcase, developer stats, and internationalization support.",
        image: "/images/projects/portomasum.png",
        stacks: ["Next.js", "TypeScript", "TailwindCSS", "framer-motion"],
        link_demo: "",
        link_github: "https://github.com/ahmadmasum23",
        is_show: true,
        is_featured: true,
        content: `## 📘 Introduction

This is my personal website built from scratch since **February 2024** using modern technologies like **Next.js** and **TypeScript**.

I use this platform to:

- Showcase my portfolio and projects
- Share developer resources and stats
- Experiment with new web technologies

The site is continuously evolving. You're welcome to fork or explore the source code. If you find it helpful, consider giving it a ⭐ on GitHub.

Have questions or feedback? I'd love to hear from you 🙌

---

## ⚙️ Tech Stack

This project is powered by:

- ⚛️ **Next.js**
- 🔰 **TypeScript**
- 💠 **Tailwind CSS v3**
- 🦫 **Zustand**
- 〰️ **SWR**
- ➰ **Framer Motion**
- 💢 **React.js Icons**
- 🌐 **Next-Intl (i18n)**
- 📦 **Absolute Imports & Path Alias**
- 📏 **ESLint & Prettier**
- 📌 **Conventional Commit Lint**

---

## 🚀 Features

### 🕗 Wakatime Stats

Displays live coding stats from Wakatime via serverless API routes using \`api/wakatime\`

### 🗳 Project Showcase

Project data is stored in **Supabase PostgreSQL**, and displayed using:

- **ISR (1s revalidation)**
- **SSR for fast access**

### 🌍 Internationalization

Multi-language support with \`next-intl\`
Currently includes Bahasa Indonesia and English.

### 📊 Developer Dashboard

Interactive dashboard showing:

- GitHub contributions
- Wakatime coding hours
- Codewars challenges
- Monkeytype typing speeds

All stats fetched from public APIs and rendered dynamically.`,
    },
    {
        id: 2,
        title: "Chat-M",
        slug: "ChattM",
        description: "Real-time chat application built with React, Socket.IO, and MongoDB. Designed for seamless communication with instant messaging, user authentication, and responsive UI.",
        image: "/images/projects/ChattM.png",
        stacks: ["socketio", "TypeScript", "TailwindCSS", "React.js"],
        link_demo: "",
        link_github: "https://github.com/ahmadmasum23",
        is_show: true,
        is_featured: true,
        content: `## 💬 Chat Website
Ini adalah aplikasi website chat yang dibangun untuk memudahkan komunikasi real-time antar pengguna.

Fitur Utama

- **Real-Time Messaging** - Kirim dan terima pesan secara instan dengan Socket.IO  
- **User Authentication** - Sistem login & register untuk keamanan pengguna  
- **Chat Rooms/Private Chat** - Mendukung percakapan grup maupun pribadi  
- **Media Sharing** - Dapat mengirim gambar dan file dalam obrolan  
- **Responsive Design** - Dapat digunakan di berbagai perangkat (desktop & mobile)  

Teknologi yang Digunakan

- **React.js** untuk membangun antarmuka pengguna interaktif  
- **Socket.IO** untuk komunikasi real-time  
- **MongoDB** untuk penyimpanan data pesan & pengguna  
- **Node.js + Express** sebagai backend server  

Performa

- **Pesan instan tanpa delay**  
- **Skalabilitas tinggi** untuk banyak pengguna sekaligus  
- **Mobile-first design** agar nyaman di perangkat seluler  
- **Aman & terpercaya** dengan autentikasi pengguna`,
    },
    {
        id: 3,
        title: "Islambot",
        slug: "tad-ai",
        description: "Cross-platform Islamic chatbot application built with Flutter, FastAPI, and Supabase. Provides Quran assistance, tafsir, translations, voice interaction, and personalized user experience.",
        image: "/images/projects/islambot.png",
        stacks: ["flutter", "dart", "firebase", "stripe"],
        link_demo: "",
        link_github: "https://github.com/ahmadmasum23",
        is_show: true,
        is_featured: false,
        content: `## 📖 TAD AI - Islam Chatbot App
Aplikasi chatbot Islami yang membantu pengguna dalam belajar Al-Qur’an, tafsir, dan pengetahuan Islam, dibangun dengan Flutter untuk lintas platform.

### Fitur Utama

- **Qur’an Assistance**- Menjawab pertanyaan seputar surah, ayat, tafsir, dan terjemahan  
- **Islamic Knowledge**- Memberikan informasi terkait hukum, doa, dan ilmu dasar Islam  
- **Voice Chat**- Nikmati interaksi dengan bot menggunakan suara (voic-t-text & tex-t-speech)  
- **User Authentication**- Login & register menggunakan Supabase Auth  
- **Personalized Experience**- Menyesuaikan jawaban sesuai kebutuhan pengguna  
- **History Chat**- Menyimpan riwayat percakapan pengguna di database Supabase  

### Implementasi Teknis

- **Flutter Framework** - Pengembangan aplikasi lintas platform (Android & iOS)  
- **FastAPI Backend** - API cepat dan ringan untuk menangani request chatbot  
- **Supabase Database** - PostgreSQL untuk menyimpan user, chat history, dan settings  
- **Supabase Auth** - Autentikasi aman dengan email/password atau social login  
- **Socket.IO/REST API** - Komunikasi real-time & integrasi API eksternal  
- **AI Model Integration** - Alur tanya jawab berbasis AI Islam  

### Performa & Keunggulan

- **Ukuran aplikasi ringan** dan cepat diakses  
- **Waktu respons cepat** (< 2 detik rata-rata)  
- **Desain mobile-first** dengan UI sederhana & ramah pengguna  
- **Akurat & relevan** dalam menjawab pertanyaan seputar Islam  
- **Rating pengguna tinggi** berkat kemudahan dan manfaat aplikasinya`,
            },
    {
        id: 4,
        title: "Quranni",
        slug: "quranni-apps",
        description: "Web-based Quran learning and recitation assistant built with Vue.js. Features include interactive verse display, error marking for murajaah and tahsin, local data storage, and recap results for teachers and students.",
        image: "/images/projects/iqurani.png",
        stacks: ["React.js", "Node.js", "mongodb", "socketio"],
        link_demo: "https://quranni.vercel.app",
        link_github: "https://github.com/ahmadmasum23",
        is_show: true,
        is_featured: false,
        content: `## 📖 Qurani - Quran Memorization & Tahsin Helper
Aplikasi web interaktif untuk membantu murajaah, tahsin, dan hafalan Al-Qur’an. Dibangun dengan Vue.js dan TypeScript, aplikasi ini dirancang agar pengguna bisa membaca Al-Qur’an sekaligus menandai bacaan yang salah saat disimak oleh penyimak.

### Fitur Utama

- **Quran Reader** - Teks Al-Qur’an lengkap dengan tampilan mirip mushaf digital  
- **Error Marking System** - Penyimak dapat menandai kesalahan bacaan pada kata atau ayat tertentu  
- **Start & Finish Session** - Fitur "Mulai" untuk memulai sesi tahsin/murajaah, dan "Selesai" untuk menutup sesi dengan rekap kesalahan  
- **Recap Page** - Hasil rekap kesalahan ditampilkan agar pembaca bisa memperbaiki bacaan  
- **Local Storage Support** - Semua data kesalahan bacaan tersimpan sementara di browser tanpa perlu login  
- **Responsive Design** - Dapat diakses dengan nyaman di desktop maupun mobile  

### Implementasi Teknis

- **Vue.js + TypeScript** - Untuk membangun UI interaktif dan maintainable  
- **Tailwind CSS** - Styling modern dan responsif  
- **LocalStorage API** - Menyimpan data hasil penandaan tanpa server  
- **Quran API Integration** - Mengambil teks dan struktur ayat Al-Qur’an secara dinamis  

### Manfaat & Keunggulan

- Membantu penghafal Al-Qur’an memperbaiki bacaan melalui catatan kesalahan  
- Menyediakan alat bagi penyimak untuk memberi feedback yang lebih rapi  
- Bisa digunakan kapan saja tanpa koneksi backend (offline-friendly)  
- Fokus pada **murajaah & tahsin**, bukan sekadar pembacaan digital`,
    },
    {
        id: 5,
        title: "Todolist",
        slug: "taks-todolist",
        description: "Cross-platform To-Do List application built with Flutter and Supabase. Supports real-time task management, user authentication, and seamless synchronization across devices.",
        image: "/images/projects/listM.png",
        stacks: ["React.js", "Node.js", "mongodb", "socketio"],
        link_demo: "",
        link_github: "https://github.com/ahmadmasum23",
        is_show: true,
        is_featured: false,
        content: `## ✅ To-Do List App
A simple yet powerful task management mobile app built with Flutter and Supabase as the backend. Designed to help users stay productive and organized across devices.

### Key Features

- **Task Management** - Create, update, and delete daily tasks easily  
- **Real-Time Sync** - All data is stored in Supabase and synced across devices  
- **User Authentication** - Secure login and registration powered by Supabase Auth  
- **Priority & Deadlines** - Set task priority and due dates for better productivity  
- **Responsive UI** - Clean and intuitive interface optimized for both Android & iOS  
- **Offline Support** - Local cache ensures smooth usage even without internet  

### Technical Implementation

- **Flutter Framework** - Cross-platform mobile development  
- **Supabase** - Backend for authentication, database, and API services  
- **PostgreSQL Database** - Structured and reliable data storage  
- **Provider / Riverpod** - State management for reactive UI updates  
        - **RESTful APIs** - Efficient communication between client and backend  

### Benefits

- Keeps users organized with real-time synced tasks  
- Lightweight, fast, and accessible anywhere  
- Combines simplicity with modern technology stack  
- Perfect for students, professionals, or anyone managing daily activities`,
    },
];

// Helper functions untuk filtering dan searching
export const getProjectsBySlug = (slug: string): ProjectItem | undefined => {
    return PROJECTS_DATA.find(project => project.slug === slug);
};

export const getFeaturedProjects = (): ProjectItem[] => {
    return PROJECTS_DATA.filter(project => project.is_featured && project.is_show);
};

export const getVisibleProjects = (): ProjectItem[] => {
    return PROJECTS_DATA
        .filter(project => project.is_show)
        .sort((a, b) => {
            // Featured projects first
            if (a.is_featured && !b.is_featured) return -1;
            if (!a.is_featured && b.is_featured) return 1;

            // Then sort by id (newest first)
            return b.id - a.id;
        });
};

export const searchProjects = (searchTerm: string): ProjectItem[] => {
    return PROJECTS_DATA.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.stacks.some(stack => stack.toLowerCase().includes(searchTerm.toLowerCase()))
    );
};
