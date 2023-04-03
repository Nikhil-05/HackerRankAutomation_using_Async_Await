const puppeteer = require("puppeteer");

const loginLink = 'https://www.hackerrank.com/auth/login';

const email = 'sidananikhil00@gmail.com';
const password = 'Nikhil@hell2608';


let page ;

(async function(){
try {
    let browserInstance =  await puppeteer.launch({
        headless:false, // will make the browser visible 
    
        args :['--start-maximized'],
    
        defaultViewport:null 
    
    })

    let newTab = await browserInstance.newPage()
    await newTab.goto(loginLink)
    await newTab.type("input[id='input-1']", email,{delay:50})
    await newTab.type("input[type='password']",password,{delay:50})
    await newTab.click('button[data-analytics="LoginPassword"]',{delay:50})
    await waitAndClick('.topic-card a[data-attr1="algorithms"]',newTab)
    await waitAndClick('input[value="warmup"]', newTab)
    let allchallanges = await newTab.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled',{delay:50})
    console.log('total questions', allchallanges.length)

    
} catch (error) {
    console.log(error)
}
})()

async function waitAndClick(selector,cPage){
    await cPage.waitForSelector(selector)

    let selectorClicked = cPage.click(selector)

    return selectorClicked

}