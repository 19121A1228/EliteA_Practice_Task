import { test, expect } from '@playwright/test';

test('Login functionality test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://example.com/login');

  // Set viewport size
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Fill in the username and password fields
  await page.fill('input[name="username"]', 'testuser');
  await page.fill('input[name="password"]', 'password123');

  // Click the login button
  await page.click('button[type="submit"]');

  // Wait for navigation after login
  await page.waitForNavigation();

  // Assert that the user is redirected to the dashboard or home page
  await expect(page).toHaveURL('https://example.com/dashboard');

  // Assert that a welcome message or user-specific element is visible
  await expect(page.locator('text=Welcome, testuser')).toBeVisible();
});