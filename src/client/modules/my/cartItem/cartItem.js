import { LightningElement, api } from 'lwc';

export default class CartItem extends LightningElement {

    @api
    itemName;

    @api
    itemPrice;

    @api
    itemQuantity;

    @api
    itemImage;
    
    handleDelItem(event){
        console.log("inside item delete");
        console.log = event.target.value;
        //this.dispatchEvent(new CustomEvent('shopdelete', { bubbles: true }));

    }
}
