<template>
   <div>
      <section class="bg-slate-800 pb-16 pt-32">
         <div
            class="mx-auto min-h-screen w-full max-w-screen-xl bg-[url('~/assets/img/bg-frame-pattern.svg')] bg-top bg-no-repeat px-16 py-6"
         >
            <h1
               class="mx-auto w-9/12 text-center text-[44px]/[58px] font-bold text-white"
            >
               Solusi Manajemen Secara Cepat & Tepat Dengan Pengalaman Terbaik
            </h1>
            <img
               src="~/assets/img/project-assets/yr-consultant/YR-hero.png"
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
                  <p class="text-base text-white">Q2, 2023</p>
               </div>
               <div class="flex flex-col gap-3">
                  <h4 class="text-2xl font-semibold text-white">Product</h4>
                  <p class="text-base text-white">
                     YR Consultanindo merupakan perusahaan yang bergerak sebagai
                     konsultan manajemen untuk menawarkan solusi dari
                     permasalahan dan membantu binsis lebih optimal
                  </p>
               </div>
               <div class="flex flex-col gap-3">
                  <h4 class="text-2xl font-semibold text-white">Result</h4>
                  <p class="text-base text-white">
                     Sebagai Website utama dari YR Consutindo pertama sekaligus
                     menandai keberadaan awal YR Consultindo.
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
               Merasakan Kemudahan Serta Mendapatkan Solusi Dari Bisnis Anda
               Yang Praktis & Mudah
            </h4>
            <div class="mt-10 flex w-full max-w-screen-xl flex-col gap-10">
               <div class="flex w-full flex-row gap-16">
                  <p class="basis-1/2">
                     PT Yein Consulting Jaya sebuah perusahaan yang menawarkan
                     solusi strategis yang merangkum keahlian global untuk
                     mengoptimalkan pertumbuhan bisnis secara efektif. Menjadi
                     mitra Konsultan untuk menaikan level bisnis yang dibantu
                     oleh parah ahli dibadangnya.
                  </p>
                  <p class="basis-1/2">
                     Website YR Consultindo Memiliki 2 latar belakang tema yaitu
                     mode gelap & terang hal ini untuk memberikan pengalaman
                     yang berbeda bagi pengguna, sebagai salah satu penyedia
                     berbagai solusi bisnis YR memiliki berbagai macam kategori
                     service baik di bidang Pajak maupun Hukum.
                  </p>
               </div>
               <figure class="mt-10 flex flex-col justify-between">
                  <img
                     src="~/assets/img/project-assets/yr-consultant/YR-1.png"
                     alt=""
                     class="mx-auto w-3/4 object-contain"
                  />
                  <figcaption class="mt-3 text-center italic">
                     Image : Landing page YR Consultindo
                  </figcaption>
               </figure>
               <div class="mx-auto w-full max-w-screen-xl">
                  <h1
                     class="mx-auto w-3/4 text-center text-2xl font-semibold text-[#034B73]"
                  >
                     Visit Website
                  </h1>
                  <a
                     href="https://www.yrconsultindo.com/"
                     target="_blank"
                     class="mx-auto mt-2 flex w-fit flex-row items-center gap-3 rounded-full border border-black bg-[#FFC567] px-5 py-3 shadow-brutalism-md"
                  >
                     <p class="text-xl/[26px] font-medium">yrconsultindo.com</p>
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
