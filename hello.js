const btns = document.querySelectorAll("button");
let qty = document.querySelector("#item-qty");
const decrease = document.querySelector("#decrease");
const increase = document.querySelector("#increase");
let count = 0;
let cart = document.querySelector("#cart");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        if (e.currentTarget == increase) {
        count ++
        } else if (e.currentTarget == decrease && count >= 1) {
        count --    
        } else { count = 0};
        qty.textContent = count;
        cart.textContent = count;
    }
)}
)
