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
    vars["TICKER"] = "AREB"
    vars["accounts"] = await driver.executeScript("return [\'YOUR\',\'ACCOUNT\',\"NUMBERS\',\'HERE\']")
    vars["target"] = await driver.executeScript("return \"SLICE_TARGET\"")
    vars["QUANT"] = "1"
    vars["list"] = await driver.executeScript("return arguments[0].slice(arguments[0].indexOf(arguments[1]) + 1);", vars["accounts"],vars["target"])
    const collection = vars["list"]
    for (let i = 0; i < collection.length - 1; i++) {
      vars["account"] = vars["list"][i]
      await driver.get("https://oltx.fidelity.com/ftgw/fbc/oftrade/stockInit?ignoreRedirect=Y&ORDER_TYPE=E&ACCOUNT=vars[\"account\"]&SYMBOL=${TICKER}&PRICE_TYPE=L&ORDER_ACTION=S&QTY=${QUANT}&AMOUNT=111.03&SKIP_ORDER_PREVIEW=N")
      await driver.findElement(By.css("#market-yes s-slot")).click()
      await driver.sleep(2300)
      await driver.findElement(By.css("#previewOrderBtn .pvd3-button-root")).click()
      await driver.sleep(2500)
      vars["result"] = await driver.executeScript("const xpath = \'//pvd3-modal[3]/s-root/div/div[2]/div/div/s-slot/s-assigned-wrapper/h2\'; const element = document.evaluate(xpath,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue; const xpath2 = \'/html/body/div[5]/ap122489-ett-component/div/pvd3-modal[3]/s-root/div/div[2]/div/div[2]/s-slot/s-assigned-wrapper/pvd3-inline-alert/s-root/div/div[2]/s-slot/s-assigned-wrapper/div\'; const element2 = document.evaluate(xpath2,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue; const xpath3 = \'/html/body/div[3]/ap122489-ett-component/div/pvd3-modal[3]/s-root/div/div[2]/div/div[2]/s-slot/s-assigned-wrapper/pvd3-inline-alert/s-root/div/div[2]/s-slot/s-assigned-wrapper/div\'; const element3 = document.evaluate(xpath3,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue; return ((element && (element.textContent === \"Error\" || element.textContent.includes(\"error\"))) && ((element2 && (element2.textContent.includes(\"do not have enough shares\")) || (element3 && (element3.textContent.includes(\"do not have enough\") || (element3.textContent.includes(\"was not found\") || element3.textContent.includes(\"you will need to modify your order\")))))));")
      if (!!await driver.executeScript("return (arguments[0] == true)", vars["result"])) {
      } else {
        await driver.findElement(By.id("placeOrderBtn")).click()
      }
    }
  })
})
