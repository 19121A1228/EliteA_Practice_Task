import { test, expect } from '@playwright/test';

test('Navigate and verify Client Work page', async ({ page }) => {
  // Step 1: Navigate to "https://www.epam.com/"
  await page.goto('https://www.epam.com/');

  // Step 2: Set viewport to 1920x1080
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Step 3: Click on "header >> text=Services"
  await page.click('header >> text=Services');

  // Step 4: Click on "Explore Our Client Work"
  await page.click('text=Explore Our Client Work');

  // Step 5: Assert that the text "Client Work" is present on the page
  await expect(page.locator('text=Client Work')).toBeVisible();
});