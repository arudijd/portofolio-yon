<template>
   <div
      class="mx-auto flex h-[32.5rem] w-[29rem] flex-col overflow-clip rounded-2xl border-2 border-black bg-slate-100 shadow-brutalism-md transition-all duration-300 hover:shadow-none"
   >
      <img :src="imgUrl" alt="Taxkita" class="h-1/2 object-cover object-top" />
      <div
         class="flex h-1/2 flex-col justify-between gap-5 border-t-2 border-dashed border-black px-7 py-5"
      >
         <div class="flex flex-col gap-3">
            <p class="text-2xl font-semibold">{{ props.year }}</p>
            <h4 class="line-clamp-3 text-2xl font-medium">
               {{ props.title }}
            </h4>
         </div>
         <div class="flex flex-row justify-between">
            <p class="basis-3/12 text-xl/[26px]">{{ props.projectName }}</p>
            <NuxtLink
               :to="url"
               class="flex w-fit flex-row items-center justify-center gap-5 self-end rounded-full border-2 border-black bg-[#FFC567] px-5 py-3 shadow-brutalism-md transition duration-300 hover:shadow-none"
            >
               <p class="text-xl font-semibold">Detail</p>
               <Icon name="pajamas:arrow-right" size="1.5rem" />
            </NuxtLink>
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
      default: "araebook-small",
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
