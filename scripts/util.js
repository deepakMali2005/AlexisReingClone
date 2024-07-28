// for setting anchor tags _target: blank attribute

let anchor = document.getElementsByTagName("a");

for(let i = 0; i < anchor.length; i++){
    if(anchor[i].classList.contains("noBlank"))  continue;
    anchor[i].setAttribute('target', '_blank'); 
}
//-------------------------------------------------------------------------------------------




// for setting images in instagram section  

let insta = document.querySelectorAll(".instagram-grid-items");

for(let i = 1; i <= 20; i++){
    insta[i-1].style.backgroundImage = `url('instagramPhotos/insta${i}.jpg')`;
    let textNode = document.createTextNode("Open Instagram")
    let node = document.createElement("p")
    node.appendChild(textNode)
    insta[i-1].appendChild(node)
}

//-------------------------------------------------------------------------------------------



// for setting copyright year

let year = document.querySelector(".year");

let currYear  = new Date().getFullYear();

year.textContent = currYear;

//----------------------------------------------------------------------------------------------



// for showing alert after enquiry message is sent through contact page

function savedMessage(){
    alert("Message sent successfully...");
}


//-------------------------------------------------------------------------------------------------



