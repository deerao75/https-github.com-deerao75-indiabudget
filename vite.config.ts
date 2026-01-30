import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

// Fix for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
    // Load env file from the current directory
    const env = loadEnv(mode, process.cwd(), '');
    
    return {
      // CRITICAL: Set the base path to your repository name for GitHub Pages
      base: '/indiabudgetnew/', 
      
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // Use process.env for compatibility with your existing code
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          // This maps the '@' symbol to your root directory
          '@': path.resolve(__dirname, './src'),
        }
      }
    };
});
