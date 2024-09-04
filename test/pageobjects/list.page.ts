import { $ } from '@wdio/globals'
import Page from './page';
import { remote } from 'webdriverio';
import { browser } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ListPage extends Page {

    public get btnSubmit () {
        return $('#fromEvent');
    }

    public async login (username: string, password: string) {
        const inputElem = await browser.$('#fromEvent')
        await inputElem.click();
        for(let i=0;i<10;i++) {
            const btnElem = await browser.$('#addBtn')
            await this.btnSubmit.click();
        }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new ListPage();


    // const inputElem = await browser.$('#fromEvent')
    // await inputElem.click();
    // for(let i=0;i<10;i++) {
    //     const btnElem = await browser.$('#addBtn')
    //     await btnElem.click();
    // }
