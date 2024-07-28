let button = document.getElementById("load-more");
let boxes = document.querySelectorAll(".special-display");

let check = true;

button.addEventListener("click", ()=>{

    if(check == true){

        for(const it of boxes){
            it.style.display = "flex";
        }
    
        button.textContent = "Show Less";
        check = false;
    }

    else{
        for(const it of boxes){
            it.style.display = "none";
        }
        button.textContent = "Load More";
        check = true;
    }
});
