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
            "brutalism-md": "3px 3px 0px",
         },
         keyframes: {
            bouncing: {
               "0%, 100%": {
                  "transform": "translateY(0)",
                  "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
               },
               "50%": {
                  "transform": "translateY(-25%)",
                  "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
               },
            },
         },
      },
   },
   plugins: [],
};
