
var cardsGrid = document.querySelector(".cards-grid");
var search = document.getElementById("heroSearch");

var productlist = cardsGrid.querySelectorAll(".card");

const notFound = document.createElement("p");
notFound.textContent = "No products found";
notFound.style.display = "none";
notFound.style.textAlign = "center";
notFound.style.width = "100%";
cardsGrid.append(notFound);

search.addEventListener("keyup", function (event) {
    let enteredvalue = event.target.value.toUpperCase();
    let matchFound = false; 

    for (let count = 0; count < productlist.length; count++) {
       
        const productnameElement = productlist[count].querySelector("h2");

        if (productnameElement) {
            const productname = productnameElement.textContent;

            
            if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
                productlist[count].style.display = "none";
            } else {
                productlist[count].style.display = "block";
                matchFound = true; 
            }
        }
    }

   
    if (matchFound === true) {
        notFound.style.display = "none";
        notFound.style.padding = "30px"
        notFound.style.width = "40px"

    } else {
        notFound.style.display = "block";
    }
});


var audio=document.getElementById("myAudio")

function togglePlay(){
    if(audio.paused){
        audio.play();
    }
    else{
        audio.pause();
    }
}


