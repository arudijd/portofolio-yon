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
            <div class="mx-auto mt-20 flex max-w-screen-lg flex-col gap-10">
               <CardProjectBig
                  v-for="i in data.dataBigProject"
                  :key="i.id"
                  v-bind="i"
               />
            </div>
         </div>
      </section>
   </div>
</template>
<script setup>
import { getAllCaseDesign } from "~/assets/utils/local-data";

definePageMeta({
   layout: "default",
});

const data = reactive({
   dataBigProject: [],
});

onMounted(() => {
   data.dataBigProject = getAllCaseDesign();
});
</script>
