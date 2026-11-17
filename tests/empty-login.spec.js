import { test, expect } from '@playwright/test';

test('пустая форма показывает ошибки email и пароля', async ({ page }) => {
    await page.goto('/');

    const loginButton = page.locator(
      '[data-marker="login-button-desktop"]');
    await loginButton.click();

    const submitButton = page.locator(
      '[data-marker="login-submit-button"]');
    await submitButton.click();

    const emailError = page.locator(
      '[data-marker="email-error"]');
    await expect(emailError)
      .toHaveText('Email обязателен');

    const passwordError = page.locator(
      '[data-marker="password-error"]');
    await expect(passwordError)
      .toHaveText('Пароль обязателен');
});

/*
Текст ошибок не совпадает в строке 17, поэтому тест падает

Error: expect(locator).toHaveText(expected) failed

Locator:  locator('[data-marker="email-error"]')
Expected: "Неверный email"
Received: "Email обязателен"
Timeout:  10000ms

Call log:
  - Expect "toHaveText" locator('[data-marker="email-error"]') with timeout 10000ms
  - waiting for locator('[data-marker="email-error"]')
    23 × locator resolved to <div data-marker="email-error" class="text-sm text-red-600 mt-1">Email обязателен</div>
       - unexpected value "Email обязателен"


  15 |       '[data-marker="email-error"]');
  16 |     await expect(emailError)
> 17 |       .toHaveText('Неверный email');
     |        ^
  18 |
  19 |     const passwordError = page.locator(
  20 |       '[data-marker="password-error"]');
    at D:\web-tests-student\tests\empty-login.spec.js:17:8
*/ 
