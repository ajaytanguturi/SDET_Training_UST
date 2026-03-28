import {Page} from '@playwright/test';
export class TrainSearchPOM{
    readonly page:Page;
    readonly fromInput;
    readonly toInput;
    readonly datePicker;
    readonly searchButton;
    
    constructor(page:Page){
        this.page=page;
        this.fromInput=page.getByRole('textbox',{name: 'From'});
        this.toInput=page.getByRole('textbox', {name: 'To'});
        this.datePicker=page.locator('[data-field="date"]');
        this.searchButton=page.getByRole('button',{name:'Search Trains', exact:true});
    }

    async performSearch(from:string, to:string){
        if(from && from.trim()!==""){
            await this.page.locator("//div[contains(@data-field, 'src')]").click();
            await this.fromInput.fill(from);
        await this.page.getByText(from).nth(0).click();
        
        }
       // await this.page.getByText('From', { exact: true }).click();
        // await this.page.locator("//div[contains(@data-field, 'src')]").click();
        // await this.fromInput.fill(from);
        // await this.page.getByText(from).nth(0).click();

        if(to && to.trim()!==""){
            await this.page.locator("//div[contains(@data-field, 'dst')]").click();
            await this.toInput.fill(to);
        await this.page.getByText(to).nth(0).click();
        
        }
        // await this.page.locator("//div[contains(@data-field, 'dst')]").click();
        // await this.toInput.fill(to);
        // await this.page.getByText(to).nth(0).click();
        await this.datePicker.click();
        
        await this.page.keyboard.press('Escape');
        await this.searchButton.click({force:true});
    }
}