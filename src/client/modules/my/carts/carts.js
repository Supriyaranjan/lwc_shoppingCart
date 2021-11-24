import { LightningElement, api } from 'lwc';

export default class Carts extends LightningElement {

    @api
    itemName;

    @api
    itemPrice;

    @api
    itemImage;

    @api
    itemQuantity;

    @api
    itemSelected;

    @api
    itemTotal;
    
    handleDelItem(){
        console.log("inside item delete");
        //raise an 'itemdelete' event to the main app so that selected row
        //can be removed from cart.
        this.dispatchEvent(new CustomEvent('itemdelete', { bubbles: true }));

    }

    handleItemCheck(){
        console.log("inside checkbox event on change");

        this.dispatchEvent(new CustomEvent('itemchecked', { bubbles: true }));
    }
}