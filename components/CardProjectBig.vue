<template>
   <div
      class="flex h-96 flex-col overflow-clip rounded-2xl border-2 border-black bg-slate-100 shadow-brutalism-md transition-all duration-300 hover:shadow-none"
   >
      <img
         :src="imgUrl"
         :alt="projectName"
         class="h-3/5 object-cover object-[0_20%]"
      />
      <div
         class="flex h-2/5 flex-row border-t-2 border-dashed border-black px-7 py-5"
      >
         <div class="flex h-full basis-1/2 flex-col justify-between">
            <h4 class="text-2xl font-semibold">
               {{ title }}
            </h4>
            <p class="text-xl">{{ projectName }}</p>
         </div>
         <div class="flex h-full basis-1/2 flex-col justify-between">
            <p class="text-right text-2xl font-semibold">{{ year }}</p>
            <NuxtLink
               v-if="url !== ''"
               :to="url"
               class="flex w-fit flex-row items-center justify-center gap-5 self-end rounded-full border-2 border-black bg-[#FFC567] px-5 py-3 shadow-brutalism-md transition duration-300 hover:shadow-none"
            >
               <p class="text-xl font-semibold">Detail</p>
               <Icon name="pajamas:arrow-right" size="1.5rem" />
            </NuxtLink>
            <button
               v-else
               class="flex w-fit cursor-not-allowed flex-row items-center justify-center gap-5 self-end rounded-full border-2 border-black bg-[#FFC567] px-5 py-3 shadow-brutalism-md transition duration-300 hover:shadow-none"
            >
               <p class="text-xl font-semibold">Coming Soon</p>
               <Icon name="solar:lock-bold" size="1.5rem" />
            </button>
         </div>
      </div>
   </div>
</template>
<script setup>
import { filename } from "pathe/utils";

const props = defineProps({
   title: {
      type: String,
      default: "Merancang Perhitungan Kalkulator Pajak Dengan Regulasi 2024",
   },
   projectName: {
      type: String,
      default: "Taxkita",
   },
   year: {
      type: String,
      default: "2024",
   },
   img: {
      type: String,
      default: "taxkita-big",
   },
   url: {
      type: String,
      default: "/",
   },
});

const imgUrl = computed(() => {
   const glob = import.meta.glob("~/assets/img/card-assets/*.png", {
      eager: true,
   });

   const images = Object.fromEntries(
      Object.entries(glob).map(([key, value]) => [
         filename(key),
         value.default,
      ]),
   );

   return images[props.img];
});
</script>
