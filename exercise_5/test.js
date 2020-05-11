var webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

var driver = new webdriver.Builder().forBrowser("chrome").build();

driver.get("https://loghen41.github.io");

// Good job manually verifying the page has been updated, I wonder if there is a way we can automatically check that rather than making the page wait.
// Try finding a way to verify the inputs value, and have the system run the following command if it finds the right text: console.log("text found");

driver.findElement(By.className("fullInput")).sendKeys("Write some Code");
driver.findElement(By.className("fullInput")).text;
Assert.assertTrue("Write some Code");

driver.quit();
