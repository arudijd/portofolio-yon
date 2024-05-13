<template>
   <div
      class="mx-auto my-10 flex h-[360px] w-[379px] flex-col overflow-clip rounded-2xl border-2 border-black bg-slate-100 shadow-brutalism-md transition-all duration-300 hover:shadow-none"
   >
      <img
         :src="imgUrl"
         :alt="props.title"
         class="h-3/4 object-cover object-top"
      />
      <div
         class="flex h-1/4 flex-col justify-between gap-5 border-t-2 border-dashed border-black px-7 py-5"
      >
         <h4 class="line-clamp-1 text-left text-2xl font-medium">
            {{ props.title }}
         </h4>
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
   img: {
      type: String,
      default: "araebook-small",
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
