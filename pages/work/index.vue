<template>
   <div>
      <section
         class="bg-slate-100 bg-[url('~/assets/img/bg-pattern.png')] pb-16 pt-32"
      >
         <div
            class="mx-auto min-h-screen w-full max-w-screen-xl bg-[url('~/assets/img/bg-frame-pattern-slate.svg')] bg-top bg-no-repeat px-16 py-6"
         >
            <h1 class="mx-auto w-3/5 text-center text-[44px]/[58px] font-bold">
               Here's some case design that I've been working on so far
            </h1>
            <div
               class="mx-auto mt-20 grid max-w-screen-xl grid-cols-3 items-center justify-center gap-10"
            >
               <div
                  v-for="items in data.dataWork"
                  :key="items.id"
                  class="flex flex-col gap-3"
               >
                  <CardSideProject
                     v-for="item in items.data"
                     v-bind="item"
                     :key="item.id"
                     :is-show-description="true"
                  />
               </div>
            </div>
         </div>
      </section>
   </div>
</template>
<script setup>
import { getAllAnotherWork } from "~/assets/utils/local-data";

definePageMeta({
   layout: "default",
});

const data = reactive({
   dataWork: [],
});

onMounted(() => {
   data.dataWork = getAllAnotherWork();
   console.log(data.dataWork);
});
</script>
