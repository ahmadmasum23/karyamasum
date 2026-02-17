import { ProjectItem } from "../types/projects";

export const PROJECTS_DATA: ProjectItem[] = [
    {
        id: 1,
        title: "Ahmad Masum – Fullstack Developer Portfolio",
        slug: "ahmadmasum23",
        description: "Website pribadi yang dibangun menggunakan Next.js, TypeScript, dan teknologi web modern. Menampilkan portofolio, statistik developer, serta dukungan multi-bahasa.",
        image: "/images/projects/webporto.png",
        stacks: ["Next.js", "TypeScript", "TailwindCSS", "framer-motion"],
        link_demo: "https://ahmadmasum.vercel.app",
        link_github: "https://github.com/ahmadmasum23",
        is_show: true,
        is_featured: true,
        content: `## 🌐 Tentang Website Ini

Website ini adalah website pribadi yang saya gunakan sebagai media untuk memperkenalkan diri secara profesional di dunia digital.

Melalui website ini, pengunjung dapat:

- Mengenal saya lebih jauh
- Melihat daftar proyek yang pernah saya kerjakan
- Melihat pencapaian dan pengalaman saya
- Mengakses arsip proyek (project archive)
- Menghubungi saya melalui halaman kontak

Website ini dibangun menggunakan **Next.js**, **TypeScript**, dan berbagai teknologi web modern lainnya untuk memberikan performa yang cepat, tampilan yang responsif, serta pengalaman pengguna yang nyaman.

Selain itu, website ini juga mendukung **multi-bahasa (Bahasa Indonesia & English)** agar dapat diakses oleh audiens yang lebih luas.

Tujuan utama website ini adalah sebagai representasi digital dari perjalanan belajar dan pengembangan saya di bidang teknologi, sekaligus menjadi tempat untuk menampilkan karya, eksperimen, dan perkembangan skill saya dari waktu ke waktu.`
    },
    {
        id: 2,
        title: "ChatM – Fullstack Real Time Messaging App",
        slug: "ChattM",
        description: "Aplikasi chat real-time berbasis web yang dibangun menggunakan React, Socket.IO, dan MongoDB untuk menghadirkan komunikasi instan yang cepat dan responsif.",
        image: "/images/projects/ChattM.png",
        stacks: ["socketio", "TailwindCSS", "React.js"],
        link_demo: "",
        link_github: "https://github.com/ahmadmasum23",
        is_show: true,
        is_featured: false,
        content: `## 💬 Chat-M – Aplikasi Chat Real-Time

Chat-M adalah aplikasi website chat yang saya kembangkan untuk memungkinkan komunikasi real-time antar pengguna secara cepat dan efisien.

Aplikasi ini dirancang untuk memberikan pengalaman berkirim pesan yang instan, aman, dan nyaman digunakan di berbagai perangkat.

### 🚀 Fitur Utama

- **Pesan Real-Time** – Mengirim dan menerima pesan secara langsung tanpa perlu refresh halaman  
- **Autentikasi Pengguna** – Sistem login dan registrasi untuk menjaga keamanan akun  
- **Ruang Obrolan & Chat Pribadi** – Mendukung percakapan grup maupun pesan langsung antar pengguna  
- **Berbagi Media** – Pengguna dapat mengirim gambar atau file dalam percakapan  
- **Tampilan Responsif** – Dapat digunakan dengan nyaman di desktop maupun perangkat mobile  

### ⚙️ Teknologi yang Digunakan

- **React.js** – Membangun antarmuka pengguna yang interaktif  
- **Socket.IO** – Menangani komunikasi real-time berbasis WebSocket  
- **MongoDB** – Menyimpan data pengguna dan riwayat pesan  
- **Node.js & Express** – Backend server untuk mengelola API dan koneksi  

### 🎯 Tujuan Proyek

Proyek ini dibuat sebagai eksplorasi dalam membangun sistem komunikasi real-time serta memahami cara kerja WebSocket, autentikasi pengguna, dan manajemen database dalam aplikasi modern berbasis web.`
    },
    {
        id: 3,
        title: "Islambot – Flutter AI Powered Islamic Assistant",
        slug: "tad-ai",
        description: "Aplikasi chatbot Islami lintas platform yang dibangun menggunakan Flutter, FastAPI, dan Supabase untuk membantu pengguna mempelajari Al-Qur’an, tafsir, dan pengetahuan Islam secara interaktif.",
        image: "/images/projects/islambot.png",
        stacks: ["Flutter", "Supabase", "FastAPI"],
        link_demo: "",
        link_github: "https://github.com/ahmadmasum23",
        is_show: true,
        is_featured: false,
        content: `## 📖 Islambot – Aplikasi Chatbot Islam

Islambot adalah aplikasi chatbot Islami yang saya kembangkan untuk membantu pengguna dalam memahami Al-Qur’an, tafsir, dan berbagai pengetahuan dasar Islam secara praktis dan interaktif.

Aplikasi ini dirancang agar pengguna dapat bertanya secara langsung dan mendapatkan jawaban yang relevan dengan cepat, baik melalui teks maupun suara.

### 🚀 Fitur Utama

- **Bantuan Al-Qur’an** – Menjawab pertanyaan seputar surah, ayat, tafsir, dan terjemahan  
- **Pengetahuan Islam** – Memberikan informasi terkait doa, hukum dasar, dan materi keislaman  
- **Interaksi Suara** – Mendukung fitur voice-to-text dan text-to-speech untuk pengalaman yang lebih natural  
- **Autentikasi Pengguna** – Sistem login dan registrasi menggunakan Supabase Auth  
- **Riwayat Percakapan** – Menyimpan history chat pengguna secara aman di database  
- **Pengalaman Personal** – Jawaban dapat disesuaikan berdasarkan konteks pertanyaan pengguna  

### ⚙️ Teknologi yang Digunakan

- **Flutter** – Pengembangan aplikasi lintas platform (Android & iOS)  
- **FastAPI** – Backend API yang cepat dan efisien  
- **Supabase** – Database PostgreSQL dan sistem autentikasi  
- **Python** – Pengolahan logika backend dan integrasi AI  
- **REST API & Real-time Communication** – Integrasi layanan eksternal  

### 🎯 Tujuan Proyek

Proyek ini dibuat sebagai inovasi dalam menggabungkan teknologi AI dengan pembelajaran Islam, sehingga pengguna dapat memperoleh informasi yang cepat, akurat, dan mudah dipahami melalui perangkat mobile.  

Islambot menjadi salah satu bentuk eksplorasi saya dalam pengembangan aplikasi AI berbasis edukasi dengan pengalaman pengguna yang sederhana namun powerful.`
    },
    {
        id: 4,
        title: "Quranni – Quran Memorization Companion",
        slug: "quranni-apps",
        description: "Aplikasi web pembelajaran dan asisten murajaah Al-Qur’an berbasis Vue.js yang dilengkapi sistem penandaan kesalahan, rekap evaluasi, dan penyimpanan data lokal.",
        image: "/images/projects/iqurani.png",
        stacks: ["Vue.js", "Supabase", "React.js", "TypeScript"],
        link_demo: "https://quranni.vercel.app",
        link_github: "https://github.com/ahmadmasum23",
        is_show: true,
        is_featured: false,
        content: `## 📖 Quranni – Asisten Murajaah & Tahsin Al-Qur’an

Quranni adalah aplikasi web interaktif yang dirancang untuk membantu proses murajaah (mengulang hafalan) dan tahsin (memperbaiki bacaan) Al-Qur’an.  

Aplikasi ini memungkinkan pengguna membaca ayat Al-Qur’an secara digital, sementara penyimak dapat langsung menandai kesalahan bacaan selama sesi berlangsung.

### 🚀 Fitur Utama

- **Pembaca Al-Qur’an Digital** – Menampilkan teks Al-Qur’an dengan tampilan yang nyaman dan terstruktur  
- **Sistem Penandaan Kesalahan** – Penyimak dapat menandai kata atau ayat yang salah saat sesi berlangsung  
- **Mulai & Selesai Sesi** – Mengatur sesi murajaah/tahsin dengan rekap hasil di akhir  
- **Halaman Rekap Evaluasi** – Menampilkan daftar kesalahan agar pembaca dapat memperbaiki bacaannya  
- **Penyimpanan Lokal (Local Storage)** – Data kesalahan disimpan sementara di browser tanpa perlu login  
- **Desain Responsif** – Nyaman digunakan di perangkat desktop maupun mobile  

### ⚙️ Teknologi yang Digunakan

- **Vue.js + TypeScript** – Membangun antarmuka yang interaktif dan terstruktur  
- **Tailwind CSS** – Styling modern dan responsif  
- **LocalStorage API** – Penyimpanan data di sisi klien tanpa backend  
- **Integrasi API Al-Qur’an** – Mengambil teks dan struktur ayat secara dinamis  

### 🎯 Tujuan Pengembangan

Quranni dikembangkan untuk mempermudah proses evaluasi hafalan Al-Qur’an secara digital. Aplikasi ini membantu penyimak memberikan catatan yang lebih rapi dan sistematis, serta memudahkan penghafal dalam memperbaiki kesalahan bacaan.  

Fokus utama aplikasi ini adalah mendukung proses **murajaah dan tahsin**, bukan sekadar sebagai pembaca Al-Qur’an digital.

Link Website versi terbaru: https://qurani-five.vercel.app
`
    },
    {
        id: 5,
        title: "Todolist – Productivity & Task Tracking App",
        slug: "taks-todolist",
        description: "Aplikasi To-Do List lintas platform yang dibangun dengan Flutter dan Supabase, mendukung manajemen tugas secara real-time dengan sinkronisasi antar perangkat.",
        image: "/images/projects/listM.png",
        stacks: ["Flutter", "Supabase"],
        link_demo: "",
        link_github: "https://github.com/ahmadmasum23",
        is_show: true,
        is_featured: false,
        content: `## ✅ Aplikasi To-Do List

Aplikasi To-Do List adalah aplikasi manajemen tugas berbasis mobile yang dikembangkan menggunakan Flutter dan Supabase sebagai backend. Aplikasi ini dirancang untuk membantu pengguna tetap produktif dan terorganisir dalam mengelola aktivitas sehari-hari.

### 🚀 Fitur Utama

- **Manajemen Tugas** – Membuat, mengedit, dan menghapus tugas dengan mudah  
- **Sinkronisasi Real-Time** – Data tersimpan di Supabase dan tersinkron otomatis antar perangkat  
- **Autentikasi Pengguna** – Sistem login dan registrasi yang aman menggunakan Supabase Auth  
- **Prioritas & Tenggat Waktu** – Mengatur tingkat prioritas dan deadline untuk setiap tugas  
- **Antarmuka Responsif** – Tampilan bersih dan intuitif untuk Android dan iOS  
- **Dukungan Offline** – Penyimpanan cache lokal agar tetap bisa digunakan tanpa koneksi internet  

### ⚙️ Implementasi Teknis

- **Flutter** – Pengembangan aplikasi mobile lintas platform  
- **Supabase** – Backend untuk autentikasi, database, dan layanan API  
- **PostgreSQL** – Penyimpanan data terstruktur dan andal  
- **State Management (Provider / Riverpod)** – Mengelola pembaruan data secara reaktif  
- **RESTful API** – Komunikasi efisien antara aplikasi dan backend  

### 🎯 Manfaat Aplikasi

- Membantu pengguna tetap terorganisir dengan sinkronisasi tugas secara real-time  
- Ringan, cepat, dan dapat diakses kapan saja  
- Menggabungkan kesederhanaan dengan teknologi modern  
- Cocok untuk pelajar, profesional, maupun pengguna umum dalam mengatur aktivitas harian`
    },
    {
        id: 6,
        title: "QuickPOS – Flutter Management Cashier System",
        slug: "quickpos",
        description: "Aplikasi Point of Sale (POS) modern yang dibangun dengan Flutter dan Supabase untuk membantu toko mengelola transaksi, produk, dan pelanggan secara efisien dengan sinkronisasi real-time.",
        image: "/images/projects/QuickPos.png",
        stacks: ["Flutter", "Supabase", "PostgreSQL"],
        link_demo: "",
        link_github: "https://github.com/ahmadmasum23",
        is_show: true,
        is_featured: false,
        content: `## 💳 QuickPOS – Sistem Kasir Berbasis Flutter

QuickPOS adalah aplikasi Point of Sale (POS) yang dikembangkan menggunakan Flutter dengan Supabase sebagai backend. Aplikasi ini dirancang untuk membantu pelaku usaha dan pemilik toko dalam mengelola operasional harian secara mudah, cepat, dan efisien.

### 🚀 Fitur Utama

- **Manajemen Transaksi** – Membuat dan memproses transaksi pelanggan dengan cepat  
- **Manajemen Produk** – Menambahkan, mengedit, mengelompokkan, dan mengelola data produk  
- **Manajemen Pelanggan** – Menyimpan dan mengatur data pelanggan  
- **Sinkronisasi Real-Time** – Data tersimpan dan diperbarui secara langsung melalui Supabase  
- **Autentikasi Pengguna** – Sistem login aman dengan Supabase Auth  
- **Antarmuka Cepat & Responsif** – Menggunakan GetX untuk manajemen state yang efisien  
- **Laporan & Rekap Penjualan** – Ringkasan penjualan harian dan bulanan  

### ⚙️ Implementasi Teknis

- **Flutter** – Pengembangan aplikasi mobile lintas platform  
- **Supabase** – Backend untuk autentikasi, database, dan sinkronisasi real-time  
- **PostgreSQL** – Penyimpanan data yang terstruktur dan andal  
- **GetX** – Manajemen state, routing, dan dependency injection  
- **RESTful API** – Komunikasi efisien antara aplikasi dan backend  

### 🎯 Manfaat Aplikasi

- Membantu pemilik usaha mengelola transaksi dengan lebih terstruktur  
- Ringan, cepat, dan cocok digunakan sebagai sistem kasir mobile  
- Menggunakan teknologi modern dengan sinkronisasi data real-time  
- Ideal untuk UMKM, toko kecil, dan sistem kasir digital`
    },
    {
        id: 7,
        title: "siPinjam - Flutter Equipment Borrowing System",
        slug: "siPinjam",
        description: "Aplikasi manajemen peminjaman barang modern yang dibangun dengan Flutter dan Supabase untuk membantu institusi mengelola data peminjaman, pengembalian, dan inventaris secara efisien dengan sinkronisasi real-time.",
        image: "/images/projects/siPinjam.png",
        stacks: ["Flutter", "Supabase", "PostgreSQL"],
        link_demo: "",
        link_github: "https://github.com/ahmadmasum23",
        is_show: true,
        is_featured: false,
        content: `## 📦 siPinjam – Sistem Manajemen Peminjaman Barang

siPinjam adalah aplikasi manajemen peminjaman barang yang dikembangkan menggunakan Flutter dengan Supabase sebagai backend. Aplikasi ini dirancang untuk membantu sekolah, kampus, maupun organisasi dalam mengelola proses peminjaman dan pengembalian barang secara lebih terstruktur dan efisien.

### 🚀 Fitur Utama

- **Manajemen Peminjaman** – Membuat, menyetujui, dan melacak proses peminjaman barang  
- **Pelacakan Pengembalian** – Memantau status pengembalian dan pembaruan data secara real-time  
- **Manajemen Barang** – Menambah, mengedit, mengelompokkan, dan mengelola data inventaris  
- **Data Peminjam** – Menyimpan dan mengatur informasi peminjam  
- **Sinkronisasi Real-Time** – Data tersimpan dan diperbarui langsung melalui Supabase  
- **Autentikasi & Hak Akses** – Sistem login aman dengan pengaturan role pengguna  
- **Riwayat & Laporan** – Menyediakan histori peminjaman dan rekap laporan  

### ⚙️ Implementasi Teknis

- **Flutter** – Pengembangan aplikasi mobile lintas platform  
- **Supabase** – Backend untuk autentikasi, database, dan sinkronisasi data  
- **PostgreSQL** – Penyimpanan data yang terstruktur dan andal  
- **GetX** – Manajemen state, routing, dan dependency injection  
- **RESTful API** – Komunikasi efisien antara aplikasi dan backend  

### 🎯 Manfaat Aplikasi

- Membantu institusi mengelola inventaris dan peminjaman secara digital  
- Mengurangi kesalahan pencatatan manual  
- Ringan, responsif, dan cocok digunakan melalui perangkat mobile  
- Menggunakan teknologi modern dengan sinkronisasi data real-time`
    }



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
