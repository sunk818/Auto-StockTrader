// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Sell', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Sell', async function() {
    vars["TICKER"] = "TICKERHERE"
    vars["accounts"] = await driver.executeScript("return [\'YOUR\',\'ACCOUNTS\',\'HERE\']")
    vars["target"] = await driver.executeScript("return \"SLICE_TARGET\"")
    await driver.get("https://live.invest.ally.com/trading-full/stocks")
    vars["list"] = await driver.executeScript("return arguments[0].slice(arguments[0].indexOf(arguments[1]) + 1);", vars["accounts"],vars["target"])
    const collection = vars["list"]
    for (let i = 0; i < collection.length - 1; i++) {
      vars["account"] = vars["list"][i]
      await driver.findElement(By.id("modal-select-account")).click()
      await driver.manage().window().setRect({ width: 894, height: 908 })
      await driver.findElement(By.id("modal-select-account")).click()
      {
        const dropdown = await driver.findElement(By.id("modal-select-account"))
        await dropdown.findElement(By.xpath("//option[. = 'vars[\"account\"]']")).click()
      }
      await driver.findElement(By.css("ally-button:nth-child(5) > .primary")).click()
      await driver.findElement(By.css(".styled-input")).click()
      await driver.findElement(By.css(".styled-input")).sendKeys(vars["TICKER"])
      await driver.findElement(By.css(".styled-input")).sendKeys(Key.ENTER)
      await driver.sleep(3250)
      await driver.findElement(By.xpath("//span[contains(.,\'Sell\')]")).click()
      await driver.findElement(By.xpath("//button[contains(.,\'Preview Order\')]")).click()
      await driver.sleep(3500)
      await driver.findElement(By.xpath("//button[contains(.,\'Place Order\')]")).click()
      console.log('vars["account"] Sell ${TICKER} Test Ran Successfully!')
      await driver.get("https://live.invest.ally.com/trading-full/stocks")
    }
  })
})
