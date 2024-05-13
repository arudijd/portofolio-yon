<template>
   <NuxtLayout>
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
   </NuxtLayout>
</template>
<style>
.layout-enter-active,
.layout-leave-active {
   transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
   opacity: 0;
   filter: blur(1rem) grayscale(1);
}

.page-enter-active,
.page-leave-active {
   transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
   opacity: 0;
   filter: blur(1rem) grayscale(1);
}
</style>
