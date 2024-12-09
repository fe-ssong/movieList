import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/


export default {
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
};