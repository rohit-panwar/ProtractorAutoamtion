describe('Multiple Scenario',function(){

    var firstNumber=element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton=element(by.id('gobutton'));
    var results=element(by.className('ng-binding'));

    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    //Test Case 1
    it('Should add 1 & 2', function(){
        browser.driver.sleep(2000);
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);
        goButton.click();
        browser.driver.sleep(3000);
        expect(results.getText()).toEqual('3');
    });

    //Test Case 2
    it('Should add 3 & 4',function(){
        browser.driver.sleep(2000);
        firstNumber.sendKeys(3);
        secondNumber.sendKeys(4);
        goButton.click();
        expect(results.getText()).toEqual('7');
    });

    //Test Case 3
    it('Should add 10 & 20',function(){
        browser.driver.sleep(2000);
        firstNumber.sendKeys(10);
        secondNumber.sendKeys(20);
        goButton.click();
        expect(results.getText()).toEqual('30');
    });

    //Test Case 4
    it('Read the value from Text Field',function(){
        firstNumber.sendKeys(100);
        expect(firstNumber.getAttribute('value')).toEqual('100');
    });
});