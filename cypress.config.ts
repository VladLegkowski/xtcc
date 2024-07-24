import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1500,
  video: true,
  projectId: '1vjiah',
  e2e: {
    baseUrl: 'http://localhost:1234/',
    excludeSpecPattern: ['**/__examples__'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
