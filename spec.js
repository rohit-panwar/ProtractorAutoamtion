describe('Enter name feature', function() {
    it('Enter name as Rohit', function () {
        browser.get('https://angularjs.org/');
        element(by.model('yourName')).sendKeys('Rohit');
        browser.driver.sleep(3000);
        var generatedText=element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
        expect(generatedText.getText()).toEqual('Hello Rohit!');

    });
});

describe('Verify title of the page', function(){
    it('Get the title', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        var titlePage=browser.getTitle();
        expect(titlePage).toEqual('Super Calculator');
        //expect(browser.getTitle()).toEqual('Super Calculator');
    });
});

describe('Perform math operation',function(){
    it('Add 2 numbers',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(10);
        browser.driver.sleep(2000);
        element(by.model('second')).sendKeys(20);
        browser.driver.sleep(2000);
        element(by.id('gobutton')).click();
        browser.driver.sleep(2000);
        var getResult= element(by.className('ng-binding')).getText();
        browser.driver.sleep(2000);
        expect(getResult).toEqual('30');
    });
});