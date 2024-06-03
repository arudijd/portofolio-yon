const projects = [
   {
      id: "PRO001",
      title: "Belajar Bahasa Korea, Hingga Kesempatan Pergi Ke Korea",
      projectName: "Oppa Akademi",
      year: "2023",
      img: "oa-small",
      url: "/project/oppa-akademi",
   },
   {
      id: "PRO002",
      title: "Solusi Hukum Tanpa Ribet Layanan Konsultasi Hukum Online Yang Cepat & Tepat",
      projectName: "YR Consultindo",
      year: "2023",
      img: "yr-small",
      url: "/project/yr-consultant",
   },
   {
      id: "PRO003",
      title: "Mengukur kefasihan dalam berbahasa Korea dengan beberapa level",
      projectName: "LETI",
      year: "2023",
      img: "leti-small",
      url: "/project/leti",
   },
   {
      id: "PRO004",
      title: "Temukan berbagai kelas menarik mulai dari level pemula hingga profesional",
      projectName: "skills.id",
      year: "2019",
      img: "skills-id-small",
      url: "/project/skills-id",
   },
   {
      id: "PRO005",
      title: "Memudahkan segala kebutuhan karier professional dalam satu genggaman.",
      projectName: "topcareer.id",
      year: "2019",
      img: "top-career-small",
      url: "/project/top-career",
   },
   {
      id: "PRO006",
      title: "Dunia IoT dengan pemikiran dan tindakan kreatif serta pengembangan teknologi inovatif.",
      projectName: "3ALOGIC",
      year: "2024",
      img: "3alogic-small",
      url: "",
   },
];

const caseDesigns = [
   {
      id: "CD001",
      title: "Merancang Perhitungan Kalkulator Pajak Dengan Regulasi 2024",
      projectName: "Taxkita",
      year: "2024",
      img: "taxkita-big",
      url: "/case-design/taxkita",
   },
   {
      id: "CD002",
      title: "Menciptakan Pengalaman Membaca dan Membeli Buku yang Fleksibel",
      projectName: "Ara eBook",
      year: "2023",
      img: "araebook-big",
      url: "/case-design/araebook",
   },
   {
      id: "CD003",
      title: "Mekanisme Belajar Yang Efektif Serta Menciptakan Interaksi Dalam Belajar",
      projectName: "Pintu Kita",
      year: "2024",
      img: "pintukita-big",
      url: "/case-design/pintu-kita",
   },
   {
      id: "CD004",
      title: "Platform Efektif Untuk Kemudahan Kunjungan Museum di Jakarta",
      projectName: "KeMuseum",
      year: "2022",
      img: "kemuseum-big",
      url: "/case-design/ke-museum",
   },
   {
      id: "CD005",
      title: "Pengalaman Baru Untuk Kemudahan Pendakian & Ekspedisimu",
      projectName: "Ruang Ancala",
      year: "2023",
      img: "ruang-ancala-big",
      url: "",
   },
];

const anotherWork = [
   {
      id: "SP001",
      title: "Logo Design",
      img: "logo-design-side",
      description:
         "Menampilkan logo-logo yang dibuat dari permintaan client baik dari perusahan maupun perorangan",
      url: "https://www.behance.net/gallery/198440275/TAXKITA-Logo",
   },
   {
      id: "SP002",
      title: "Youtube Channel Video",
      img: "youtube-channel-video-side",
      description:
         "Konten-konten video di beberapa chanel Youtube, salah satunya adalah chanel BW Lawnge",
      url: "",
   },
   {
      id: "SP003",
      title: "Event Video",
      img: "event-video-side",
      description:
         "Video kegiatan acara-acara besar yang dikemas dalam bentuk video dokumentasi atupun Aftermovie. Video acara besar seperti Kartini Run hingga Guinness World Record. Video diproduksi untuk keperluan client maupun media-media ",
      url: "https://www.behance.net/gallery/94282983/WASI-Project",
   },
   {
      id: "SP004",
      title: "Series & Reality Show",
      img: "series-&-reality-show-side",
      description:
         "Merupakan program original dari HJ Production yang mana merupakan film series bergenre horor dan beberapa Reality show yang tayang di Televisi seperti di ANTV",
      url: "",
   },
   {
      id: "SP005",
      title: "Social Media Design",
      img: "social-media-design-side",
      description:
         "Visualisasi untuk platform media sosial seperti Instagram, Facebook, TikTok, Twitter, dan lainnya. Ini termasuk postingan, cerita, gambar profil, grafik, dan visual lainnya untuk membantu mendukung strategi konten dalam medium media sosial",
      url: "",
   },
   {
      id: "SP006",
      title: "Character Illustration",
      img: "character-illustration-side",
      description:
         "Merupakan Original Character bernama Noy-Noy, karakter tersebut diciptakan tahun 2015.",
      url: "",
   },
   {
      id: "SP007",
      title: "Book Illustration",
      img: "book-illustration-side",
      description: "",
      url: "",
   },
   {
      id: "SP008",
      title: "Infografis Design",
      img: "infografis-side",
      description:
         "Representasi visual informasi, data atau ilmu pengetahuan secara grafis, dengan topik yang beragam dikemas secara visual.",
      url: "",
   },
   {
      id: "SP009",
      title: "Poster Design",
      img: "poster-side",
      description:
         "Design poster mengenai berbagai macam kegiatan dari kegiatan korporat maupun poster untuk submit pameran",
      url: "",
   },
   {
      id: "SP010",
      title: "Illustration",
      img: "illustration-side",
      description:
         "Illustrasi hasil eksplorasi maupun illustrasi untuk di implementasi ke tshirt maupun sticker",
      url: "",
   },
   {
      id: "SP011",
      title: "Educational Video",
      img: "educational-video-side",
      description:
         "Video dalam bentuk materi pembelajaran diperuntukan untuk siswa, mahasiswa maupun untuk lembaga pelatihan",
      url: "",
   },
   {
      id: "SP012",
      title: "Langit Musik",
      img: "langit-musik-side",
      description:
         "Video untuk kebutuhan aplikasi streaming musik asli Indonesia yang juga di tayangkan di Youtube chanel Langit Musik, Kerjasama antara Langit Musik & HJ Production ini juga memiliki segmen khusus yaitu BISIK (Bincang Asik Tentang Musik)",
      url: "https://www.youtube.com/@LangitMusik/videos",
   },
];

const getAllProject = () => {
   return projects;
};

const getRandomProject = () => {
   let newProjects = [];
   while (newProjects.length < 4) {
      const randomIndex = Math.floor(Math.random() * projects.length);
      if (
         newProjects.find(
            (project) => project.id === projects[randomIndex].id,
         ) === undefined
      ) {
         newProjects.push(projects[randomIndex]);
      }
   }

   return newProjects;
};

const getCertainProject = (arrayID = []) => {
   if (arrayID.length === 0) {
      return projects;
   } else {
      let resultProject = [];
      arrayID.forEach((id) => {
         resultProject.push(projects.find((project) => project.id === id));
      });
      return resultProject;
   }
};

const getAllCaseDesign = () => {
   return caseDesigns;
};

const getRandomCaseDesign = () => {
   let newCaseDesigns = [];
   while (newCaseDesigns.length < 4) {
      const randomIndex = Math.floor(Math.random() * caseDesigns.length);
      if (
         newCaseDesigns.find(
            (caseDesign) => caseDesign.id === caseDesigns[randomIndex].id,
         ) === undefined
      ) {
         newCaseDesigns.push(caseDesigns[randomIndex]);
      }
   }

   return newCaseDesigns;
};

const getCertainCaseDesign = (arrayID = []) => {
   if (arrayID.length === 0) {
      return caseDesigns;
   } else {
      let resultCaseDesigns = [];
      arrayID.forEach((id) => {
         resultCaseDesigns.push(
            caseDesigns.find((caseDesign) => caseDesign.id === id),
         );
      });
      return resultCaseDesigns;
   }
};

const getAllAnotherWork = () => {
   let newAnotherWork = [];
   const chunkSize = 4;
   let id = 1;
   for (let i = 0; i < anotherWork.length; i += chunkSize) {
      let splicingArray = anotherWork.slice(i, i + chunkSize);
      newAnotherWork.push({ id: `CW00${id}`, data: splicingArray });
      id++;
   }
   return newAnotherWork;
};

const getRandomAnotherWork = () => {
   let newAnotherWork = [];
   while (newAnotherWork.length < 6) {
      const randomIndex = Math.floor(Math.random() * anotherWork.length);
      if (
         newAnotherWork.find(
            (work) => work.id === anotherWork[randomIndex].id,
         ) === undefined
      ) {
         newAnotherWork.push(anotherWork[randomIndex]);
      }
   }

   return newAnotherWork;
};

export {
   getAllProject,
   getRandomProject,
   getCertainProject,
   getAllCaseDesign,
   getRandomCaseDesign,
   getCertainCaseDesign,
   getAllAnotherWork,
   getRandomAnotherWork,
};
