import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
})





// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from 'tailwindcss'
// import daisyUI from 'daisyui'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//     daisyUI() // Add daisyUI plugin here for theme support
//   ],
//   theme: {
//     extend: {
//       // Customizing themes
//       daisyUI: {
//         themes: [
//           "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", 
//           "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden",
//           "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black",
//           "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade",
//           "night", "coffee", "winter", "dim", "nord", "sunset"
//         ]
//       }
//     }
//   }
// })

