function toggle() {
    const button = document.querySelector(".button");
    const tetxDIV = document.getElementById("extra");

    button.textContent = button.textContent == "More" ? "Less" : "More";
    tetxDIV.style.display = 
    tetxDIV.style.display == "none" || tetxDIV.style.display == "" ?
    tetxDIV.style.display = "block" : tetxDIV.style.display = "none";
    
}