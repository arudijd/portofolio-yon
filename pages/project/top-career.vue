<template>
   <div>
      <section class="bg-slate-800 pb-16 pt-32">
         <div
            class="mx-auto min-h-screen w-full max-w-screen-xl bg-[url('~/assets/img/bg-frame-pattern.svg')] bg-top bg-no-repeat px-16 py-6"
         >
            <h1
               class="mx-auto w-9/12 text-center text-[44px]/[58px] font-bold text-white"
            >
               Memudahkan Segala Kebutuhan Karier Professional Dalam Satu
               Genggaman.
            </h1>
            <img
               src="~/assets/img/project-assets/top-career/TC-hero.png"
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
                  <p class="text-base text-white">Q3, 2018</p>
               </div>
               <div class="flex flex-col gap-3">
                  <h4 class="text-2xl font-semibold text-white">Product</h4>
                  <p class="text-base text-white">
                     Portal media yang menyajikan beragam informasi seputar
                     karier, tips-tips karier, startup, bisnis, informasi
                     lowongan kerja hingga informasi beasiswa.
                  </p>
               </div>
               <div class="flex flex-col gap-3">
                  <h4 class="text-2xl font-semibold text-white">Result</h4>
                  <p class="text-base text-white">
                     Menciptakan portal berita dan segalanya mengenai karis dan
                     dunia profesional terkini hingga update soal isu dunia
                     karir terkini dan lowongan kerja terbaru.
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
               Instruktur & Trainer Dari Seluruh Dunia
            </h4>
            <div class="mt-10 flex w-full max-w-screen-xl flex-col gap-10">
               <div class="flex w-full flex-row gap-16">
                  <p class="basis-1/2">
                     Sebagai pionir media karier di Indonesia, Topcareer ingin
                     terus menjadi panduan karier bagi pembaca untuk mencapai
                     top karier-nya. hadir pertama kalinya pada tahun 2011 dalam
                     bentuk majalah. Seiring waktu Majalah Topcareer
                     bertransformasi menjadi portal online karier sejak
                     pertengahan 2016, dengan nama topcareer.id
                  </p>
                  <p class="basis-1/2">
                     Website topcareer juga terintegrasi pada aplikasi top
                     career yang tersedia pada Playstore hingga App Store.
                     Website ini merupakan website baru dari rebranding
                     topcareer.
                  </p>
               </div>
               <figure class="mt-10 flex flex-col justify-between">
                  <img
                     src="~/assets/img/project-assets/top-career/TC-1.png"
                     alt=""
                     class="mx-auto w-3/4 object-contain"
                  />
                  <figcaption class="mt-3 text-center italic">
                     Image : Homepage topcareer.id
                  </figcaption>
               </figure>
               <div class="mx-auto w-full max-w-screen-xl">
                  <h1
                     class="mx-auto w-3/4 text-center text-2xl font-semibold text-[#034B73]"
                  >
                     Visit Website
                  </h1>
                  <a
                     href="https://topcareer.id/"
                     target="_blank"
                     class="mx-auto mt-2 flex w-fit flex-row items-center gap-3 rounded-full border border-black bg-[#FFC567] px-5 py-3 shadow-brutalism-md"
                  >
                     <p class="text-xl/[26px] font-medium">topcareer.id</p>
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
