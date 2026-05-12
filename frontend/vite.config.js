import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],

  // Это ключевая настройка для embed: все пути в собранном HTML/JS будут относительными,
  // а не от корня. Без этого Go-сервер не найдёт файлы.
  base: '',

  // На всякий случай явно говорим, что результат кладём в папку dist
  build: {
    outDir: 'dist',
  },
})