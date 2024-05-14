let projects = [
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
      title: "Dunia IoT dengan pemikiran dan tindakan kreatif serta pengembangan teknologi inovatif.",
      projectName: "3ALOGIC",
      year: "2024",
      img: "3alogic-small",
      url: "",
   },
   {
      id: "PRO005",
      title: "Temukan berbagai kelas menarik mulai dari level pemula hingga profesional",
      projectName: "skills.id",
      year: "2019",
      img: "skills-id-small",
      url: "/project/skills-id",
   },
   {
      id: "PRO006",
      title: "Memudahkan segala kebutuhan karier professional dalam satu genggaman.",
      projectName: "topcareer.id",
      year: "2019",
      img: "top-career-small",
      url: "/project/top-career",
   },
];

let caseDesigns = [
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

export {
   getAllProject,
   getRandomProject,
   getCertainProject,
   getAllCaseDesign,
   getRandomCaseDesign,
   getCertainCaseDesign,
};
