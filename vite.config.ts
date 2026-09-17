import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sendEnquiryEmail } from './api/emailService.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'enquiry-api-plugin',
      configureServer(server) {
        server.middlewares.use('/api/send-enquiry', (req, res) => {
          if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });
            req.on('end', async () => {
              try {
                const data = JSON.parse(body || '{}');
                const result = await sendEnquiryEmail(data);
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.end(JSON.stringify(result));
              } catch (err: any) {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 400;
                res.end(
                  JSON.stringify({
                    success: false,
                    error: err.message || 'Error processing enquiry',
                  })
                );
              }
            });
          } else {
            res.statusCode = 405;
            res.end('Method Not Allowed');
          }
        });
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
