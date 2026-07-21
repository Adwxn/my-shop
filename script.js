// Product Image Slider
const slides = document.querySelectorAll(".slide");

let current = 0;

function showSlide(index){

slides.forEach(slide=>{
slide.style.display="none";
});

slides[index].style.display="block";

}

showSlide(current);

setInterval(()=>{

current++;

if(current>=slides.length){

current=0;

}

showSlide(current);

},3000);


// Form Validation

function validateForm(){

const name=document.getElementById("name").value.trim();
const phone=document.getElementById("phone").value.trim();
const address=document.getElementById("address").value.trim();
const pin=document.getElementById("pin").value.trim();

if(name===""||phone===""||address===""||pin===""){

alert("Please fill all details.");

return false;

}

return true;

}


// Razorpay Payment

function payNow(){

if(!validateForm()) return;

window.location.href="https://razorpay.me/@adwinjacob";

}


// Cash On Delivery

function cashOnDelivery(){

if(!validateForm()) return;

const name=document.getElementById("name").value;
const phone=document.getElementById("phone").value;
const address=document.getElementById("address").value;
const pin=document.getElementById("pin").value;

const message=

`*New COD Order*%0A%0A`+

`🛍 Product: Automatic Shoe Cleaning Brush%0A`+

`💰 Price: ₹149%0A%0A`+

`👤 Name: ${name}%0A`+

`📞 Phone: ${phone}%0A`+

`📍 Address: ${address}%0A`+

`📮 PIN: ${pin}`;

window.open(

`https://wa.me/918281034177?text=${message}`,

"_blank"

);

}


// Buy Button Scroll

function openPopup(){

document.getElementById("buy").scrollIntoView({

behavior:"smooth"

});

}
