import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    //item data  
    @track
    myItems = [
        { name: "Pen", image: "resources/pen.png" ,price:5},
        { name: "Book", image: "resources/book.png", price:7},
        { name: "Rubiks Cube", image: "resources/rubik.png", price:10 }
    ];
    
    //cart item data
    @track
    myCart = [];
    
    //cart total price
    cartTotalPrice = 0;

    handleItemSelect(event) {

        //index of the selected item row
        let storeIndex = event.target.dataset.index;
        console.log("Selected Item Index: " + storeIndex);
        //get item data of the selected index
        let selitem = this.myItems[storeIndex];

        let itemExist = false;

        if (this.myCart.length > 0)
        {
            this.myCart.forEach(element => {
                 if(element.name === selitem.name)
                 {
                     element.quantity = element.quantity + 1;
                     element.total = element.price * element.quantity;
                     itemExist = true;
                 }
            });
        }
        
        if (itemExist === false)
        {
            let itemTotal = selitem.price * 1;
            //prepare the data ot be added to the cart
            let cartitem = { name: selitem.name, image: selitem.image, price: selitem.price, quantity: 1, total: itemTotal, selected: false };
        
            //add data to cart
            this.myCart.push(cartitem);
        }
        
        //update cart total price
        this.updateCartTotalPrice(this.myCart);
    }
    
    //function to update cart total price
    updateCartTotalPrice(cartItems)
    {
          this.cartTotalPrice = 0;
          cartItems.forEach(element => {
              this.cartTotalPrice = this.cartTotalPrice + element.price * element.quantity;
          });
    }
    
    //function to sort items in the cart by item name
    sortName() {
        console.log("inside sortName");
        this.myCart.sort(function(first,second) {
            let nameA = first.name;
            let nameB = second.name;
            if (nameA < nameB)
            {
                return -1;
            }
            else if (nameA > nameB)
            {
                return 1;
            }
            return 0;
        });
    }
    
    //function to handle deleting items from the cart
    handleItemDelete(event)
    {
        //get the index of the row raising the delete event
        let cartIndex = event.target.dataset.index;
        console.log("CartIndex: " + cartIndex);
        //remove it from myCart array. It will refresh the display
        this.myCart.splice(cartIndex,1);
        //update cart total price after deletion
        this.updateCartTotalPrice(this.myCart);
    }

    handleItemChecked(event)
    {
        let cartIndex = event.target.dataset.index;
        console.log("CartIndex: " + cartIndex);

        let cartItem = this.myCart[cartIndex];
        if (cartItem.selected)
            cartItem.selected = false;
        else
            cartItem.selected = true;

    }

    deleteSelectedItems()
    {
        if (this.myCart.length > 0)
        {
            this.myCart = this.myCart.filter( obj =>
                          obj.selected === false);

            //update cart total price after deletion
            this.updateCartTotalPrice(this.myCart);
        }
    }
}
 