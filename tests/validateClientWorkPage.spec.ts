import { test, expect } from '@playwright/test';

test('Validate Client Work page on EPAM website', async ({ page }) => {
  // Step 1: Navigate to "https://www.epam.com/"
  await page.goto('https://www.epam.com/');

  // Step 2: Set viewport to 1920x1080
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Step 3: Click "header >> text=Services"
  await page.click('header >> text=Services');

  // Step 4: Click "Explore Our Client Work"
  await page.click('text=Explore Our Client Work');

  // Step 5: Assert text "Client Work"
  const clientWorkText = await page.textContent('h1');
  expect(clientWorkText).toContain('Client Work');
});