// Import Playwright Test
const { test, expect } = require('@playwright/test');

// Test case: Search on DuckDuckGo and verify results
test('DuckDuckGo search test', async ({ page }) => {
  try {
    // Navigate to DuckDuckGo
    await page.goto('https://duckduckgo.com');

    // Type search query
    await page.fill('input[name="q"]', 'Playwright automation');

    // Press Enter to search
    await page.keyboard.press('Enter');

    // Wait for results to load
    await page.waitForSelector('#links');

    // Validate that results contain the keyword
    const content = await page.textContent('#links');
    expect(content.toLowerCase()).toContain('playwright');

    console.log('✅ Search test passed!');
  } catch (error) {
    console.error('❌ Test failed:', error);
    throw error; // Fail the test
  }
});