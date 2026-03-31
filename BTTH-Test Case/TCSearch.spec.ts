import { test, expect } from '@playwright/test';

test('TCSearch', async ({ page }) => {
  await page.goto('https://www.w3schools.com/');

  const searchInput = page.locator('#tnb-google-search-input');
  await expect(searchInput).toBeVisible();
  await searchInput.fill('HTML');
  await searchInput.press('Enter');
});