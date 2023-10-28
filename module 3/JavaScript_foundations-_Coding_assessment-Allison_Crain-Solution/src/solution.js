/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(products, name, size) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.name === name && product.availableSizes.includes(size))
    return product;
  }
  return null;
}

function addProductToCart(product, cart) {
if (!cart) {
  let newCart = {};
  newCart[product.name] ={
    priceInCents: product.priceInCents,
    quantity: 1,
  }
  return newCart;
} else {
  if(Object.keys(cart).includes(product.name)){
    cart[product.name].quantity += 1;
    return cart;
  } else{
    let newCart = {...cart};
    newCart[product.name] = {
      priceInCents: product.priceInCents,
      quantity: 1
    }
    return newCart;
  }
}
}
// {
//   "Court Sneaker": {
//     priceInCents: 8800,
//     quantity: 1
//   }
// }

function calculateTotal(cart) {
 //initialize the total to 0
  let total = 0;
  //loop through the cart
  for (const productName in cart) {
    //get the product
    const product = cart[productName];
    console.log(product)
    //Add the products price to the total.
    total += product.priceInCents * product.quantity;
  }
  //return the total
  return total; 
}



function printReceipt(cart) {
if (Object.keys(cart).length === 0) return null;
  
let receipt = "";
Object.values(cart).forEach((item, index) => {
  let subTotal = item.quantity * item.priceInCents;
  receipt += `${item.quantity}x${Object.keys(cart)[index]} - ${printablePrice(subTotal)}\n`;
});
receipt += `Total: ${printablePrice(calculateTotal(cart))}`;
return receipt;
}











module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
