const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs-extra')

const URL = 'http://localhost:5000'
const paths = ['/', '/json/1', '/json/2', '/json/3']
const dist = path.join(__dirname, 'dist')

const main = async () => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.setRequestInterception(true)
  page.on('request', (request) => {
    if (['stylesheet', 'image', 'media', 'font'].includes(request.resourceType())) {
      request.abort()
    } else {
      request.continue()
    }
  })
  for (let path of paths) {
    await goTo(page, path)
  }
  await browser.close()
}

/**
 *
 * @param {puppeteer.Page} page
 * @param {string} location
 */
const goTo = async (page, location) => {
  await page.goto(URL + location, { waitUntil: 'networkidle0' })
  const content = await page.content()
  const dir = path.join(dist, location)
  fs.ensureDir(dir, (err) => {
    if (err) throw new err()
    fs.writeFile(path.join(dir, 'index.html'), content)
  })
  // console.log(await page.content())
  // console.log(path.join(dist, location))
}

main()
