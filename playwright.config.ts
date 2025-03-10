import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: undefined,
  reporter: 'html',
  timeout: 60000,
  expect: {
    timeout: 30000,
  },
  use: {
    baseURL: 'http://localhost:3001',
    trace: 'on-first-retry',
    testIdAttribute: 'data-testid',
    actionTimeout: 30000,
    navigationTimeout: 30000,
    launchOptions: {
      slowMo: 0,
    },
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        },
      },
    },
  ],
  webServer: {
    command: 'kill-port 3001 || true && npm run dev:test',
    url: 'http://localhost:3001',
    reuseExistingServer: false,
    timeout: 120000,
    env: {
      PORT: '3001',
      NODE_ENV: 'test',
    }
  },
}) 