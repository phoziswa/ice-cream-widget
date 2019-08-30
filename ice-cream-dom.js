const iceCreamFlavourElement = document.querySelector(".iceCreamFlavour");
const iceCreamContainerElement = document.querySelector(".iceCreamContainer");
const iceCreamToppingElement = document.querySelector(".iceCreamTopping");
const getPriceBtnElement = document.querySelector(".getPriceBtn");
const totalElement = document.querySelector(".total");

var instance = IceCreamWidget();

function chooseIceCream() {
    var checkedRadioBtn = document.querySelector("input[name='btn']:checked");
    if (checkedRadioBtn) {
        var flavour = checkedRadioBtn.value;
         instance.iceCreamFlavours(flavour);
         totalElement.innerHTML = instance.totalPrice()
    }
   
    var checkedRadioButton = document.querySelector("input[name='button']:checked");
    if (checkedRadioButton) {
        var flav = checkedRadioButton.value;
          instance.iceCreamContainer(flav);
          totalElement.innerHTML = instance.totalPrice()
    
  }
}
getPriceBtnElement.addEventListener('click', chooseIceCream);

