<template>
   <div class="flex w-full flex-col gap-3">
      <NuxtLink
         to="/work"
         class="flex w-fit flex-row items-center justify-center gap-5 self-end rounded-full border-2 border-black bg-[#FB7DA8] px-5 py-3 shadow-brutalism-md transition duration-300 hover:shadow-none"
      >
         <p class="text-xl font-semibold">Detail</p>
         <Icon name="fluent:arrow-up-right-16-filled" size="1.5rem" />
      </NuxtLink>
      <Carousel :items-to-show="3" :wrap-around="true" :autoplay="4000">
         <Slide v-for="i in data.dataWorks" :key="i.id">
            <div class="my-5">
               <CardSideProject v-bind="i" />
            </div>
         </Slide>
      </Carousel>
   </div>
</template>
<script setup>
import { getRandomAnotherWork } from "~/assets/utils/local-data";

const data = reactive({
   dataWorks: [],
});

onMounted(() => {
   data.dataWorks = getRandomAnotherWork();
});
</script>
