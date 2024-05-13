<template>
   <div>
      <section class="bg-slate-800 pb-16 pt-32">
         <div
            class="mx-auto min-h-screen w-full max-w-screen-xl bg-[url('~/assets/img/bg-frame-pattern.svg')] bg-top bg-no-repeat px-16 py-6"
         >
            <h1
               class="mx-auto w-9/12 text-center text-[44px]/[58px] font-bold text-white"
            >
               Temukan berbagai kelas menarik mulai dari level pemula hingga
               professional
            </h1>
            <img
               src="~/assets/img/project-assets/skills-id/SI-hero.png"
               alt=""
               class="mx-auto mt-10 w-4/5 object-cover object-center"
            />
            <div class="mt-14 grid grid-cols-2 gap-10">
               <div class="flex flex-col gap-3">
                  <h4 class="text-2xl font-semibold text-white">Role</h4>
                  <p class="text-base text-white">
                     Web Designer<br />
                     UI Designer
                  </p>
               </div>
               <div class="flex flex-col gap-3">
                  <h4 class="text-2xl font-semibold text-white">Timeline</h4>
                  <p class="text-base text-white">Q4, 2018</p>
               </div>
               <div class="flex flex-col gap-3">
                  <h4 class="text-2xl font-semibold text-white">Product</h4>
                  <p class="text-base text-white">
                     Skills.id merupakan platform belajar digital yang
                     mempertemukan edukator untuk berbagi ilmu dengan learner
                     yang ingin belajar, sekaligus sebagai kelas pelatihan.
                  </p>
               </div>
               <div class="flex flex-col gap-3">
                  <h4 class="text-2xl font-semibold text-white">Result</h4>
                  <p class="text-base text-white">
                     Merupakan bagian dari Oppa Academy dengan website yang
                     terpisah merupakan program pengukuran kefasihan dalam
                     berbahasa Korea
                  </p>
               </div>
            </div>
         </div>
      </section>
      <section class="border-b border-slate-500 bg-slate-100 py-16">
         <div class="mx-auto min-h-screen w-full max-w-screen-xl px-16 py-6">
            <h2
               class="mx-auto w-3/5 text-center text-[28px]/[38px] font-semibold text-[#034B73]"
            >
               Main Website
            </h2>
            <h4
               class="mx-auto mt-5 w-3/4 text-center text-4xl/[46px] font-medium text-black"
            >
               Mencetak manusia Indonesia yang produktif, professional dan
               berdaya saing
            </h4>
            <div class="mt-10 flex w-full max-w-screen-xl flex-col gap-10">
               <div class="flex w-full flex-row gap-16">
                  <p class="basis-1/2">
                     Skills.id memiliki LMS (Learning Management System) sebuah
                     system pembelajaran mandiri yang membantu kamu untuk
                     mengakses pelatihan-pelatihan skills di manapun dan
                     kapanpun.melalui proses pelatihan di skills.id secara
                     berkesinambungan serta proses sertifikasi kompetensi yang
                     sesuai dengan kebutuhan industri pada masa kini dan masa
                     yang akan datang.
                  </p>
                  <p class="basis-1/2">
                     Dengan didukung ratusan educator professional yang berasal
                     dari beragam bidang industri dan akademis menjadikan
                     Skills.id sebagai Lembaga Pelatihan yang kredibel dan
                     terpercaya. Sehingga masyarakat dapat lebih leluasa memilih
                     ragam pelatihan sesuai dengan minat dan kebutuhan mereka.
                  </p>
               </div>
               <figure class="mt-10 flex flex-col justify-between">
                  <img
                     src="~/assets/img/project-assets/skills-id/SI-1.png"
                     alt=""
                     class="mx-auto w-3/4 object-contain"
                  />
                  <figcaption class="mt-3 text-center italic">
                     Image : User Flow TaxKita
                  </figcaption>
               </figure>
               <div class="mx-auto w-full max-w-screen-xl">
                  <h1
                     class="mx-auto w-3/4 text-center text-2xl font-semibold text-[#034B73]"
                  >
                     Visit Website
                  </h1>
                  <button
                     class="mx-auto mt-2 flex flex-row items-center gap-3 rounded-full border border-black bg-[#FFC567] px-5 py-3 shadow-brutalism-md"
                  >
                     <p class="text-xl/[26px] font-medium">skills.id</p>
                     <Icon name="bi:arrow-right" size="1.5rem" />
                  </button>
               </div>
            </div>
         </div>
      </section>
      <section class="border-b border-slate-500 bg-slate-100 py-16">
         <div class="mx-auto min-h-screen w-full max-w-screen-xl px-16 py-6">
            <h2
               class="mx-auto w-3/5 text-center text-[28px]/[38px] font-semibold text-[#034B73]"
            >
               Other Project
            </h2>
            <h4
               class="mx-auto mt-5 w-4/5 text-center text-4xl/[46px] font-medium text-black"
            >
               Please Check Out My Other Projects
            </h4>
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
      <section class="border-b border-slate-500 bg-slate-100 pb-40 pt-10">
         <div class="mx-auto w-full max-w-screen-xl">
            <CarouselSideProject />
         </div>
      </section>
   </div>
</template>
<script setup>
definePageMeta({
   layout: "project",
});
const data = reactive({
   dataSmallProject: [
      {
         id: "PRO002",
         title: "Menciptakan Pengalaman menyenangkan dalam Membaca & Membeli Buku dengan Fleksibilitas",
         projectName: "Ara ebook",
         year: "2023",
         img: "araebook-small",
      },
      {
         id: "PRO003",
         title: "Mekanisme Belajar Yang Efektif Serta Menciptakan Interaksi Dalam Belajar",
         projectName: "Pintu Kita",
         year: "2023",
         img: "pintukita-small",
      },
      {
         id: "PRO004",
         title: "Belajar Bahasa Korea, Hingga Kesempatan Pergi Ke Korea",
         projectName: "Oppa Akademi",
         year: "2023",
         img: "oa-small",
      },
      {
         id: "PRO005",
         title: "Solusi Hukum Tanpa Ribet Layanan Konsultasi Hukum Online Yang Cepat & Tepat",
         projectName: "YR Consultindo",
         year: "2023",
         img: "yr-small",
      },
   ],
});
</script>
