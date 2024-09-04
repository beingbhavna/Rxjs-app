import { expect } from '@wdio/globals'
import WebDriver from 'webdriver'
import { remote } from 'webdriverio';
import ListPage from '../pageobjects/login.page'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        const browser = await remote({
            capabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': {
                    args: process.env.CI ? ['headless', 'disable-gpu'] : []
                }
            }
        })
        await browser.url('http://localhost:4200/observables')
        // await ListPage.open()

        const inputElem = await browser.$('#fromEvent')
        await inputElem.click();
        for(let i=0;i<10;i++) {
            const btnElem = await browser.$('#addBtn')
            await btnElem.click();
        }
    })
})

