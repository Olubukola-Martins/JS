const btns = document.querySelectorAll("button");
let qty = document.querySelector("#item-qty");
const decrease = document.querySelector("#decrease");
const increase = document.querySelector("#increase");
let cart = document.querySelector("#cart");
let addToCart = document.getElementById("addToCart");
let itemsList = [];
const item = document.querySelector(".item")
let addItems = document.createElement("div");
let product = addToCart.parentElement.parentElement;
let productName = product.getElementsByClassName("product-name")[0].innerHTML;
let productPrice = product.getElementsByClassName("product-price")[0].innerHTML.replace('$', " ");
// item.appendChild(addItems);
let countValue;

// let info = addToCart.parentElement.children;
// let productName = info[2].tagName;



  function handleQuantity(){
 let count = 0; 
    btns.forEach(function handleBtns(btn){
    btn.addEventListener("click",function (e){
        if (e.currentTarget == increase) {
         count ++; 
        } else if (e.currentTarget == decrease && count >= 1) {
         count -- ;
        } else { count = 0};
        qty.innerHTML = count;
        console.log (qty.innerHTML);
        handleAddToCart(qty.innerHTML)
        // cart.textContent = count; //re-address cart    
    }     

)  
}
)
} 
handleQuantity();



 function handleAddToCart(x){
    addToCart.addEventListener("click", function(e){
        if(e.currentTarget == addToCart){
            // let x = parseInt(count);
            // qty.innerHTML = count;
            // let productQty = qty.innerHTML.replace("0", data[data.length - 1]);
            // addItems.appendChild(productName);
            //  alert(productPrice);
            //  alert(productName);
            //  alert(productQty)

            item.appendChild(document.createTextNode(productName))
            alert (typeof item)

        }

    })
} 

handleAddToCart();