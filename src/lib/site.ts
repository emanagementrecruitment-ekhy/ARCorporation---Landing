// Data resmi perusahaan. Ubah di sini saja; dipakai oleh CTA, Footer, dan tombol WhatsApp.
export const SITE = {
  name: "AR Corporation",
  email: "Official.Arcorporation@gmail.com",
  phoneDisplay: "0881-02545-8888",
  phoneTel: "+62881025458888",
  whatsapp: "62881025458888", // format internasional tanpa + dan tanpa 0 di depan
  addresses: [
    {
      label: "Office",
      text: "Komp. Ruko Kota Indah Jl. Pangeran Jayakarta No.5 Blok B4, RT.1/RW.2, Pinangsia, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta, Indonesia 11110",
    },
    {
      label: "Cabang",
      text: "Jl. Sultan Iskandar Muda No.7D, RT.9/RW.9, Kby. Lama Sel., Kec. Kebayoran Lama, Kota Jakarta",
    },
  ],
  // Isi URL asli untuk menampilkan ikon. Yang kosong ("") tidak ditampilkan.
  socials: {
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
} as const;

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

// Saklar tampil/sembunyi. Ubah ke true setelah data real (bukan contoh) tersedia.
export const SHOW = {
  metrics: true,
  caseStudies: false,
  testimonials: false,
} as const;

// Tautan toko aplikasi. Isi URL saat aplikasi sudah terbit; yang kosong tidak ditampilkan.
export const APPS = {
  playStore: "",
  appStore: "",
  accessLink: waLink("Halo, saya ingin meminta akses aplikasi AR Corporation."),
};
