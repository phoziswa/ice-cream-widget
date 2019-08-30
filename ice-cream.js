function IceCreamWidget(){
    var getPrice = 0;

    var flavours = [
       {flavour: "Vanilla", price: 5.00},
       {flavour: "Chocolate", price: 8.50},
       {flavour: "Strawberry", price: 6.80}  
   ];

   var containerType = [
    {container: "Plain cone", price: 3.00},
    {container: "Sugar cone", price: 4.50},
    {container: "Paper cup", price: 6.00} 
];
   var  toppings = [
   {topping: "Smarties", price: 12.00},
   {topping: "Chocolate dip", price: 15.30},
   {topping: "Caramel dip", price: 18.10},
   {topping: "Oreos", price: 13.20},
   {topping: "Astros", price: 16.05}  
];

function iceCreamFlavours(flavour){
     for (let i = 0; i < flavours.length; i++) {
         const element = flavours[i];
         if(element.flavour === flavour){
            getPrice += element.price;
         }
     } 
}

function iceCreamContainer(container) {
    
  for (let i = 0; i < containerType.length; i++) {
    const elem = containerType[i];
    if(elem.container === container){
       getPrice += elem.price;
    }
 }
}
function iceCreamTopping(topping) {
    for (let i = 0; i < toppings.length; i++) {
        const elem = toppings[i];
        if(elem.topping === topping){
           getPrice += elem.price;
        } 
    }
}
function totalPrice(){
    return getPrice.toFixed(2) 
}
return{
    iceCreamFlavours,
    iceCreamContainer,
    iceCreamTopping,
    totalPrice
 }
}