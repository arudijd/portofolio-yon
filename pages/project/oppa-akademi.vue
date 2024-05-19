<template>
   <div>
      <section class="bg-slate-800 pb-16 pt-32">
         <div
            class="mx-auto min-h-screen w-full max-w-screen-xl bg-[url('~/assets/img/bg-frame-pattern.svg')] bg-top bg-no-repeat px-16 py-6"
         >
            <h1
               class="mx-auto w-3/5 text-center text-[44px]/[58px] font-bold text-white"
            >
               Menguasai Bahasa Korea Dengan Kurikulum Lengkap
            </h1>
            <img
               src="~/assets/img/project-assets/oppa-akademi/OA-hero.png"
               alt=""
               class="mx-auto mt-10 w-4/5 object-cover object-center"
            />
            <div class="mt-14 grid grid-cols-2 gap-10">
               <div class="flex flex-col gap-3">
                  <h4 class="text-2xl font-semibold text-white">Role</h4>
                  <p class="text-base text-white">UI Designer</p>
               </div>
               <div class="flex flex-col gap-3">
                  <h4 class="text-2xl font-semibold text-white">Timeline</h4>
                  <p class="text-base text-white">Q2, 2023</p>
               </div>
               <div class="flex flex-col gap-3">
                  <h4 class="text-2xl font-semibold text-white">Product</h4>
                  <p class="text-base text-white">
                     Oppa Akademi adalah sebuah lembaga pelatihan bahasa Korea
                     terpadu. menawarkan berbagai macam program yang mencakup
                     Kelas Tata Bahasa, Kelas Percakapan, Kelas TOPIK 1, dan
                     kelas spesial lainnya dalam bentuk Kelas Online dan
                     Offline.
                  </p>
               </div>
               <div class="flex flex-col gap-3">
                  <h4 class="text-2xl font-semibold text-white">Result</h4>
                  <p class="text-base text-white">
                     Website utama Oppa Academy berisi jumlah siswa, partner,
                     informasi kerja dan belajar di Korea serta kelas
                     masing-masing
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
               Result Website
            </h2>
            <h4
               class="mx-auto mt-5 w-3/4 text-center text-4xl/[46px] font-medium text-black"
            >
               Pelatihan, Kelas Khusus Hingga Kesempatan Ke Korea
            </h4>
            <div class="mt-10 flex w-full max-w-screen-xl flex-col gap-10">
               <div class="flex w-full flex-row gap-16">
                  <p class="basis-1/2">
                     Memiliki program Belajar di Korea dan Bekerja di Korea
                     sebagai perwujudan Oppa Akademi sebagai pemberi kesempatan
                     yang lebih baik. Program Belajar di Korea kami hadirkan
                     bagi calon siswa yang ingin melanjutkan pendidikan di Korea
                     Selatan, baik pendidikan bahasa Korea berjangka pendek
                     maupun melanjutkan pendidikan ke jenjang yang lebih tinggi.
                  </p>
                  <p class="basis-1/2">
                     Website Oppa Akademi mengambil latar warna Pink & biru
                     sebagai warna utama dari logo tersebut. Tidak hanya
                     menyajikan profile atau informasi seputar Oppa Akademi
                     namun juga menampilkan detail harga dan kelas apa saja yang
                     terdapat pada platform tersebut juga terdapat jadwal, guru
                     hingga harganya.
                  </p>
               </div>
               <figure class="mt-10 flex flex-col justify-between">
                  <img
                     src="~/assets/img/project-assets/oppa-akademi/OA-1-1.png"
                     alt=""
                     class="mx-auto w-3/4 object-contain"
                  />
                  <figcaption class="mt-3 text-center italic">
                     Image : User Flow TaxKita
                  </figcaption>
               </figure>
               <figure class="mt-10 flex flex-col justify-between">
                  <img
                     src="~/assets/img/project-assets/oppa-akademi/OA-1-2.png"
                     alt=""
                     class="mx-auto w-1/2 object-contain"
                  />
                  <figcaption class="mt-3 text-center italic">
                     Image : User Flow TaxKita
                  </figcaption>
               </figure>
               <p>
                  Website Oppa Akademi pada dasarnya merevamp dari website
                  sebelumnya, namun versi yang lebih lengkap, detail dan
                  terbaru, dengan informasi kelas yang lebih banyak serta jumlah
                  guru yang juga semakin beragam.
               </p>
               <div class="mx-auto w-full max-w-screen-xl">
                  <h1
                     class="mx-auto w-3/4 text-center text-2xl font-semibold text-[#034B73]"
                  >
                     Visit Website
                  </h1>
                  <a
                     href="https://www.oppaakademi.com/"
                     target="_blank"
                     class="mx-auto mt-2 flex w-fit flex-row items-center gap-3 rounded-full border border-black bg-[#FFC567] px-5 py-3 shadow-brutalism-md"
                  >
                     <p class="text-xl/[26px] font-medium">oppaakademi.com/</p>
                     <Icon name="bi:arrow-right" size="1.5rem" />
                  </a>
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
import { getRandomProject } from "~/assets/utils/local-data";

definePageMeta({
   layout: "project",
});
const data = reactive({
   dataSmallProject: [],
});

onMounted(() => {
   data.dataSmallProject = getRandomProject();
});
</script>
