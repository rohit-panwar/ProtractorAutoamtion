describe('Function and get All element', function(){
    var firstNumber=element(by.model('first'));
    var secondNumber=element(by.model('second'));
    var goButton=element(by.id('gobutton'));
    var history=element.all(by.repeater('result in memory'));

    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.driver.sleep(2000);
    });

    function add(a,b){
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }

    it('Execute function and read the value of all-history fields',function(){
        add(10,20);
        add(20,30);
        add(30,40);
        expect(history.count()).toEqual(3);
        add(40,50);
        add(50,60);
        expect(history.count()).toEqual(5);
    });
});