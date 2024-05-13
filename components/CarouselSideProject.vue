<template>
   <div class="flex w-full flex-col gap-3">
      <button
         class="flex w-fit flex-row items-center justify-center gap-5 self-end rounded-full border-2 border-black bg-[#FB7DA8] px-5 py-3 shadow-brutalism-md transition duration-300 hover:shadow-none"
      >
         <p class="text-xl font-semibold">Detail</p>
         <Icon name="fluent:arrow-up-right-16-filled" size="1.5rem" />
      </button>
      <Carousel :items-to-show="3" :wrap-around="true" :autoplay="4000">
         <Slide v-for="i in data" :key="i.id">
            <CardSideProject v-bind="i" />
         </Slide>
      </Carousel>
   </div>
</template>
<script setup>
const data = ref([
   { id: "SP001", title: "Logo Design", img: "logo-design-side" },
   { id: "SP002", title: "Infografis Design", img: "infografis-side" },
   { id: "SP003", title: "Poster Design", img: "poster-side" },
   {
      id: "SP004",
      title: "Book Illustration",
      img: "book-illustration-side",
   },
   {
      id: "SP005",
      title: "Character Illustration",
      img: "character-illustration-side",
   },
   { id: "SP006", title: "Illustration", img: "illustration-side" },
   { id: "SP007", title: "Exhibition Design", img: "exhibition-side" },
   { id: "SP008", title: "Event Video", img: "event-video-side" },
   { id: "SP009", title: "Langit Musik", img: "langit-musik-side" },
   {
      id: "SP0010",
      title: "Educational Video",
      img: "educational-video-side",
   },
   {
      id: "SP0011",
      title: "Series & Reality Show",
      img: "series-&-reality-show-side",
   },
]);
</script>
