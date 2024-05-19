<template>
   <div>
      <section class="bg-slate-800 pb-16 pt-32">
         <div
            class="mx-auto min-h-screen w-full max-w-screen-xl bg-[url('~/assets/img/bg-frame-pattern.svg')] bg-top bg-no-repeat px-16 py-6"
         >
            <h1
               class="mx-auto w-9/12 text-center text-[44px]/[58px] font-bold text-white"
            >
               Mengukur kefasihan dalam berbahasa Korea dengan beberapa level
            </h1>
            <img
               src="~/assets/img/project-assets/leti/LT-hero.png"
               alt=""
               class="mx-auto mt-10 w-4/5 object-cover object-center"
            />
            <div class="mt-14 grid grid-cols-2 gap-10">
               <div class="flex flex-col gap-3">
                  <h4 class="text-2xl font-semibold text-white">Role</h4>
                  <p class="text-base text-white">Web Designer</p>
               </div>
               <div class="flex flex-col gap-3">
                  <h4 class="text-2xl font-semibold text-white">Timeline</h4>
                  <p class="text-base text-white">Q4, 2023</p>
               </div>
               <div class="flex flex-col gap-3">
                  <h4 class="text-2xl font-semibold text-white">Product</h4>
                  <p class="text-base text-white">
                     LETI platform yang memberikan kesempatan berkarir di Korea
                     dengan kelas, program, sistem belajar, hingga biaya yang
                     terjangkau, menaikan untuk level bahasa Korea
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
               Company Profile
            </h2>
            <h4
               class="mx-auto mt-5 w-3/4 text-center text-4xl/[46px] font-medium text-black"
            >
               Meningkatkan Potensi Hingga Peluang Untuk Bekerja Di Korea
               Selatan
            </h4>
            <div class="mt-10 flex w-full max-w-screen-xl flex-col gap-10">
               <div class="flex w-full flex-row gap-16">
                  <p class="basis-1/2">
                     LETI bertujuan untuk mengoptimalkan kesempatan berkarier di
                     Korea dengan layanan persiapan EPS TOPIK, kelas online, dan
                     simulasi ujian di LETI. Dapatkan akses langsung untuk
                     pengembangan karir anda yang lebih mudah.
                  </p>
                  <p class="basis-1/2">
                     Website LETI memiliki 1 page dengan masing-masing kategori
                     section seperti Jadwal Kelas, Sistem Belajar, Paket Kelas
                     hingga dapat melakukan daftar kelas, kamu juga dapat
                     mendapatkan informasi dan berita seputar Korea.
                  </p>
               </div>
               <figure class="mt-10 flex flex-col justify-between">
                  <img
                     src="~/assets/img/project-assets/leti/LT-1.png"
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
                  <a
                     href="https://leti.livingleafstudio.com/"
                     target="_blank"
                     class="mx-auto mt-2 flex w-fit flex-row items-center gap-3 rounded-full border border-black bg-[#FFC567] px-5 py-3 shadow-brutalism-md"
                  >
                     <p class="text-xl/[26px] font-medium">
                        leti.livingleafstudio.com
                     </p>
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
