<template>
   <div>
      <section
         class="bg-slate-100 bg-[url('~/assets/img/bg-pattern.png')] pb-16 pt-32"
      >
         <div
            class="mx-auto min-h-screen w-full max-w-screen-xl bg-[url('~/assets/img/bg-frame-pattern-slate.svg')] bg-top bg-no-repeat px-16 py-6"
         >
            <h1 class="mx-auto w-3/5 text-center text-[44px]/[58px] font-bold">
               Here's some project that I've been working on so far
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
import { getAllProject } from "~/assets/utils/local-data";

definePageMeta({
   layout: "default",
});

const data = reactive({
   dataSmallProject: getAllProject(),
});
</script>
