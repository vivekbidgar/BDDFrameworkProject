package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\Vivek Bidgar\\eclipse-workspace\\BDDFramework\\src\\main\\java\\featurepack\\pratcie.feature"
		, glue = {"StepDefination"}
		,format = {"pretty","html:test-output"}
		,monochrome = true
		,strict = true
		,dryRun = false
		,tags = {"@smokeTest" }
		)

public class TestRunner {

}
