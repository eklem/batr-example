const { chromium } = require('playwright')
const test = require('ava')
const browserPromise = chromium.launch({
  headless: false
  // slowMo: 500
})

const path = require('path')
async function pageMacro (t, callback) {
  const browser = await browserPromise
  const page = await browser.newPage()
  await page.setViewportSize({ width: 640, height: 480 })
  try {
    await callback(t, page)
  } finally {
    await page.close()
  }
}

test('Add numbers 4 and 7', pageMacro, async (t, page) => {
  const filePath = await path.resolve('./demo/index.html')
  const url = 'file://' + filePath

  // Go to ./index.html
  await page.goto(url)

  // Click input[type="number"]
  await page.click('input[type="number"]')

  // Fill input[type="number"]
  await page.fill('input[type="number"]', '4')

  // Press Tab
  await page.press('input[type="number"]', 'Tab')

  // Press Tab
  await page.press('select[name="calculation"]', 'Tab')

  // Fill #secondNumber
  await page.fill('#secondNumber', '7')

  // Press Tab with modifiers
  await page.press('#secondNumber', 'Shift+Tab')

  // screenshot, 1st task
  await page.screenshot({ path: './screenshots/screenshot-01.png' })

  // Click text=11
  t.deepEqual(await page.textContent('#result span'), '11')
  // await page.click('text=11')
})

test('Subtract number 7 from 4', pageMacro, async (t, page) => {
  const filePath = await path.resolve('./demo/index.html')
  const url = 'file://' + filePath

  // Go to ./index.html
  await page.goto(url)

  // Click input[type="number"]
  await page.click('input[type="number"]')

  // Fill input[type="number"]
  await page.fill('input[type="number"]', '4')

  // Press Tab
  await page.press('input[type="number"]', 'Tab')

  // Press Tab
  await page.press('select[name="calculation"]', 'Tab')

  // Fill #secondNumber
  await page.fill('#secondNumber', '7')

  // Press Tab with modifiers
  await page.press('#secondNumber', 'Shift+Tab')

  // Select subtract
  await page.selectOption('select[name="calculation"]', 'subtract')

  // screenshot, 2nd task
  await page.screenshot({ path: './screenshots/screenshot-02.png' })

  // Click text=-3
  t.deepEqual(await page.textContent('#result span'), '-3')
  // await page.click('text=-3')
})

test('Multiply numbers 4 and 7', pageMacro, async (t, page) => {
  const filePath = await path.resolve('./demo/index.html')
  const url = 'file://' + filePath

  // Go to ./index.html
  await page.goto(url)

  // Click input[type="number"]
  await page.click('input[type="number"]')

  // Fill input[type="number"]
  await page.fill('input[type="number"]', '4')

  // Press Tab
  await page.press('input[type="number"]', 'Tab')

  // Press Tab
  await page.press('select[name="calculation"]', 'Tab')

  // Fill #secondNumber
  await page.fill('#secondNumber', '7')

  // Press Tab with modifiers
  await page.press('#secondNumber', 'Shift+Tab')

  // Select multiply
  await page.selectOption('select[name="calculation"]', 'multiply')

  // screenshot, 3rd task
  await page.screenshot({ path: './screenshots/screenshot-03.png' })

  // Click text=28
  t.deepEqual(await page.textContent('#result span'), '28')
  // await page.click('text=28')
})

test('Divide number 4 by 7', pageMacro, async (t, page) => {
  const filePath = await path.resolve('./demo/index.html')
  const url = 'file://' + filePath

  // Go to ./index.html
  await page.goto(url)

  // Click input[type="number"]
  await page.click('#firstNumber')

  // Fill input[type="number"]
  await page.fill('#firstNumber', '4')

  // Press Tab
  await page.press('#firstNumber', 'Tab')

  // Press Tab
  await page.press('select[name="calculation"]', 'Tab')

  // Fill #secondNumber
  await page.fill('#secondNumber', '7')

  // Press Tab with modifiers
  await page.press('#secondNumber', 'Shift+Tab')

  // Select divide
  await page.selectOption('select[name="calculation"]', 'divide')

  // screenshot, 4th task
  await page.screenshot({ path: './screenshots/screenshot-04.png' })

  // Click text=0.5714285714285714
  t.deepEqual(await page.textContent('#result span'), '0.5714285714285714')
  // await page.click('text=0.5714285714285714')
})
