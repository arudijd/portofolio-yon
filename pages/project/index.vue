<template>
   <div>
      <section
         class="bg-slate-100 bg-[url('~/assets/img/bg-pattern.png')] pb-16 pt-32"
      >
         <div
            class="mx-auto min-h-screen w-full max-w-screen-xl bg-[url('~/assets/img/bg-frame-pattern-slate.svg')] bg-top bg-no-repeat px-16 py-6"
         >
            <h1 class="mx-auto w-3/5 text-center text-[44px]/[58px] font-bold">
               Pengalaman Membeli & Membaca Buku Secara Digital
            </h1>
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
   </div>
</template>
<script setup>
definePageMeta({
   layout: "default",
});

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
