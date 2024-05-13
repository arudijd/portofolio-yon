/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
   ],
   theme: {
      extend: {
         boxShadow: {
            'brutalism-md' : '3px 3px 0px'
         }
      },
   },
   plugins: [],
};
