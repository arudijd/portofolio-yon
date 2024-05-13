<template>
   <div class="flex flex-col divide-y-2 divide-slate-500">
      <section
         class="min-h-screen bg-slate-100 bg-[url('~/assets/img/bg-pattern.png')] py-32"
      >
         <div class="mx-auto flex w-full max-w-screen-xl flex-col gap-20">
            <div
               class="flex min-h-[320px] w-full items-center justify-center rounded-full bg-[url('~/assets/img/bg-box-pattern.png')] p-10"
            >
               <img src="~/assets/img/hero.png" alt="" />
            </div>
            <div
               class="mx-auto flex max-w-screen-lg flex-row rounded-3xl bg-[#000A0F] px-12 py-14 text-white"
            >
               <h2 class="basis-1/3 text-6xl/[74px] font-bold">
                  I Love to Make Things Simple and also Useful
               </h2>
               <div class="flex basis-2/3 flex-col">
                  <p class="text-lg">
                     Seorang User Interface Designer yang saat ini bermukim di
                     Kota Jakarta (spesifiknya Jakarta Selatan) jantungnya
                     perdaban Republik ini. Suka melakukan eksplorasi design,
                     baik untuk project maupun pembelajaran. Aktif dan update
                     seputar dunia Tech dan Design Product sambil menyelsaikan
                     Study Master di Universitas Paramadina. Hobi ngikutin
                     isu-isu perkembangan soal Sosial Politik yang sedang
                     berkembang disekitar bahkan Dunia. Penikmat sejarah &
                     pengoleksi buku terkait apapun baik Design, Politik,
                     Sejarah dll.<br />
                     <br />

                     Bisa menghabiskan waktu untuk membaca Medium atau
                     eksplorasi design di Dribbble hingga Behance. Karena banyak
                     melihat banyak eksplorasi, banyak eskplorasi bisa
                     melahirkan banyak Ide, dengan kata lain eksplorasi berarti
                     membuat kita belajar dan berkembang untuk implementasi dan
                     menghasilkan solusi untuk permasalahan yang terjadi.<br />
                     <br />

                     Memiliki background Pendidikan Seni & Design di UNS Solo
                     menjadikannya basic sebagai Illustrator sayangnya belum di
                     implementasikan menjadi sebuah profesi, pembuatan
                     illustrasi hanya baru sebatas hobi atau untuk pameran saja.
                     Beberapa kali berganti peran dalam berprofesi dari
                     Designer, Marketing Komunikasi, Editor, Motion, Hingga
                     akhirnya menjadi Designer kembali, mungkin lebih khususnya
                     UI/UX Designer.<br />
                     <br />
                  </p>
                  <button
                     class="flex flex-row gap-5 self-end rounded-full border-2 border-white px-5 py-3 shadow-brutalism-md shadow-white transition duration-300 hover:shadow-none"
                  >
                     <Icon name="ion:document-text-outline" size="1.5rem" />
                     <p class="text-xl">Download My Resume</p>
                  </button>
               </div>
            </div>
         </div>
      </section>
      <section
         class="min-h-screen bg-slate-200 bg-[url('~/assets/img/bg-pattern.png')] py-20"
      >
         <div class="mx-auto w-full max-w-screen-xl">
            <h1
               class="mx-auto w-[55%] text-center text-[44px]/[58px] font-semibold"
            >
               On the day, I work as a Junior UI/ UX Designer at Inkor, Jakarta
            </h1>
            <div class="mx-auto mt-20 max-w-screen-lg">
               <CardProjectBig v-bind="data.dataBigProject[0]" />
            </div>
            <div
               class="mx-auto mt-10 grid w-full max-w-screen-lg grid-cols-2 items-center gap-10"
            >
               <CardProjectSmall
                  v-for="i in data.dataSmallProject"
                  :key="i.id"
                  v-bind="i"
               />
            </div>
         </div>
      </section>
      <section
         class="min-h-screen bg-slate-100 bg-[url('~/assets/img/bg-pattern.png')] py-20"
      >
         <div class="mx-auto w-full max-w-screen-xl">
            <div
               class="mx-auto flex w-2/3 flex-row items-center justify-between"
            >
               <button
                  :class="
                     backgroundState === 'work-story'
                        ? 'flex w-fit items-center justify-center gap-5 self-end rounded-full border-2 border-solid border-black bg-[#FFC567] px-5 py-3 shadow-brutalism-md transition duration-300 hover:shadow-none'
                        : 'flex w-fit items-center justify-center gap-5 self-end rounded-full border-2 border-dashed border-black bg-transparent px-5 py-3 shadow-none transition duration-300 hover:border-solid hover:bg-[#FFC567]'
                  "
                  @click="backgroundState = 'work-story'"
               >
                  <p class="text-2xl font-semibold">My Work Story</p>
               </button>
               <button
                  :class="
                     backgroundState === 'edu-journey'
                        ? 'flex w-fit items-center justify-center gap-5 self-end rounded-full border-2 border-solid border-black bg-[#FFC567] px-5 py-3 shadow-brutalism-md transition duration-300 hover:shadow-none'
                        : 'flex w-fit items-center justify-center gap-5 self-end rounded-full border-2 border-dashed border-black bg-transparent px-5 py-3 shadow-none transition duration-300 hover:border-solid hover:bg-[#FFC567]'
                  "
                  @click="backgroundState = 'edu-journey'"
               >
                  <p class="text-2xl font-semibold">Educational Journey</p>
               </button>
               <button
                  :class="
                     backgroundState === 'self-strength'
                        ? 'flex w-fit items-center justify-center gap-5 self-end rounded-full border-2 border-solid border-black bg-[#FFC567] px-5 py-3 shadow-brutalism-md transition duration-300 hover:shadow-none'
                        : 'flex w-fit items-center justify-center gap-5 self-end rounded-full border-2 border-dashed border-black bg-transparent px-5 py-3 shadow-none transition duration-300 hover:border-solid hover:bg-[#FFC567]'
                  "
                  @click="backgroundState = 'self-strength'"
               >
                  <p class="text-2xl font-semibold">Self Strength</p>
               </button>
            </div>
            <div class="mt-10 w-full">
               <Transition name="fade" mode="out-in">
                  <div
                     v-if="backgroundState === 'work-story'"
                     class="flex flex-col divide-y divide-slate-400"
                  >
                     <div
                        v-for="i in data.workStory"
                        :key="i.id"
                        class="grid w-full grid-cols-5 gap-20 px-10 py-7"
                     >
                        <p class="col-span-2 text-2xl">{{ i.time }}</p>
                        <p class="text-2xl font-medium">{{ i.company }}</p>
                        <p class="col-span-2 text-right text-2xl">
                           {{ i.position }}
                        </p>
                     </div>
                  </div>
                  <div
                     v-else-if="backgroundState === 'edu-journey'"
                     class="flex flex-col divide-y divide-slate-400"
                  >
                     <div
                        v-for="i in data.eduJourney"
                        :key="i.id"
                        class="grid w-full grid-cols-8 gap-32 px-10 py-7"
                     >
                        <p class="col-span-3 text-2xl">{{ i.time }}</p>
                        <p class="col-span-2 text-2xl font-medium">
                           {{ i.academy }}
                        </p>
                        <p class="col-span-3 text-right text-2xl">
                           {{ i.expertise }}
                        </p>
                     </div>
                  </div>
                  <div
                     v-else-if="backgroundState === 'self-strength'"
                     class="flex flex-col divide-y divide-slate-400"
                  >
                     <div
                        v-for="i in data.selfStrength"
                        :key="i.id"
                        class="px-10 py-7"
                     >
                        <p class="text-[28px]/[38px] font-medium">
                           {{ i.name }}
                        </p>
                     </div>
                  </div>
               </Transition>
            </div>
            <div class="mt-10">
               <CarouselSideProject />
            </div>
         </div>
         <div class="mx-auto mt-20 w-full max-w-screen-xl">
            <h1
               class="mx-auto w-3/4 text-center text-[44px]/[58px] font-semibold"
            >
               I am always open for a new opportunities. Let's Talk!
            </h1>
            <button
               class="mx-auto mt-10 flex flex-row items-center gap-3 rounded-full border border-black bg-[#FB7DA8] px-5 py-3 shadow-brutalism-md"
            >
               <p class="text-2xl font-medium">bento.me/yonsafira</p>
               <Icon name="iconamoon:arrow-right-2-light" size="2rem" />
            </button>
         </div>
      </section>
   </div>
</template>
<script setup>
import "vue3-carousel/dist/carousel.css";

const data = reactive({
   dataBigProject: [
      {
         id: "PRO001",
         title: "Merancang Perhitungan Kalkulator Pajak Dengan Regulasi 2024",
         projectName: "Taxkita",
         year: "2024",
         img: "taxkita-big",
         url: "/case-design/taxkita",
      },
   ],
   dataSmallProject: [
      {
         id: "PRO002",
         title: "Menciptakan Pengalaman menyenangkan dalam Membaca & Membeli Buku dengan Fleksibilitas",
         projectName: "Ara ebook",
         year: "2023",
         img: "araebook-small",
         url: "/case-design/araebook",
      },
      {
         id: "PRO003",
         title: "Mekanisme Belajar Yang Efektif Serta Menciptakan Interaksi Dalam Belajar",
         projectName: "Pintu Kita",
         year: "2023",
         img: "pintukita-small",
         url: "/case-design/pintu-kita",
      },
      {
         id: "PRO004",
         title: "Belajar Bahasa Korea, Hingga Kesempatan Pergi Ke Korea",
         projectName: "Oppa Akademi",
         year: "2023",
         img: "oa-small",
         url: "/",
      },
      {
         id: "PRO005",
         title: "Solusi Hukum Tanpa Ribet Layanan Konsultasi Hukum Online Yang Cepat & Tepat",
         projectName: "YR Consultindo",
         year: "2023",
         img: "yr-small",
         url: "/",
      },
   ],
   workStory: [
      {
         id: "WOR001",
         time: "Mar 2023 - Present",
         company: "Inkor",
         position: "UI/UX Designer",
      },
      {
         id: "WOR002",
         time: "Jun 2020 - Mar 2023",
         company: "Inkor",
         position: "Multimedia",
      },
      {
         id: "WOR003",
         time: "Aug 2023 - Nov 2023",
         company: "Pra Kerja",
         position: "Mentor",
      },
      {
         id: "WOR004",
         time: "Mar 2019 - Mar 2020",
         company: "HJ Production",
         position: "Film Video Editor",
      },
      {
         id: "WOR005",
         time: "Aug 2018 - Feb 2019",
         company: "skills.id",
         position: "Content Designer",
      },
      {
         id: "WOR006",
         time: "Jan 2018 - Jul 2018",
         company: "skills.id",
         position: "Marketing Communication",
      },
      {
         id: "WOR007",
         time: "Okt 2017 - Jan 2018",
         company: "Net TV",
         position: "Ast Graphic Design",
      },
   ],
   eduJourney: [
      {
         id: "EDU001",
         time: "2021 - Present",
         academy: "Universitas Paramadina",
         expertise: "Master's Corporate Communication",
      },
      {
         id: "EDU002",
         time: "2022",
         academy: "Binar Academy (Course)",
         expertise: "UI/UX Designer",
      },
      {
         id: "EDU003",
         time: "2013 - 2017",
         academy: "Universitas Sebelas Maret",
         expertise: "Fine Art & Design",
      },
   ],
   selfStrength: [
      {
         id: "STR001",
         name: "UI Designer",
      },
      {
         id: "STR002",
         name: "UX Researcher",
      },
      {
         id: "STR003",
         name: "Design Thinking",
      },
      {
         id: "STR004",
         name: "Illustration",
      },
      {
         id: "STR005",
         name: "Graphic Designer",
      },
      {
         id: "STR006",
         name: "Video Editor",
      },
      {
         id: "STR007",
         name: "Motion Graphic",
      },
      {
         id: "STR008",
         name: "Corporate Communciation",
      },
      {
         id: "STR009",
         name: "Analytical Thinking",
      },
   ],
});

const backgroundState = ref("work-story");
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
   transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
   opacity: 0;
   transform: translateX(-30px);
}
</style>
