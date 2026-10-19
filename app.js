//empty box
const finalCart = [];


//fetch dta  from  server
async function getData(){
let response = await fetch('https://dummyjson.com/carts');
let data = await response.json();


//take  the  product through running the  loop
const carts = data.carts;
for(let i = 0; i<carts.length; i++){
    finalCart.push(...carts[i].products)
}
}
getData()

//set  the  time 
setTimeout(()=>{
let main = document.querySelector("#main");
  main.innerHTML = "";
    //cards show  on the  screen
    for (let i = 0; i<finalCart.length; i++){
        let title = finalCart[i].title;
        let price = (finalCart[i].price).toFixed(2);
        let quantity = finalCart[i].quantity;
        let total = (finalCart[i].total).toFixed(2);
        let imgURL = finalCart[i].thumbnail;
    main.innerHTML += `<div class="card  custom-card  shadow-sm overflow-hidden d-flex flex-column  mx-2 my-3" style="width: 22%; min-width: 250px;">
<div  class="overflow-hidden p-3 bg-white text-center position-relative">
<img src="${imgURL}" style="height: 300px; width : 100%; object-fit: contain;"  class="card-img-top" alt="${title}">
</div>
  <div class="card-body bg-light border-top d-flex flex-column" >
    
    <h5 class="fw-bold text-dark text-truncate mb-1 ">${title}</h5>
    <p class="card-text fg-2  card-text text-muted small mb-2">price: $${price} | Quantity: ${quantity}</p>

    <div  class="d-flex justify-content-between align-items-center mb-3">
    <span  class="text-success fw-bold fs-5">$${price}</span>
    <span  class="text-warning fw-bold">★ 4.5</span>
    </div>
    <div  class="text-secondary small mb-3">
    Quantity : ${quantity} | Total: <span  class="fw-bold text-dark">$${total}</span>
    </div>
   <button  class="btn btn-outline-primary w-100 mt-auto fw-bold py-2">
   <i class="bi bi-cart-plus"></i>Add to cart</button>
  </div>
</div>`
   
}
},2000);