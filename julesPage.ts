import {BasePage} from './basePage'
import{By} from 'selenium-webdriver'

export class Jules extends BasePage {
    homePage: By = By.xpath('(//a[@class="preSlide slideIn"])[2]')
    shopPage: By = By.xpath('(//a[@class="preSlide slideIn"])[4]')
    succulentArrrangment: By = By.xpath('(//a[@class="grid-item-link"])[1]')
    shippedGiftCard: By = By.xpath('(//a[@class="grid-item-link"])[2]')
    succulentKit: By = By.xpath('(//a[@class="grid-item-link"])[3]')
    dropdownColor: By = By.xpath('(//div[@class="variant-select-wrapper"])[1]')
    selectPeach: By = By.xpath('(//option[text()="Peach"])[1]')
    selectSize: By = By.xpath('(//div[@class="variant-select-wrapper"])[2]')
    selectMedium:By = By.xpath('(//option[text()="Medium"])[1]')
    purchaseButton: By = By.xpath('(//div[@class="sqs-add-to-cart-button sqs-suppress-edit-mode sqs-button-element--primary"])[1]')
    instagram: By = By.xpath('(//a[@class="icon icon--fill icon--sm  header-icon header-icon-border-shape-none header-icon-border-style-outline"])[3]')
    pintrest: By = By.xpath('(//a[@class="icon icon--fill icon--sm  header-icon header-icon-border-shape-none header-icon-border-style-outline"])[2]')
    facebook: By = By.xpath('(//a[@class="icon icon--fill icon--sm  header-icon header-icon-border-shape-none header-icon-border-style-outline"])[1]')

    constructor(){
        super({
            url:"https://thesucculentshop.com/"
        })
    }
    async tabs() {
        let myTabs = await this.driver.getAllWindowHandles()
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1000);
        await this.driver.close()
        await this.driver.switchTo().window(myTabs[0])
    } 
}