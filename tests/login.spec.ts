import { test, expect } from '@playwright/test';

test.describe('Login Functionality', () => {
  test('should log in successfully with valid credentials', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://example.com/login');

    // Fill in the username and password fields
    await page.fill('input[name="username"]', 'validUsername');
    await page.fill('input[name="password"]', 'validPassword');

    // Click the login button
    await page.click('button[type="submit"]');

    // Wait for navigation or a specific element that indicates successful login
    await page.waitForNavigation();

    // Assert that the user is redirected to the dashboard or a success message is displayed
    await expect(page).toHaveURL('https://example.com/dashboard');
    await expect(page.locator('text=Welcome')).toBeVisible();
  });

  test('should show an error message with invalid credentials', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://example.com/login');

    // Fill in the username and password fields with invalid credentials
    await page.fill('input[name="username"]', 'invalidUsername');
    await page.fill('input[name="password"]', 'invalidPassword');

    // Click the login button
    await page.click('button[type="submit"]');

    // Assert that an error message is displayed
    await expect(page.locator('text=Invalid username or password')).toBeVisible();
  });

  test('should validate required fields', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://example.com/login');

    // Click the login button without filling in the fields
    await page.click('button[type="submit"]');

    // Assert that validation messages are displayed
    await expect(page.locator('text=Username is required')).toBeVisible();
    await expect(page.locator('text=Password is required')).toBeVisible();
  });
});