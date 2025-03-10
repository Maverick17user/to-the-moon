import { test, expect, Page } from '@playwright/test'

test.describe('Pagination Component e2e', () => {
  test('pagination navigation updates the list of launches', async ({ page }) => {
    // Go to homepage
    await page.goto('/')

    // Wait for the launch grid and first card to load
    await page.waitForSelector('[data-testid="launch-grid"]')
    await page.waitForSelector('[data-testid="mission-name"]')

    // Get the first card title from page 1
    const firstPageTitle = await page.locator('[data-testid="mission-name"]').first().textContent()

    const nextButton = page.getByRole('button', { name: 'Go to next page' })
    await nextButton.waitFor()
    await nextButton.click()

    await page.waitForTimeout(1000)

    const secondPageTitle = await page.locator('[data-testid="mission-name"]').first().textContent()

    expect(secondPageTitle).not.toEqual(firstPageTitle)
  })

  // TODO: Test navigation to last page
  test.skip('should navigate to the last page when clicking last page button', async ({ page }: { page: Page }) => {
  })

  // TODO: Test navigation to first page
  test.skip('should navigate to the first page when clicking first page button', async ({ page }: { page: Page }) => {
  })

  // TODO: Test page number navigation
  test.skip('should navigate directly to specific page when clicking page number', async ({ page }: { page: Page }) => {
  })

  // TODO: Test pagination with search results
  test.skip('should maintain pagination state when searching', async ({ page }: { page: Page }) => {
  })

  // TODO: Test pagination boundary conditions
  test.skip('should handle pagination edge cases correctly', async ({ page }: { page: Page }) => {
  })
})