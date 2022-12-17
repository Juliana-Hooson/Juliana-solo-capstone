import {Jules} from './julesPage'
const jules = new Jules()
const fs=require ('fs')

describe('Jules Solo Project', () => {
    test('Confirming the shop page', async () => {
       await jules.navigate()
       await jules.click(jules.shopPage) 
       await jules.click(jules.succulentArrrangment)
       await jules.click(jules.shopPage)
       await jules.click(jules.shippedGiftCard) 
       await jules.click(jules.shopPage)
       await jules.click(jules.succulentKit)
       await jules.click(jules.homePage)
    })
    test('Social Media Test', async ()=> {
        await jules.navigate()
        await jules.click(jules.instagram)
        await jules.tabs()
        await jules.click(jules.pintrest)
        await jules.tabs()
        await jules.click(jules.facebook)
        await jules.tabs()
     })
     test('Add to Cart', async ()=> {
        await jules.navigate()
        await jules.click(jules.shopPage)
        await jules.click(jules.succulentArrrangment)
        await jules.click(jules.dropdownColor)
        await jules.click(jules.selectPeach)
        await jules.click(jules.selectSize)
        await jules.click(jules.selectMedium)
        await jules.click(jules.purchaseButton)
        await jules.driver.sleep(5000)
        await fs.writeFile(`${__dirname}/checkout.png`,
        await jules.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.error(e)
            else console.log("Save Successful")
        })
        await jules.driver.quit() 
     })
})