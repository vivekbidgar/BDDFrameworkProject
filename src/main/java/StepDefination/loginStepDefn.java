package StepDefination;

import java.awt.Desktop.Action;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class loginStepDefn {
	
	WebDriver driver;
	
	@Given("^user is already on login page$")
	public void user_is_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "D:\\Selenium jar Driver\\chromedriver.exe");  
		driver = new ChromeDriver();
		driver.get("https://ui.freecrm.com/");
		driver.gettitle();
	}

	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM() {
		String title = driver.getTitle();
		Assert.assertEquals("Cogmento CRM", title);
		WebElement lgnBtn = driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']"));
		Actions action = new Actions(driver);
		action.moveToElement(lgnBtn).build().perform();
	
		WebDriverWait x = new WebDriverWait(driver, 300);
		WebElement y;
		y = x.until(ExpectedConditions.visibilityOfElementLocated(null));
		
	}

//	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")  // 
//	public void user_enters_username_and_password(String username,String password){
//		driver.findElement(By.xpath("//input[@name='email']")).sendKeys(username);
//		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);   
//	}
//
//	@Then("^user clicks on Login page$")
//	public void user_clicks_on_Login_page(){
//	    WebElement lgnBtn = driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']"));
//	    JavascriptExecutor jn = (JavascriptExecutor)driver;
//	    jn.executeScript("arguments[0].click()", lgnBtn);
//	}
//
//	@Then("^user on Home page$")
//	public void user_on_Home_page(){
//		String title = driver.getTitle();
//		Assert.assertEquals("Cogmento CRM", title);
//	}
}
