import { LightningElement, api } from 'lwc';

export default class Items extends LightningElement{

    @api
    itemName;

    @api
    itemPrice;

    @api
    itemImage;

    handleAddItem() {
        
        //let item_name = evt.target.value;
        console.log("Inside Add item");

        //raise item row button click event to main app so that it can 
        //be added to myCarts array.
        this.dispatchEvent(new CustomEvent('itemselect', { bubbles: true }));

        //Once item added change the text of button to added.
        this.template.querySelector("button").innerText = "Add Again";

    }

}
