
let input = document.getElementById("inputBox");
let btn = document.getElementById("btn")
let error = document.getElementById("error-email")
let success = document.getElementById("success-email")

btn.addEventListener('click', (event) =>{
    event.preventDefault();

    let val = input.value.trim();

    if(val == ""){
        // alert("Input box is EMPTY!");
        error.style.display = "flex";
        input.classList.add("trouble");
        success.style.display = "none";
    }else{
        success.style.display = "block";
        error.style.display = "none";
    }
})

// alert("Loaded!");